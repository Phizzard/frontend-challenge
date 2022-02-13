import classNames from "classnames";

const PRIMARY_VARIANT = "primary";
const SECONDARY_VARIANT = "secondary";
const OUTLINED_VARIANT = "outlined";

export function Button({ variant = PRIMARY_VARIANT, disabled, onClick, className, children, ...props }) {
  const variantClasses = classNames({
    "shadow-sm text-white bg-indigo-600 hover:bg-indigo-700": variant === PRIMARY_VARIANT,
    "text-indigo-700 bg-indigo-100 hover:bg-indigo-200": variant === SECONDARY_VARIANT,
    "border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50": variant === OUTLINED_VARIANT,
  });

  const disabledClasses = classNames({
    "bg-indigo-600/25 hover:bg-indigo-600/25": disabled,
  });

  return (
    <button
      type="button"
      className={`inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${variantClasses} ${disabledClasses} ${className}`}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {children}
    </button>
  );
}
