import { Home, Settings, Users, LineChart } from "lucide-react";
import { LucideIcon } from "lucide-react";

type SupraConfig = {
  name: string;
  description: string;
  navLinks: {
    href: string;
    label: string;
    icon: LucideIcon;
    badge?: number;
  }[];
};

export const supra: SupraConfig = {
  name: "brijr/supra",
  description:
    "Build webapps with Supabase, Next.js, Stripe, shadcn/ui, and brijr/craft",
  navLinks: [
    { href: "/admin", label: "Admin", icon: Home },
    { href: "/users", label: "Users", icon: Users },
    { href: "/analytics", label: "Analytics", icon: LineChart },
  ],
};
