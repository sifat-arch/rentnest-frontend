"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /**
   * Width & height of the logo in pixels
   * @default 70
   */
  size?: number;
  /**
   * Whether to show the brand text next to the logo
   * @default true
   */
  showText?: boolean;
  /**
   * Custom brand text
   * @default "RentNest"
   */
  text?: string;
  /**
   * Container className
   */
  className?: string;
  /**
   * Image wrapper or image element className
   */
  imageClassName?: string;
  /**
   * Text styling className
   */
  textClassName?: string;
  /**
   * Destination link. Set to false or null to render without Link wrapper.
   * @default "/"
   */
  href?: string | false | null;
  /**
   * Click handler
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Custom image source path
   * @default "/logo/Rentnest.png"
   */
  src?: string;
}

export function Logo({
  size = 10,
  showText = true,
  text = "",
  className,
  imageClassName,
  textClassName,
  href = "/",
  onClick,
  src = "/logo/RentnestLogo.svg",
}: LogoProps) {
  const content = (
    <>
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-lg flex items-center justify-center  bg-transparent",
          imageClassName,
        )}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <Image
          src={src}
          alt={text}
          width={size}
          height={size}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {showText && (
        <span
          className={cn(
            "text-2xl font-bold tracking-tight text-primary transition-colors",
            textClassName,
          )}
        >
          {text}
        </span>
      )}
    </>
  );

  const containerClasses = cn(
    "inline-flex items-center transition-opacity hover:opacity-90 select-none",
    className,
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={containerClasses}>
      {content}
    </div>
  );
}

export default Logo;
