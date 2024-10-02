import { Home, ShoppingCart, Package, Users, LineChart } from "lucide-react";
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
    { href: "#", label: "Dashboard", icon: Home },
    { href: "#", label: "Orders", icon: ShoppingCart, badge: 6 },
    { href: "#", label: "Products", icon: Package },
    { href: "#", label: "Customers", icon: Users },
    { href: "#", label: "Analytics", icon: LineChart },
  ],
};
