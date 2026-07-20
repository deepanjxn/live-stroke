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

export default function GeneratedCodeCard({ state }: Props) {
  const effectiveOpacity = Math.round(state.opacity * 0.9 + 10);
  const props = [
    { key: "strokeSize", value: state.strokeSize },
    { key: "speed", value: state.speed },
    { key: "opacity", value: effectiveOpacity },
    { key: "shadow", value: state.shadow },
  ];

  const propString = props
    .filter((p) => !(typeof p.value === "boolean" && p.value === false))
    .map((p) => formatProp(p.key, p.value))
    .join(" ");

  const lines = [`<LiveStroke ${propString}>`, '  <button>Text goes here</button>', "</LiveStroke>"];

  return <CodeBlock code={lines.join("\n")} />;
}
