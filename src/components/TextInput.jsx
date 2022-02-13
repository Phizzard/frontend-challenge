import { Input, InputLabel } from "components/Input";
import React from "react";

export const TextInput = React.forwardRef(({ name, label, ...props }, ref) => {
  return (
    <div ref={ref}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <div className="mt-1">
        <Input name={name} {...props} />
      </div>
    </div>
  );
});
