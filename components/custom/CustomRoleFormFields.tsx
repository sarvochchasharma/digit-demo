import React from "react";
import CustomCheckBoxPill from "./CustomCheckBoxPill";

export const ALL_PERMISSIONS = [
  "Create Application",
  "Edit Application",
  "View Application",
  "Fill Checklist",
  "Edit Checklist",
  "View Checklist",
];

interface CustomRoleFormFieldsProps {
  editName: string;
  setEditName: (val: string) => void;
  editDesc: string;
  setEditDesc: (val: string) => void;
  editPersona: "Citizen" | "Employee";
  setEditPersona: (val: "Citizen" | "Employee") => void;
  editPermissions: string[];
  togglePermission: (perm: string) => void;
}

export const CustomRoleFormFields: React.FC<CustomRoleFormFieldsProps> = ({
  editName,
  setEditName,
  editDesc,
  setEditDesc,
  editPersona,
  setEditPersona,
  editPermissions,
  togglePermission,
}) => {
  return (
    <>
      <div className="mb-5 last:mb-0">
        <label className="block text-sm font-bold text-slate-700 mb-1">Role Name</label>
        <input
          type="text"
          className="block w-full !py-2.5 !px-3 border-solid !border !border-slate-300 rounded-lg text-sm bg-white text-slate-900 transition-colors focus:outline-none focus:!border-teal-800 focus:ring-2 focus:ring-teal-800/10"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          placeholder="Enter role name"
        />
      </div>

      <div className="mb-5 last:mb-0">
        <label className="block text-sm font-bold text-slate-700 mb-1">Description</label>
        <textarea
          className="block w-full !py-2.5 !px-3 border-solid !border !border-slate-300 rounded-lg text-sm bg-white text-slate-900 transition-colors focus:outline-none focus:!border-teal-800 focus:ring-2 focus:ring-teal-800/10 min-h-[100px] resize-y"
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
          placeholder="Enter role description"
        />
      </div>

      <div className="mb-5 last:mb-0">
        <label className="block text-sm font-bold text-slate-700 mb-1">Persona</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className={`!border-solid !border !border-slate-200 rounded-lg p-4 cursor-pointer transition-all bg-white hover:!border-slate-300 ${editPersona === "Citizen" ? "!border-teal-800 bg-teal-50 ring-1 ring-teal-800" : ""}`}
            onClick={() => setEditPersona("Citizen")}
          >
            <div className="font-semibold text-slate-900 mb-1">Citizen</div>
            <div className="text-xs text-slate-500 leading-relaxed">Submits and tracks applications</div>
          </div>
          <div
            className={`!border-solid !border !border-slate-200 rounded-lg p-4 cursor-pointer transition-all bg-white hover:!border-slate-300 ${editPersona === "Employee" ? "!border-teal-800 bg-teal-50 ring-1 ring-teal-800" : ""}`}
            onClick={() => setEditPersona("Employee")}
          >
            <div className="font-semibold text-slate-900 mb-1">Employee</div>
            <div className="text-xs text-slate-500 leading-relaxed">Reviews and acts on applications</div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2 italic">
          Persona sets a recommended permission preset — adjust below as needed.
        </p>
      </div>

      <div className="mb-5 last:mb-0">
        <label className="block text-sm font-bold text-slate-700 mb-1">Permissions</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 !border-solid !border !border-slate-100 rounded-lg">
          {ALL_PERMISSIONS.map((perm) => (
            <CustomCheckBoxPill
              key={perm}
              label={perm}
              checked={editPermissions.includes(perm)}
              onChange={() => togglePermission(perm)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomRoleFormFields;
