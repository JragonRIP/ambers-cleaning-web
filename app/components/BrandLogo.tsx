import Image from "next/image";

type BrandLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Official brand mark (PNG in /public/logo.png). Matches the circular teal tree emblem.
 */
export function BrandLogo({ size = 44, className = "", priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Amber's Cleaning Service, LLC logo"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full object-cover shadow-sm ring-2 ring-black/[0.06] ${className}`}
    />
  );
}
