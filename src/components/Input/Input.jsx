export function Input({ name, ...props }) {
  return (
    <input
      type={name}
      name={name}
      id={name}
      className="p-2 text-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full border-gray-300 border border-solid rounded-2xl"
      {...props}
    />
  );
}
