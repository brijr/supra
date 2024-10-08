"use client";

// ! Links are managed in supra.config.ts

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { supra } from "../supra.config";
import { cn } from "@/lib/utils";

export function AppNav() {
  const pathname = usePathname();

  return (
    <nav className="grid gap-1 items-start text-sm font-medium lg:px-4">
      {supra.navLinks.map((link) => {
        const IconComponent = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              isActive
                ? "text-primary pointer-events-none"
                : "text-muted-foreground",
              "hover:text-primary"
            )}
          >
            <IconComponent className="h-4 w-4" />
            {link.label}
            {link.badge && (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {link.badge}
              </Badge>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
