export const DescriptionTerm = ({ className, children, ...props }) => {
  return (
    <dt className={`text-sm font-medium text-gray-500 dark:text-gray-400 ${className}`} {...props}>
      {children}
    </dt>
  );
};
