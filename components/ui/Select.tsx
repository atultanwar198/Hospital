import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({
  label,
  className = "",
  children,
  ...props
}: SelectProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-xs font-semibold text-slate-600">
          {label}
        </span>
      )}

      <select
        {...props}
        className={`
          w-full rounded-lg border border-slate-200
          bg-white px-3 py-2 text-sm text-slate-800
          outline-none transition
          focus:border-[#1769aa]
          focus:ring-2 focus:ring-[#1769aa]/10
          ${className}
        `}
      >
        {children}
      </select>
    </label>
  );
}
