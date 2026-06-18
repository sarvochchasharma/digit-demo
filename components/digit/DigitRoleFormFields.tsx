import React from "react";
import { TextInput, TextArea, CheckBox, Card, TextBlock, CardText, CardHeader } from "@egovernments/digit-ui-components";

export const ALL_PERMISSIONS = [
  "Create Application",
  "Edit Application",
  "View Application",
  "Fill Checklist",
  "Edit Checklist",
  "View Checklist",
];

interface DigitRoleFormFieldsProps {
  editName: string;
  setEditName: (val: string) => void;
  editDesc: string;
  setEditDesc: (val: string) => void;
  editPersona: "Citizen" | "Employee";
  setEditPersona: (val: "Citizen" | "Employee") => void;
  editPermissions: string[];
  togglePermission: (perm: string) => void;
}

export const DigitRoleFormFields: React.FC<DigitRoleFormFieldsProps> = ({
  editName,
  setEditName,
  editDesc,
  setEditDesc,
  editPersona,
  setEditPersona,
  editPermissions,
  togglePermission,
}) => {
  const t = (val: string) => val || "";

  return (
    <div>
      <div className="mb-5 last:mb-0">
        <TextBlock caption="Role Name" wrapperClassName="!block !text-[13px] !font-semibold !text-slate-700 !mb-1" />
        <div className="[&_input]:!w-full [&_input]:!px-3 [&_input]:!py-2 [&_input]:!rounded-lg [&_input]:!border [&_input]:!border-slate-300 [&_input:focus]:!border-[#0A6A60] [&_input:focus]:!ring-1 [&_input:focus]:!ring-[#0A6A60] [&_input:focus]:!outline-none [&_input]:!transition-shadow">
          <TextInput
            name="role-name"
            value={editName}
            placeholder="Enter role name"
            onChange={(e: any) => setEditName(e.target.value)}
            t={t}
            type="text"
          />
        </div>
      </div>

      <div className="mb-5 last:mb-0">
        <TextBlock caption="Description" wrapperClassName="!block !text-[13px] !font-semibold !text-slate-700 !mb-1" />
        <div className="[&_textarea]:!w-full [&_textarea]:!px-3 [&_textarea]:!py-2 [&_textarea]:!rounded-lg [&_textarea]:!border [&_textarea]:!border-slate-300 [&_textarea:focus]:!border-[#0A6A60] [&_textarea:focus]:!ring-1 [&_textarea:focus]:!ring-[#0A6A60] [&_textarea:focus]:!outline-none [&_textarea]:!transition-shadow [&_textarea]:!min-h-[80px]">
          <TextArea
            name="role-description"
            value={editDesc}
            placeholder="Enter role description"
            onChange={(e: any) => setEditDesc(e.target.value)}
            t={t}
          />
        </div>
      </div>

      <div className="mb-5 last:mb-0">
        <TextBlock caption="Persona" wrapperClassName="!block !text-[13px] !font-semibold !text-slate-700 !mb-1" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card 
            onClick={() => setEditPersona("Citizen")} 
            className={`!cursor-pointer !rounded-lg !border !border-solid !p-[10px_12px] !m-0 !transition-colors !shadow-none ${
              editPersona === "Citizen" 
                ? '!border-[#0A6A60] !bg-[#f0fdfa]' 
                : '!border-slate-300 !bg-white'
            }`}
          >
            <CardHeader className="!m-0 !mb-0.5 !p-0 !text-sm !font-bold !text-slate-900">Citizen</CardHeader>
            <CardText className="!m-0 !p-0 !text-[11px] !text-slate-600 !leading-snug">Submits and tracks applications</CardText>
          </Card>
          <Card 
            onClick={() => setEditPersona("Employee")}
            className={`!cursor-pointer !rounded-lg !border !border-solid !p-[10px_12px] !m-0 !transition-colors !shadow-none ${
              editPersona === "Employee" 
                ? '!border-[#0A6A60] !bg-[#f0fdfa]' 
                : '!border-slate-300 !bg-white'
            }`}
          >
            <CardHeader className="!m-0 !mb-0.5 !p-0 !text-sm !font-bold !text-slate-900">Employee</CardHeader>
            <CardText className="!m-0 !p-0 !text-[11px] !text-slate-600 !leading-snug">Reviews and acts on applications</CardText>
          </Card>
        </div>
        <CardText className="!text-[11px] !text-slate-600 !mt-1.5">
          Persona sets a recommended permission preset — adjust below as needed.
        </CardText>
      </div>

      <div className="mb-5 last:mb-0">
        <TextBlock caption="Permissions" wrapperClassName="!block !text-[13px] !font-semibold !text-slate-700 !mb-1" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ALL_PERMISSIONS.map((perm) => (
            <div key={perm} className="[&>div]:!p-[8px_10px] [&>div]:!border [&>div]:!border-slate-300 [&>div]:!rounded-lg [&>div]:!mb-0">
              <CheckBox
                label={perm}
                checked={editPermissions.includes(perm)}
                onChange={() => togglePermission(perm)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitRoleFormFields;
