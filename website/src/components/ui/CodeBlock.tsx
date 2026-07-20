import CopyButton from "./CopyButton";

type Props = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language = "bash" }: Props) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-gray-50">
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
        <span className="text-xs text-secondary">{language}</span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-6 text-sm text-primary">
        <code>{code}</code>
      </pre>
    </div>
  );
}
