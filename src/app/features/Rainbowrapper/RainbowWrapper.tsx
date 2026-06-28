import type React from "react";

interface RainbowWrapperProps {
  children: React.ReactNode;
  opacity?: number;
}

const RainbowWrapper: React.FC<RainbowWrapperProps> = ({
  children,
  opacity = 500,
}) => {
  // A lookup of standard Tailwind theme colors to prevent them from being purged/omitted by Tailwind v4.
  const tailwindColors: Record<string, Record<number, string>> = {
    red: { 500: "#ef4444" },
    orange: { 500: "#f97316" },
    yellow: { 500: "#eab308" },
    green: { 500: "#22c55e" },
    blue: { 500: "#3b82f6" },
    violet: { 500: "#8b5cf6" },
  };

  const colours = ["red", "orange", "yellow", "green", "blue", "violet"];

  const gradientStops = colours
    .map(
      (colour) =>
        tailwindColors[colour]?.[opacity] || `var(--color-${colour}-${opacity})`
    )
    .join(", ");

  return (
    <div style={{ background: `linear-gradient(to right, ${gradientStops})` }}>
      {children}
    </div>
  );
};

export default RainbowWrapper;