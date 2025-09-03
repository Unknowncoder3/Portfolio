import * as React from "react"

const TabsContext = React.createContext()

export function Tabs({ value, onValueChange, children, className }) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className }) {
  return (
    <div className={`flex gap-2 ${className || ""}`}>
      {children}
    </div>
  )
}

export function TabsTrigger({ value, children, className }) {
  const { value: activeValue, onValueChange } = React.useContext(TabsContext)
  const isActive = activeValue === value

  return (
    <button
      onClick={() => onValueChange(value)}
      className={`
        px-4 py-2 text-sm font-medium rounded-full transition-colors
        ${isActive
          ? "bg-blue-500 text-white shadow-md"
          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}
        ${className || ""}
      `}
    >
      {children}
    </button>
  )
}
