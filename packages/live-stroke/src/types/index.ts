export interface LiveStrokeProps {
  strokeSize?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  opacity?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  shadow?: boolean;
  children: React.ReactElement;
}
