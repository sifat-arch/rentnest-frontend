"use client";

import RentNestLoader from "./RentNestLoader";

interface LottieLoadingProps {
  className?: string;
  size?: number;
  text?: string;
}

export default function LottieLoading({ text }: LottieLoadingProps) {
  return <RentNestLoader subtext={text || "Curating your living experience..."} />;
}
