import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isDisabled?: boolean;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
  isDisabled = false,
  error,
}) => {
  const baseStyles =
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset";
  const placeholderStyles = "placeholder:text-gray-400";
  const errorStyles = error ? "ring-red-500 ring-2" : "ring-gray-300";
  const focusStyles = `focus:ring-2 focus:ring-inset ${getErrorOrDisabledFocusRing(
    isDisabled,
    error
  )}`;
  const disabledStyles = isDisabled ? "text-gray-200 cursor-not-allowed" : "";
  const sizeStyles = "sm:text-sm sm:leading-6";

  const inputStyles = [
    baseStyles,
    placeholderStyles,
    errorStyles,
    focusStyles,
    disabledStyles,
    sizeStyles,
    className,
  ].join(" ");

  return (
    <div className="w-64">
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-200"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type={type}
          name={label}
          id={label}
          className={inputStyles}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

const getErrorOrDisabledFocusRing = (isDisabled: boolean, error?: string) => {
  if (error) return "focus:ring-red-500";
  if (isDisabled) return "focus:ring-gray-600";
  return "focus:ring-primary-600";
};

export default Input;
