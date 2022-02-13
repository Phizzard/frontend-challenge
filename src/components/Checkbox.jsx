import React from "react";
import { InputLabel } from "components/Input";
export const Checkbox = React.forwardRef(({ name, label, description, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <div className="flex items-center h-5">
        <input
          id={name}
          aria-describedby={`${name}-description`}
          name={name}
          type="checkbox"
          className="focus:ring-cyan-500 h-5 w-5 text-cyan-600 border-gray-300 rounded-md cursor-pointer"
          ref={ref}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <p id={`${name}-description`} className="text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
});
