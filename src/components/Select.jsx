import React from "react";
import { InputLabel } from "components/Input";

export const Select = React.forwardRef(({ label, name, defaultValue, placeholder, children, ...props }, ref) => {
  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <select
        id={name}
        name={name}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-2xl cursor-pointer"
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
