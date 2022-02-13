export const DescriptionListItem = ({ className, children, ...props }) => {
  return (
    <div className={`py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${className}`} {...props}>
      {children}
    </div>
  );
};
