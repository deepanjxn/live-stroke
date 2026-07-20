import type { LiveStrokeProps } from "./types";

const GRADIENT =
  "conic-gradient(from var(--ls-angle, 18deg), #F45523 0%, #00DA7C 20%, #3B5FFF 40%, #9A80C3 60%, #D7F986 80%, #F45523 100%)";

function gradientWithAlpha(alpha: number): string {
  const t = (c: string, a: number) => {
    const r = parseInt(c.slice(1, 3), 16);
    const g = parseInt(c.slice(3, 5), 16);
    const b = parseInt(c.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  };
  return `conic-gradient(from var(--ls-angle, 18deg), ${t("#F45523", alpha)} 0%, ${t("#00DA7C", alpha)} 20%, ${t("#3B5FFF", alpha)} 40%, ${t("#9A80C3", alpha)} 60%, ${t("#D7F986", alpha)} 80%, ${t("#F45523", alpha)} 100%)`;
}

const STROKE_MAP = { sm: 0.5, md: 1, lg: 1.5 } as const;
const DURATION_MAP = { slow: 6, normal: 4, fast: 2 } as const;

export function LiveStroke({
  children,
  radius = 8,
  strokeSize = "md",
  speed = "normal",
  opacity = 100,
  shadow = true,
}: LiveStrokeProps) {
  const padding = STROKE_MAP[strokeSize];
  const duration = DURATION_MAP[speed];
  const gradientOpacity = opacity / 100 * 0.9 + 0.1;
  const anim = `ls-spin ${duration}s linear infinite`;
  const totalRadius = radius + padding;

  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      {shadow && (
        <div
          style={{
            position: "absolute",
            top: -padding,
            left: -padding,
            right: -padding,
            bottom: -padding,
            borderRadius: totalRadius,
            backgroundImage: GRADIENT,
            backgroundOrigin: "border-box",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            filter: "blur(6px)",
            opacity: gradientOpacity * 0.16,
            zIndex: 0,
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          border: `${padding}px solid transparent`,
          borderRadius: totalRadius,
          overflow: "hidden",
          backgroundImage: gradientWithAlpha(gradientOpacity),
          backgroundOrigin: "border-box",
          backgroundClip: "border-box",
          backgroundRepeat: "no-repeat",
          animation: anim,
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: radius,
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
