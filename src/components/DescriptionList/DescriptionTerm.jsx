export const DescriptionTerm = ({ className = "", children, startIcon, ...props }) => {
  return (
    <dt className={`flex space-y-4 align-middle text-lg font-bold text-gray-500 dark:text-gray-400 ${className}`} {...props}>
      {startIcon && <span className="flex align-middle mr-2">{startIcon}</span>}
      {children}
    </dt>
  );
};
