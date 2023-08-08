"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const MainNav = () => {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs") &&
              !pathname?.startsWith("/docs/configurations")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Documentation
        </Link>
        <Link
          href="/docs/configurations"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/configurations")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Configurations
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block",
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
};
