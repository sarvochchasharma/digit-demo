import React, { useState } from "react";
import Link from "next/link";
import CustomModal from "./CustomModal";
import CustomRoleCard, { Role } from "./CustomRoleCard";
import CustomRoleFormFields from "./CustomRoleFormFields";

const INITIAL_ROLES: Role[] = [
  {
    id: "1",
    name: "Citizen",
    description: "Submit application, track status, make payments and receive notifications",
    persona: "Citizen",
    isDefault: true,
    stepsCount: 1,
    permissions: ["Create Application", "View Application"],
    bannerClass: "citizen",
  },
  {
    id: "2",
    name: "Document Verifier",
    description: "Review submitted documents and verify correctness of application metadata",
    persona: "Employee",
    isDefault: false,
    stepsCount: 1,
    permissions: ["View Application", "Fill Checklist", "Edit Checklist"],
    bannerClass: "document-verifier",
  },
  {
    id: "3",
    name: "Field Inspector",
    description: "Conduct on-site inspections, fill inspection checklists and upload media",
    persona: "Employee",
    isDefault: false,
    stepsCount: 2,
    permissions: ["View Application", "Fill Checklist", "View Checklist"],
    bannerClass: "field-inspector",
  },
  {
    id: "4",
    name: "Approver",
    description: "Final authorization body to approve or reject verified applications",
    persona: "Employee",
    isDefault: false,
    stepsCount: 3,
    permissions: ["View Application", "Edit Application", "Fill Checklist"],
    bannerClass: "approver",
  },
];

export const CustomRolesDashboard: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>(INITIAL_ROLES);
  const [searchTerm, setSearchTerm] = useState("");

  // Modal control states
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // Active role being edited/deleted or creating
  const [activeRole, setActiveRole] = useState<Role | null>(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editPersona, setEditPersona] = useState<"Citizen" | "Employee">("Employee");
  const [editPermissions, setEditPermissions] = useState<string[]>([]);

  // Prevent background scrolling when modals are open
  React.useEffect(() => {
    if (isEditOpen || isDeleteOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isEditOpen, isDeleteOpen]);

  // Filter roles based on search term
  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenEdit = (role: Role) => {
    setActiveRole(role);
    setEditName(role.name);
    setEditDesc(role.description);
    setEditPersona(role.persona);
    setEditPermissions(role.permissions);
    setIsEditOpen(true);
  };

  const handleOpenCreate = () => {
    setActiveRole(null);
    setEditName("");
    setEditDesc("");
    setEditPersona("Employee");
    setEditPermissions(["View Application"]);
    setIsEditOpen(true);
  };

  const handleOpenDelete = (role: Role) => {
    setActiveRole(role);
    setIsDeleteOpen(true);
  };

  const handleSaveRole = () => {
    if (!editName.trim()) return;

    if (activeRole) {
      // Editing existing role
      setRoles((prev) =>
        prev.map((r) =>
          r.id === activeRole.id
            ? {
                ...r,
                name: editName,
                description: editDesc,
                persona: editPersona,
                permissions: editPermissions,
              }
            : r
        )
      );
    } else {
      // Creating new role
      const bannerClasses: Role["bannerClass"][] = ["citizen", "document-verifier", "field-inspector", "approver"];
      const randomBanner = bannerClasses[roles.length % bannerClasses.length];

      const newRole: Role = {
        id: (roles.length + 1).toString(),
        name: editName,
        description: editDesc,
        persona: editPersona,
        isDefault: false,
        stepsCount: 2,
        permissions: editPermissions,
        bannerClass: randomBanner,
      };
      setRoles((prev) => [...prev, newRole]);
    }

    setIsEditOpen(false);
  };

  const handleDeleteRole = () => {
    if (!activeRole) return;
    setRoles((prev) => prev.filter((r) => r.id !== activeRole.id));
    setIsDeleteOpen(false);
  };

  const togglePermission = (perm: string) => {
    setEditPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  return (
    <div className="w-full flex-1 max-w-6xl mx-auto py-6 px-4 bg-slate-50 text-slate-900">
      {/* Header section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="bg-transparent border-none cursor-pointer p-2 flex items-center justify-center rounded-full text-slate-900 transition-colors hover:bg-slate-200" aria-label="Back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 m-0">Roles Designer</h1>
            <p className="text-sm text-slate-600 mt-1 mb-0">Define who can access and act on this service (CUSTOM style)</p>
          </div>
        </div>

        <button className="!px-4 !py-2 font-semibold rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center gap-2 !bg-teal-800 !border-solid !border !border-teal-800 hover:!bg-teal-900 hover:!border-teal-900 !text-white shadow-sm focus:ring-teal-800" onClick={handleOpenCreate}>
          + Create New Role
        </button>
      </div>

      {/* Info Banner alert */}
      <div className="flex items-start gap-3 bg-[#EEF8F6] border border-[#B3DED8] rounded-lg p-4 mb-6">
        <div className="text-[#0A6A60] shrink-0 mt-0.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <p className="text-sm text-slate-800 m-0 leading-relaxed font-medium">
          Changes to roles automatically flow into Workflow steps, the Service Preview and every related configuration.
        </p>
      </div>

      {/* Search and Toggle buttons */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="relative !mb-0 w-full sm:w-[320px]">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600 pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            className="block w-full !py-2.5 !pl-10 !pr-3 text-sm border-solid !border !border-slate-300 rounded-lg bg-white text-slate-900 !outline-none transition-colors focus:!border-teal-800 focus:!ring-2 focus:!ring-teal-800/10"
            placeholder="Search role"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Route Swapping Selector */}
        <div className="flex gap-2 bg-slate-200/60 p-1.5 rounded-lg border border-slate-300/60 text-sm font-semibold">
          <Link
            href="/digit"
            className="px-4 py-1.5 rounded-md transition-all text-slate-600 hover:text-slate-900"
          >
            Official DIGIT
          </Link>
          <Link
            href="/custom"
            className="px-4 py-1.5 rounded-md transition-all bg-white text-emerald-800 shadow-sm"
          >
            Custom Scratch
          </Link>
        </div>
      </div>

      {/* Cards list */}
      {filteredRoles.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center text-slate-500 font-medium">
          No roles match your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => (
            <CustomRoleCard
              key={role.id}
              role={role}
              onEdit={() => handleOpenEdit(role)}
              onDelete={() => handleOpenDelete(role)}
            />
          ))}
        </div>
      )}

      {/* --- EDIT DIALOG MODALS --- */}
      <CustomModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title={activeRole ? "Edit Role" : "Create Role"}
        footer={
          <>
            <button className="!px-4 !py-2 font-semibold rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center gap-2 !bg-white !border-solid !border !border-slate-300 hover:!bg-slate-50 hover:!border-slate-400 !text-slate-700 shadow-sm focus:ring-slate-200" onClick={() => setIsEditOpen(false)}>
              Cancel
            </button>
            <button className="!px-4 !py-2 font-semibold rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center gap-2 !bg-teal-800 !border-solid !border !border-teal-800 hover:!bg-teal-900 hover:!border-teal-900 !text-white shadow-sm focus:ring-teal-800" onClick={handleSaveRole}>
              Save Changes
            </button>
          </>
        }
      >
        <CustomRoleFormFields
          editName={editName}
          setEditName={setEditName}
          editDesc={editDesc}
          setEditDesc={setEditDesc}
          editPersona={editPersona}
          setEditPersona={setEditPersona}
          editPermissions={editPermissions}
          togglePermission={togglePermission}
        />
      </CustomModal>

      {/* --- DELETE DIALOG MODALS --- */}
      <CustomModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        title={activeRole ? `Delete role "${activeRole.name}"?` : ""}
        isDelete
        footer={
          <>
            <button className="!px-4 !py-2 font-semibold rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center gap-2 !bg-white !border-solid !border !border-slate-300 hover:!bg-slate-50 hover:!border-slate-400 !text-slate-700 shadow-sm focus:ring-slate-200" onClick={() => setIsDeleteOpen(false)}>
              Cancel
            </button>
            <button className="!px-4 !py-2 font-semibold rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center gap-2 !bg-[#EB3333] !border-solid !border !border-[#EB3333] hover:!bg-[#CC2828] hover:!border-[#CC2828] !text-white shadow-sm focus:ring-[#EB3333]" onClick={handleDeleteRole}>
              Delete
            </button>
          </>
        }
      >
        <p className="text-sm text-slate-600 m-0">
          Workflow steps assigned to this role will need to be reassigned manually. This cannot be undone.
        </p>
      </CustomModal>
    </div>
  );
};

export default CustomRolesDashboard;
