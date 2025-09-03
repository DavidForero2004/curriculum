"use client";
import Link from "next/link";
import { routes } from "@/routes/routes"; 

export default function NavLinks() {
  return (
    <nav className="flex gap-4">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
