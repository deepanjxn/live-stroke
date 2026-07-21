import { useEffect, useState } from "react";
import CodeBlock from "../ui/CodeBlock";
import type { PlaygroundState } from "./ControlPanel";

type Props = {
  state: PlaygroundState;
};

function formatProp(key: string, value: string | number | boolean): string {
  if (typeof value === "boolean") {
    return value ? key : `${key}={false}`;
  }
  if (typeof value === "string") return `${key}="${value}"`;
  return `${key}={${value}}`;
}

function isMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}

export default function GeneratedCodeCard({ state }: Props) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const effectiveOpacity = Math.round(state.opacity * 0.9 + 10);
  const props = [
    { key: "strokeSize", value: state.strokeSize },
    { key: "speed", value: state.speed },
    { key: "opacity", value: effectiveOpacity },
    { key: "shadow", value: state.shadow },
  ];

  const activeProps = props.filter(
    (p) => !(typeof p.value === "boolean" && p.value === false)
  );

  let lines: string[];
  if (mobile) {
    const propLines = activeProps.map((p) => `  ${formatProp(p.key, p.value)}`);
    lines = [
      "<LiveStroke",
      ...propLines,
      ">",
      '  <button>Text goes here</button>',
      "</LiveStroke>",
    ];
  } else {
    const propString = activeProps
      .map((p) => formatProp(p.key, p.value))
      .join(" ");
    lines = [
      `<LiveStroke ${propString}>`,
      '  <button>Text goes here</button>',
      "</LiveStroke>",
    ];
  }

  return <CodeBlock code={lines.join("\n")} />;
}
