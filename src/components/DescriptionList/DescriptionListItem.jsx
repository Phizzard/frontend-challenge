export const DescriptionListItem = ({ className = "", children, ...props }) => {
  return (
    <div className={`py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
