import React from "react";

export const Checkbox = React.forwardRef(({ name, label, description, ...props }, ref) => {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id={name}
          aria-describedby={`${name}-description`}
          name={name}
          type="checkbox"
          className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded-md cursor-pointer"
          ref={ref}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className="font-medium text-gray-700">
          {label}
        </label>
        <p id={`${name}-description`} className="text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
});
