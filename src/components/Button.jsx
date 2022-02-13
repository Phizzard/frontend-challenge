import classNames from "classnames";

const PRIMARY_VARIANT = "primary";
const SECONDARY_VARIANT = "secondary";
const OUTLINED_VARIANT = "outlined";

export function Button({ variant = PRIMARY_VARIANT, disabled, onClick, className, children, ...props }) {
  const variantClasses = classNames({
    "dark:bg-cyan-300 dark:text-slate-900 shadow-sm text-white border-transparent bg-cyan-600 hover:bg-cyan-700 dark:hover:bg-cyan-400":
      variant === PRIMARY_VARIANT,
    "text-cyan-700 bg-cyan-100 hover:bg-cyan-200": variant === SECONDARY_VARIANT,
    "dark:border-cyan-300 dark:text-cyan-300 border-cyan-600 shadow-sm text-cyan-600 bg-transparent hover:bg-gray-50 dark:hover:bg-slate-900/75":
      variant === OUTLINED_VARIANT,
  });

  const disabledClasses = classNames({
    "bg-cyan-600/25 hover:bg-cyan-600/25": disabled,
  });

  return (
    <button
      type="button"
      className={`inline-flex justify-center items-center px-4 py-2 border-2 text-base font-medium rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 ${variantClasses} ${disabledClasses} ${className}`}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {children}
    </button>
  );
}
