export const DescriptionList = ({ className, children, ...props }) => {
  return (
    <dl className={` sm:divide-gray-200 dark:sm:divide-gray-700 ${className}`} {...props}>
      {children}
    </dl>
  );
};
