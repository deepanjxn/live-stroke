type Props = {
  label: string;
  marks: { value: number; label: string }[];
  value: number;
  onChange: (value: number) => void;
  step?: number;
  hideLabels?: boolean;
};

export default function SnapSlider({
  label,
  marks,
  value,
  onChange,
  step = 1,
  hideLabels = false,
}: Props) {
  const min = marks[0]!.value;
  const max = marks[marks.length - 1]!.value;

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm text-primary">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-[6px] w-[188px] cursor-pointer appearance-none rounded-full
          transition-shadow duration-150
          [&::-webkit-slider-thumb]:h-[16px]
          [&::-webkit-slider-thumb]:w-[16px]
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border
          [&::-webkit-slider-thumb]:border-[#F45523]
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:shadow-[0_2px_4px_-2px_rgba(10,13,18,0.06),0_4px_8px_-2px_rgba(10,13,18,0.10)]
          hover:[&::-webkit-slider-thumb]:shadow-[0_0_0_2px_rgba(244,85,35,0.5),0_2px_4px_-2px_rgba(10,13,18,0.06),0_4px_8px_-2px_rgba(10,13,18,0.10)]"
        style={{
          background: `linear-gradient(to right, #F45523 0%, #F45523 ${(((value - min) / (max - min)) * 100)}%, #EEEEEE ${(((value - min) / (max - min)) * 100)}%, #EEEEEE 100%)`,
        }}
      />
      {!hideLabels && (
        <div className="mt-1 flex w-[188px] justify-between">
          {marks.map((m) => (
            <span
              key={m.value}
              className="text-xs text-secondary"
            >
              {m.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
