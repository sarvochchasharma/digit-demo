import React from "react";
import { Card, CardHeader, CardText, Button as DigitButton, Tag, SVG  } from "@egovernments/digit-ui-components";

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

interface DigitRoleCardProps {
  role: Role;
  onEdit: () => void;
  onDelete: () => void;
}



export const DigitRoleCard: React.FC<DigitRoleCardProps> = ({ role, onEdit, onDelete }) => {
  const getBannerColor = (bannerClass: string) => {
    switch(bannerClass) {
      case 'citizen': return 'bg-orange-50';
      case 'document-verifier': return 'bg-emerald-50';
      case 'field-inspector': return 'bg-blue-50';
      case 'approver': return 'bg-violet-50';
      default: return 'bg-slate-50';
    }
  };

  return (
    <div className="relative group h-full [&>div]:!p-0 [&>div]:!overflow-hidden [&>div]:!h-full [&>div]:!flex [&>div]:!flex-col">
      <Card>
        <div className={`h-[90px] relative flex items-end px-5 ${getBannerColor(role.bannerClass)}`}>
          <div className="absolute -bottom-6 left-5 w-[60px] h-[60px] bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 text-teal-800">
            <SVG.Person width="24" height="24" fill="currentColor" />
          </div>
        </div>
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100 z-10">
          <div className="[&_button]:!text-slate-400 [&_button]:!border-slate-300 hover:[&_button]:!text-teal-700 hover:[&_button]:!border-teal-700 [&_button]:!p-1 [&_button]:!min-w-0 [&_button]:!h-auto">
            <DigitButton label="" onClick={onEdit} icon="Edit" iconFill="currentColor" variation="secondary" />
          </div>
          <div className="[&_button]:!text-slate-400 [&_button]:!border-slate-300 hover:[&_button]:!text-red-600 hover:[&_button]:!border-red-600 hover:[&_button]:!bg-red-50 hover:[--digitv2-lightTheme-primary-1:#EB3333] hover:[--digitv2-lightTheme-primary-bg:#FEF2F2] [&_button]:!p-1 [&_button]:!min-w-0 [&_button]:!h-auto">
            <DigitButton label="" onClick={onDelete} icon="Delete" iconFill="currentColor" variation="secondary" />
          </div>
        </div>
        <div className="pt-9 px-5 pb-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <CardHeader className="!m-0 !p-0 !border-none !text-base">{role.name}</CardHeader>
            {role.isDefault && (
              <Tag 
                label="Default" 
                showIcon={false}
                className="!px-2 !py-0.5 !rounded-md !border !bg-slate-100 !border-slate-200 [&_.digit-tag-text]:!text-xs [&_.digit-tag-text]:!font-medium [&_.digit-tag-text]:!text-slate-600"
              />
            )}
          </div>
          <CardText className="!p-0 !mb-4 !min-h-[38px] !text-[13px]">{role.description}</CardText>
          <div className="flex flex-wrap gap-2 mt-auto">
            <Tag 
              label={role.persona} 
              showIcon={false}
              className="!px-2.5 !py-1 !rounded-md !border !bg-teal-50 !border-teal-100 [&_.digit-tag-text]:!text-xs [&_.digit-tag-text]:!font-medium [&_.digit-tag-text]:!text-teal-800"
            />
            <Tag 
              label={`${role.stepsCount} workflow steps`} 
              showIcon={false}
              className="!px-2.5 !py-1 !rounded-md !border !bg-indigo-50 !border-indigo-100 [&_.digit-tag-text]:!text-xs [&_.digit-tag-text]:!font-medium [&_.digit-tag-text]:!text-indigo-500"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DigitRoleCard;
