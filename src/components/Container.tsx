export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full min-w-0 max-w-6xl px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
