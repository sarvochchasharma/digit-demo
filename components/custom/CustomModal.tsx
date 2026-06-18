import React, { useEffect } from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  isDelete?: boolean;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  isDelete = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-[4px] flex items-center justify-center z-[9999] p-4" onClick={onClose}>
      <div
        className={`bg-white rounded-2xl w-full shadow-xl overflow-hidden animate-[modalEnter_0.25s_cubic-bezier(0.16,1,0.3,1)] text-slate-900 ${isDelete ? "max-w-[440px]" : "max-w-[500px]"}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="px-5 py-4 flex justify-between items-center border-b border-slate-100">
          <h2 id="modal-title" className="!text-xl !font-bold !text-slate-900 !m-0">
            {title}
          </h2>
          <button className="bg-transparent border-none cursor-pointer text-slate-500 flex items-center justify-center p-1 rounded transition-colors hover:bg-slate-100 hover:text-slate-900" onClick={onClose} aria-label="Close modal">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="p-5">{children}</div>

        <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 rounded-b-2xl">{footer}</div>
      </div>
    </div>
  );
};

export default CustomModal;
