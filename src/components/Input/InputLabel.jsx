export function InputLabel({ className = "", children, ...props }) {
  return (
    <label className={`dark:text-gray-300 block text-lg font-medium text-gray-700 ${className}`} {...props}>
      {children}
    </label>
  );
}
