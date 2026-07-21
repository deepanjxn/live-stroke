"use client";

import { useState } from "react";
import ControlPanel, {
  DEFAULTS,
  type PlaygroundState,
} from "../playground/ControlPanel";
import PreviewPanel from "../playground/PreviewPanel";
import GeneratedCodeCard from "../playground/GeneratedCodeCard";

export default function Playground() {
  const [state, setState] = useState<PlaygroundState>(DEFAULTS);

  return (
    <div>
      <h2 className="text-base font-medium text-primary">Playground</h2>
      <div className="mt-3 flex flex-col gap-5 tablet:gap-3">
        <div className="flex flex-col tablet:flex-row gap-3 rounded-2xl bg-gray-50 p-3">
          <div className="tablet:order-2 flex-1">
            <PreviewPanel
              state={state}
              onReset={() => setState(DEFAULTS)}
            />
          </div>
          <div className="tablet:order-1">
            <ControlPanel state={state} onChange={setState} />
          </div>
        </div>
        <GeneratedCodeCard state={state} />
      </div>
    </div>
  );
}
