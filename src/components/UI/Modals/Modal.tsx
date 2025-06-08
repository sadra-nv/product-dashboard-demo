import { XIcon } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-neutral-950 border-2 border-neutral-300 rounded-2xl shadow-xl max-w-4xl min-h-80 w-full p-6 relative z-10">
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
            aria-label="Close modal"
          >
            <XIcon
              weight="bold"
              className="w-6 text-red-700 hover:text-red-600"
            />
          </button>
        )}
        {title && (
          <h2 className="text-lg sm:text-2xl font-semibold mb-10">{title}</h2>
        )}
        <div>{children}</div>
      </div>
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};
