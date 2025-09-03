import React from "react";
import clsx from "clsx";

export function Badge({ children, variant = "default", className }) {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors";

  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    secondary:
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    outline:
      "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
  };

  return (
    <span className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}
