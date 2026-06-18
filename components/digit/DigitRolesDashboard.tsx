import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PopUp,
  Button as DigitButton,
  Card,
  BackLink,
  AlertCard,
  TextInput,
  SVG,
  ButtonGroup,
  AccordionList, 
  AccordionItem,
  Paragraph,
  TextBlock
} from "@egovernments/digit-ui-components";
import DigitRoleCard, { Role } from "./DigitRoleCard";
import DigitRoleFormFields from "./DigitRoleFormFields";

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

export const DigitRolesDashboard: React.FC = () => {
  const router = useRouter();
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
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-transparent border-none cursor-pointer flex items-center justify-center rounded-full text-slate-900">
            <BackLink onClick={() => router.push("/")} label="Back" />
          </div>
          <div>
            <TextBlock header="Roles Designer" headerClassName="text-2xl font-bold text-slate-900 m-0" />
            <Paragraph value="Define who can access and act on this service (OFFICIAL style)" customClassName="text-sm text-slate-600 mt-1 mb-0" />
          </div>
        </div>

        <div>
          <DigitButton
            label="Create New Role"
            icon="Add"
            onClick={handleOpenCreate}
            variation="primary"
            size="medium"
          />
        </div>
      </div>

      <div className="mb-6">
        <AlertCard
          variant="info"
          text="Changes to roles automatically flow into Workflow steps, the Service Preview and every related configuration."
          label="Info"
        />
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="w-[320px]">
          <TextInput
            name="search-role"
            placeholder="Search role"
            populators={{ customIcon: "Search" }}
            value={searchTerm}
            onChange={(e: any) => setSearchTerm(e.target.value)}
            type="text"
            t={(val: any) => val}
          />
        </div>

        <div className="flex gap-2 p-1.5 rounded-lg border border-slate-300/60 text-sm font-semibold bg-white">
          <ButtonGroup
            buttonsArray={[
              <DigitButton
                key="digit"
                label="Official DIGIT"
                variation="primary"
                onClick={() => router.push("/digit")}               
              />,
              <DigitButton
                key="custom"
                label="Custom Scratch"
                variation="secondary"
                onClick={() => router.push("/custom")}
                className="!h-9 !px-4 !min-w-0"
              />
            ]}
          />
        </div>
      </div>

      {filteredRoles.length === 0 ? (
        <Card className="border-0 shadow-none bg-transparent !m-0">
          <Paragraph value="No roles match your search." customClassName="text-center text-slate-500" />
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => (
            <DigitRoleCard
              key={role.id}
              role={role}
              onEdit={() => handleOpenEdit(role)}
              onDelete={() => handleOpenDelete(role)}
            />
          ))}
        </div>
      )}

      {/* --- EDIT DIALOG MODALS --- */}
      {isEditOpen && (
        <PopUp
          heading={activeRole ? "Edit Role" : "Create Role"}
          onClose={() => setIsEditOpen(false)}
          footerChildren={[
            <DigitButton
              key="cancel"
              label="Cancel"
              onClick={() => setIsEditOpen(false)}
              variation="secondary"
            />,
            <DigitButton
              key="save"
              label="Save Changes"
              onClick={handleSaveRole}
              variation="primary"
            />,
          ]}
        >
          <DigitRoleFormFields
            editName={editName}
            setEditName={setEditName}
            editDesc={editDesc}
            setEditDesc={setEditDesc}
            editPersona={editPersona}
            setEditPersona={setEditPersona}
            editPermissions={editPermissions}
            togglePermission={togglePermission}
          />
        </PopUp>
      )}

      {/* --- DELETE DIALOG MODALS --- */}
      {isDeleteOpen && activeRole && (
        <PopUp
          heading={`Delete role "${activeRole.name}"?`}
          onClose={() => setIsDeleteOpen(false)}
          footerChildren={[
            <DigitButton
              key="cancel"
              label="Cancel"
              onClick={() => setIsDeleteOpen(false)}
              variation="secondary"
            />,
            <DigitButton
              key="delete"
              label="Delete"
              onClick={handleDeleteRole}
              className="!bg-[#EB3333] !border-[#EB3333] !text-white [&_*]:!text-white"
            />,
          ]}
        >
            <Paragraph value="Workflow steps assigned to this role will need to be reassigned manually. This cannot be undone." />
        </PopUp>
      )}

      
    </div>
  );
};

export default DigitRolesDashboard;
