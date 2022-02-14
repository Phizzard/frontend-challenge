export const DescriptionAction = ({ className = "", children, ...props }) => {
  return (
    <div className={`flex justify-start ${className}`} {...props}>
      {children}
    </div>
  );
};
