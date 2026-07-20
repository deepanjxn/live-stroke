import { LiveStroke } from "live-stroke";
import type { PlaygroundState } from "./ControlPanel";
import { DEFAULTS } from "./ControlPanel";

type Props = {
  state: PlaygroundState;
  onReset: () => void;
};

function hasChanges(state: PlaygroundState): boolean {
  return (
    state.strokeSize !== DEFAULTS.strokeSize ||
    state.speed !== DEFAULTS.speed ||
    state.opacity !== DEFAULTS.opacity ||
    state.shadow !== DEFAULTS.shadow
  );
}

export default function PreviewPanel({ state, onReset }: Props) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="flex flex-1 items-center justify-center py-32">
        <LiveStroke
          radius={9999}
          strokeSize={state.strokeSize}
          speed={state.speed}
          opacity={state.opacity}
          shadow={state.shadow}
        >
          <div className="flex h-14 items-center justify-center rounded-full bg-white pl-7 pr-7 pt-4 pb-4">
            <span className="text-base text-primary">Text goes here</span>
          </div>
        </LiveStroke>
      </div>
      <button
        type="button"
        onClick={onReset}
        className={`absolute bottom-0 right-0 flex items-center gap-[4px] text-sm text-secondary hover:text-primary transition-opacity ${
          hasChanges(state) ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        Reset
        <span
          className="material-symbols-outlined"
          style={{ fontSize: 16 }}
        >
          restart_alt
        </span>
      </button>
    </div>
  );
}
