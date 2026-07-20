import SnapSlider from "../ui/SnapSlider";

export type PlaygroundState = {
  strokeSize: "sm" | "md" | "lg";
  speed: "slow" | "normal" | "fast";
  opacity: number;
  shadow: boolean;
};

export const DEFAULTS: PlaygroundState = {
  strokeSize: "md",
  speed: "normal",
  opacity: 100,
  shadow: true,
};

const STROKE_OPTIONS = ["sm", "md", "lg"] as const;
const SPEED_OPTIONS = ["slow", "normal", "fast"] as const;

type Props = {
  state: PlaygroundState;
  onChange: (state: PlaygroundState) => void;
};

export default function ControlPanel({ state, onChange }: Props) {
  const update = (partial: Partial<PlaygroundState>) =>
    onChange({ ...state, ...partial });

  return (
    <div className="flex w-[220px] flex-col gap-7 rounded-xl border border-gray-100 bg-white p-4">
      <SnapSlider
        label="Stroke Size"
        marks={[
          { value: 0, label: "Sm" },
          { value: 1, label: "Md" },
          { value: 2, label: "Lg" },
        ]}
        value={STROKE_OPTIONS.indexOf(state.strokeSize)}
        onChange={(v) => update({ strokeSize: STROKE_OPTIONS[v] })}
      />
      <SnapSlider
        label="Speed"
        marks={[
          { value: 0, label: "Slow" },
          { value: 1, label: "Normal" },
          { value: 2, label: "Fast" },
        ]}
        value={SPEED_OPTIONS.indexOf(state.speed)}
        onChange={(v) => update({ speed: SPEED_OPTIONS[v] })}
      />
      <SnapSlider
        label="Opacity"
        marks={[
          { value: 0, label: "0" },
          { value: 100, label: "100" },
        ]}
        value={state.opacity}
        onChange={(v) => update({ opacity: v })}
        hideLabels
      />
      <div className="flex flex-col gap-1.5">
        <span className="text-sm text-primary">Shadow</span>
        <div className="flex gap-2">
          {(["on", "off"] as const).map((opt) => {
            const active = (opt === "on") === state.shadow;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => update({ shadow: opt === "on" })}
                className={`flex-1 rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "border border-orange-100 bg-orange-50 text-primary"
                    : "bg-gray-50 text-secondary"
                }`}
              >
                {opt === "on" ? "On" : "Off"}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
