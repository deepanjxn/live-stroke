type Props = {
  label: string;
};

export default function Toggle({ label }: Props) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-secondary">{label}</span>
      <div className="h-5 w-9 rounded-full bg-gray-200 p-0.5">
        <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
      </div>
    </div>
  );
}
