import Slider from "../ui/Slider";
import Toggle from "../ui/Toggle";
import CopyButton from "../ui/CopyButton";

const generatedCode = `<LiveStroke
  strokeSize={2}
  speed={4}
  opacity={0.8}
  shadow={false}
>
    <button>Click me</button>
</LiveStroke>`;

export default function Playground() {
  return (
    <div>
      <h2 className="text-base font-medium text-primary">Playground</h2>
      <div className="mt-3 grid grid-cols-[240px_1fr] gap-16">
        <div className="flex flex-col gap-6 rounded-lg border border-gray-200 p-6">
          <Slider label="Stroke Size" />
          <Slider label="Speed" />
          <Slider label="Opacity" />
          <Toggle label="Shadow" />
          <button
            type="button"
            className="mt-2 self-start text-xs text-secondary hover:text-primary"
          >
            Reset
          </button>
        </div>
        <div className="flex items-center justify-center rounded-xl border border-gray-200 py-32">
          <button
            type="button"
            className="inline-flex h-12 cursor-pointer items-center rounded-lg bg-primary px-6 text-sm text-page-bg"
          >
            Click me
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="relative rounded-xl border border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
            <span className="text-xs text-secondary">JSX</span>
            <CopyButton text={generatedCode} />
          </div>
          <pre className="overflow-x-auto p-6 text-sm text-primary">
            <code>{generatedCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
