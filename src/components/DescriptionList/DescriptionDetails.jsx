export const DescriptionDetails = ({ className, children, ...props }) => {
  return (
    <dd className={`mt-1 text-sm text-gray-900 dark:text-gray-300 sm:mt-0 sm:col-span-2 ${className}`} {...props}>
      {children}
    </dd>
  );
};
