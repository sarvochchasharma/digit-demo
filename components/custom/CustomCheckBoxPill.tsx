import React from "react";

interface CustomCheckBoxPillProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CustomCheckBoxPill: React.FC<CustomCheckBoxPillProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div
      className={`flex items-center gap-2.5 p-3 !border-solid !border rounded-lg cursor-pointer transition-all ${checked ? "bg-teal-50/50 !border-teal-200 hover:bg-teal-50" : "bg-white !border-slate-200 hover:bg-slate-50 hover:!border-slate-300"}`}
      onClick={() => onChange(!checked)}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <div className={`w-5 h-5 rounded-full !border-solid !border-[2px] flex items-center justify-center transition-all ${checked ? "!border-teal-600 bg-teal-600 text-white" : "!border-slate-300 bg-white text-transparent"}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className={`text-sm font-medium transition-colors ${checked ? "text-teal-900" : "text-slate-700"}`}>{label}</span>
    </div>
  );
};

export default CustomCheckBoxPill;
