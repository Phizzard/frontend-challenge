export function NotificationArea({ className, children, ...props }) {
  return (
    <div aria-live={`assertive" className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"`} {...props}>
      <div className="absolute bottom-8 sm:right-8 w-full flex flex-col items-center space-y-4 sm:items-end">{children}</div>
    </div>
  );
}
