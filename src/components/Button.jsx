import classNames from "classnames";

const PRIMARY_VARIANT = "primary";
const SECONDARY_VARIANT = "secondary";
const OUTLINED_VARIANT = "outlined";
const TEXT_VARIANT = "text";

const BASE_SIZE = "base";
const SMALL_SIZE = "sm";
const X_SMALL_SIZE = "xs";

export function Button({ variant = PRIMARY_VARIANT, size = BASE_SIZE, disabled, onClick, className = "", children, ...props }) {
  const variantClasses = classNames({
    "dark:bg-cyan-300 dark:text-slate-900 border-2 shadow-sm text-white border-transparent bg-cyan-600 hover:bg-cyan-700 dark:hover:bg-cyan-400":
      variant === PRIMARY_VARIANT,
    "text-cyan-700 bg-cyan-100 border-2 hover:bg-cyan-200": variant === SECONDARY_VARIANT,
    "dark:border-cyan-300 dark:text-cyan-300 border-cyan-600 border-2 shadow-sm text-cyan-600 bg-transparent hover:bg-gray-50 dark:hover:bg-slate-900/75":
      variant === OUTLINED_VARIANT,
    "dark:text-cyan-300 text-cyan-600 bg-transparent hover:bg-cyan-50 dark:hover:bg-slate-900/75": variant === TEXT_VARIANT,
  });

  const disabledClasses = classNames({
    "bg-cyan-600/25 hover:bg-cyan-600/25 dark:bg-cyan-400/25 dark:hover:bg-cyan-400/25": disabled,
  });

  const sizeClasses = classNames({
    "text-sm px-2.5 py-1.5": size === X_SMALL_SIZE,
    "text-sm px-4 py-2": size === SMALL_SIZE,
    "text-lg px-4 py-2": size === BASE_SIZE,
  });

  return (
    <button
      type="button"
      className={`inline-flex justify-center items-center font-medium rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-slate-900 focus:ring-cyan-500 dark:focus:ring-cyan-400 ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {children}
    </button>
  );
}
