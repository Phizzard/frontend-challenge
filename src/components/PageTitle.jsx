export function PageTitle({ children, className, ...props }) {
  return (
    <h1 className={`dark:text-white text-3xl font-bold text-center my-5 ${className}`} {...props}>
      {children}
    </h1>
  );
}
