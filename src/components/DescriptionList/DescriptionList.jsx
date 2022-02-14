export const DescriptionList = ({ className = "", children, ...props }) => {
  return (
    <dl className={`${className}`} {...props}>
      {children}
    </dl>
  );
};
