import React from "react";

export default function PrimaryButton({ children, className, onClick, disabled }: { children: React.ReactNode, className?: string, onClick?: any, disabled?: boolean }) {
    return (
        <button
            className={`bg-button-500 text-dar p-3 rounded-lg uppercase font-bold ${disabled ? "bg-button-100" : "hover:drop-shadow-2xl transition ease-in-out duration-300" } ${className}`}
            onClick={() => { if (onClick) { onClick() } }}
            disabled={ disabled }
        >
            {children}
        </button>
    )
}