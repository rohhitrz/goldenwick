"use client";

import Image from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-[linear-gradient(120deg,#FAF3E0,#E2C17A)] ${className ?? ""}`}
      >
        <span className="text-4xl">🕯️</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setHasError(true)}
      className={className}
      priority={priority}
    />
  );
}
