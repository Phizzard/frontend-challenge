export const DescriptionDetails = ({ className = "", children, ...props }) => {
  return (
    <dd className={`mt-1 text-lg text-gray-900 dark:text-gray-300 ${className}`} {...props}>
      {children}
    </dd>
  );
};
