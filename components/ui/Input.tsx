import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-xs font-semibold text-slate-600">
          {label}
        </span>
      )}

      <input
        {...props}
        className={`
          w-full rounded-lg border border-slate-200
          bg-white px-3 py-2 text-sm text-slate-800
          outline-none transition
          placeholder:text-slate-400
          focus:border-[#1769aa]
          focus:ring-2 focus:ring-[#1769aa]/10
          ${className}
        `}
      />
    </label>
  );
}
