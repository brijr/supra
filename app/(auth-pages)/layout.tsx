import { supra } from "@/supra.config";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 p-6 sm:p-12 sm:items-center">
      <div className="flex flex-col gap-2 w-full sm:w-96">
        <p className="text-xl">{supra.name}</p>
        <p className="text-sm text-muted-foreground">{supra.description}</p>
      </div>
      <div className="w-full sm:w-96">{children}</div>
    </div>
  );
}
