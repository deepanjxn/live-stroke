type Props = {
  label: string;
};

export default function Slider({ label }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-secondary">{label}</span>
      <div className="h-1.5 rounded-full bg-gray-100">
        <div className="h-full w-1/2 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
