export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-12 items-center justify-center">
      <div className="w-fit h-fit">{children}</div>
    </div>
  );
}
