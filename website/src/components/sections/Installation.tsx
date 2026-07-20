import CodeBlock from "../ui/CodeBlock";

const code = "npm install live-stroke";

export default function Installation() {
  return (
    <div>
      <h2 className="text-base font-medium text-primary">Installation</h2>
      <div className="mt-3">
        <CodeBlock code={code} />
      </div>
    </div>
  );
}
