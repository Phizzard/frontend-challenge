import React from "react";

export const CardActions = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div ref={ref} className={`mt-12 space-y-4 sm:space-x-4 ${className}`} {...props}>
      {children}
    </div>
  );
});
