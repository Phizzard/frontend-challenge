import React from "react";

export const Card = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`dark:bg-slate-800 dark:border-transparent shadow-md py-8 px-4 rounded-2xl border border-gray-200 sm:px-10 bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
