import CodeBlock from "../ui/CodeBlock";

const code = `import { LiveStroke } from "live-stroke";

<LiveStroke>
    <YourButton>Content</YourButton>
</LiveStroke>`;

export default function Usage() {
  return (
    <div>
      <h2 className="text-base font-medium text-primary">Usage</h2>
      <div className="mt-3">
        <CodeBlock code={code} language="tsx" />
      </div>
    </div>
  );
}
