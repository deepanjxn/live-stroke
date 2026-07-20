import type { LiveStrokeProps } from "./types";

const GRADIENT =
  "conic-gradient(from 18deg, #F45523 18%, #00DA7C 26%, #3B5FFF 51%, #9A80C3 75%, #D7F986 100%)";

export function LiveStroke({ children, radius = 8 }: LiveStrokeProps) {
  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <div
        style={{
          position: "absolute",
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          borderRadius: radius + 1,
          background: GRADIENT,
          filter: "blur(12px)",
          opacity: 0.16,
          transform: "translateY(4px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          background: GRADIENT,
          padding: 1,
          borderRadius: radius + 1,
          zIndex: 1,
        }}
      >
        <div style={{ borderRadius: radius, overflow: "hidden" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
