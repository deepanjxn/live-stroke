import type { ReactElement } from "react";

export interface LiveStrokeProps {
  children: ReactElement;
  radius?: number;
  strokeSize?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  opacity?: number;
  shadow?: boolean;
}
