export function InputLabel({ children, ...props }) {
  return (
    <label className="block text-lg font-medium text-gray-700" {...props}>
      {children}
    </label>
  );
}
