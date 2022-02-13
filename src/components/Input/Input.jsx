export function Input({ name, ...props }) {
  return (
    <input
      type={name}
      name={name}
      id={name}
      className="p-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 border border-solid rounded-2xl"
      {...props}
    />
  );
}
