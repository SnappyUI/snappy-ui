import React from "react";

type TextAreaProps = {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (newValue: string) => void;
  className?: string;
};

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  placeholder = "",
  rows = 4,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="w-[600px]">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className={`block p-2.5 w-full text-sm text-black bg-[#f5f5f5] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#110f0f] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={event => onChange?.(event.target.value)}
      >
      </textarea>
    </div>
  );
};
