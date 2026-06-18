import React from "react";

export interface Role {
  id: string;
  name: string;
  description: string;
  persona: "Citizen" | "Employee";
  isDefault: boolean;
  stepsCount: number;
  permissions: string[];
  bannerClass: "citizen" | "document-verifier" | "field-inspector" | "approver";
}

interface CustomRoleCardProps {
  role: Role;
  onEdit: () => void;
  onDelete: () => void;
}

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const CustomRoleCard: React.FC<CustomRoleCardProps> = ({ role, onEdit, onDelete }) => {
  const getBannerColor = (bannerClass: string) => {
    switch(bannerClass) {
      case 'citizen': return 'bg-orange-50';
      case 'document-verifier': return 'bg-emerald-50';
      case 'field-inspector': return 'bg-blue-50';
      case 'approver': return 'bg-violet-50';
      default: return 'bg-slate-50';
    }
  };

  const actionsElement = (
    <div className="absolute top-3 right-3 flex gap-2 opacity-85 transition-opacity group-hover:opacity-100">
      <button
        className="bg-white border border-slate-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-slate-600 transition-all hover:text-teal-800 hover:bg-teal-50 hover:border-teal-200"
        onClick={onEdit}
        aria-label="Edit role"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </button>
      <button
        className="bg-white border border-slate-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-slate-600 transition-all hover:text-red-600 hover:bg-red-50 hover:border-red-200"
        onClick={onDelete}
        aria-label="Delete role"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>
    </div>
  );

  const bannerElement = (
    <div className={`h-[90px] relative flex items-end px-5 ${getBannerColor(role.bannerClass)}`}>
      <div className="w-[60px] h-[60px] rounded-xl bg-white flex items-center justify-center absolute -bottom-6 left-5 shadow-sm border border-slate-100 text-teal-800">
        <UserIcon />
      </div>
    </div>
  );

  const pillsElement = (
    <div className="flex flex-wrap gap-2">
      <span className="text-xs font-medium px-2.5 py-1 rounded-md border text-teal-800 bg-teal-50 border-teal-100">{role.persona}</span>
      <span className="text-xs font-medium px-2.5 py-1 rounded-md border text-indigo-500 bg-indigo-50 border-indigo-100">{role.stepsCount} workflow steps</span>
    </div>
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden relative shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md text-slate-900 group">
      {bannerElement}
      {actionsElement}
      <div className="pt-9 px-5 pb-5 bg-white">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-base font-bold text-slate-900 m-0">{role.name}</h2>
          {role.isDefault && <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2 py-0.5 rounded">Default</span>}
        </div>
        <p className="text-[13px] text-slate-600 m-0 mb-4 leading-relaxed min-h-[38px]">{role.description}</p>
        {pillsElement}
      </div>
    </div>
  );
};

export default CustomRoleCard;
