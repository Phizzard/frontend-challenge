import React from "react";

export const Select = React.forwardRef(({ label, name, defaultValue, placeholder, children, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={name} className="block text-lg font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl cursor-pointer"
        defaultValue={defaultValue}
        placeholder={placeholder}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    </div>
  );
});
