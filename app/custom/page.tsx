"use client";

import dynamic from "next/dynamic";

// Initialize globalConfigs needed by DIGIT libraries before dynamic import evaluates
if (typeof window !== "undefined") {
  (window as any).globalConfigs = {
    getConfig: (key: string) => {
      if (key === "LOCALE_DEFAULT") return "en";
      if (key === "LOCALE_REGION") return "IN";
      if (key === "STATE_LEVEL_TENANT_ID") return "pb";
      return "";
    },
  };
}

const CustomRolesDashboard = dynamic(() => import("../../components/custom/CustomRolesDashboard"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
      <div className="text-slate-600 font-semibold animate-pulse">Loading Custom Roles Designer...</div>
    </div>
  ),
});

export default function CustomRoute() {
  return <CustomRolesDashboard />;
}
