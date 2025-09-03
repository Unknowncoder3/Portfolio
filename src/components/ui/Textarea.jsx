import * as React from "react"

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`
        w-full rounded-lg border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
        p-3 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500
        ${className || ""}
      `}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"
