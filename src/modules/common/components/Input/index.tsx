import clsx from "clsx";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";

import inputLoaderAnimation from "../../../../../public/animations/input-loader-animation.json";
import qUpLoaderSuccessAnimation from "../../../../../public/animations/qup-loader-success-animation.json";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "textarea"
    | "date"
    | "time"
    | "datetime-local";
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isDisabled?: boolean;
  error?: string;
  containerClasses?: string;
  hookFormRegisterReturn?: any;
  defaultValue?: string | number;
  ref?: any;
  rows?: number;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  isLoading?: boolean;
  isSuccess?: boolean;
}

const getErrorOrDisabledFocusRing = (isDisabled: boolean, error?: string) => {
  if (error) return "focus:ring-red-500";
  if (isDisabled) return "focus:ring-gray-600";
  return "focus:ring-primary-600";
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
  ref,
  isDisabled = false,
  error,
  containerClasses,
  inputProps,
  hookFormRegisterReturn,
  rows,
  defaultValue,
  isLoading,
  isSuccess,
}) => {
  const [isEnded, setIsEnded] = useState<boolean>(false);
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

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setTimeout(() => {
        setIsEnded(true);
      }, 2000);
    }
  }, [isLoading, isSuccess]);

  useEffect(() => {
    if (isLoading) setIsEnded(false);
  }, [isLoading]);

  return (
    <div className={clsx("w-64", containerClasses)}>
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-200"
        >
          {label}
        </label>
      )}
      <div>
        {type === "textarea" ? (
          <textarea
            name={label}
            id={label}
            className={inputStyles}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            disabled={isDisabled}
            {...hookFormRegisterReturn}
          />
        ) : (
          <div className="relative cursor-wait">
            {isLoading && !isEnded && (
              <div className="absolute flex h-full w-full items-center justify-center rounded-md bg-gray-200/25 backdrop-blur-[2px]">
                <Lottie
                  animationData={inputLoaderAnimation}
                  loop
                  className="h-full w-full "
                />
              </div>
            )}
            {!isLoading && isSuccess && !isEnded && (
              <div className="absolute flex h-full w-full items-center justify-center rounded-md bg-gray-200/25 backdrop-blur-[2px]">
                <Lottie
                  animationData={qUpLoaderSuccessAnimation}
                  className="h-full w-full  "
                  loop={false}
                />
              </div>
            )}
            {(type === "date" ||
              type === "datetime-local" ||
              type === "time") && (
              <div className="text-gray-400">{placeholder}</div>
            )}
            <input
              type={type}
              defaultValue={defaultValue}
              name={label}
              id={label}
              className={inputStyles}
              ref={ref}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              disabled={isDisabled}
              {...inputProps}
              {...hookFormRegisterReturn}
            />
          </div>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
