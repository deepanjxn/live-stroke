"use client";

import { useState, useCallback } from "react";

type Props = {
  code: string;
  copyCentered?: boolean;
};

export default function CodeBlock({ code, copyCentered }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [code]);

  return (
    <div className="relative rounded-xl bg-gray-50 p-3.5">
      <button
        type="button"
        onClick={handleCopy}
        className={`absolute right-3.5 flex items-center justify-center border-none bg-transparent p-0 text-secondary hover:text-primary ${
          copyCentered ? "inset-y-3.5 my-auto" : "top-3.5"
        }`}
        style={{ height: 16, width: 16 }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
          {copied ? "check" : "content_copy"}
        </span>
      </button>
      <pre className="overflow-x-auto text-sm text-primary">
        <code>{code}</code>
      </pre>
    </div>
  );
}
