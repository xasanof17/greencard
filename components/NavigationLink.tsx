"use client";
import clsx from "clsx";
import { usePathname } from "next-intl/client";
import { ComponentProps } from "react";
import Link from "next-intl/link";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function NavigationLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive}
      className={clsx("link", isActive ? "text-blue-600" : "")}
      href={href}
      {...rest}
    />
  );
}
