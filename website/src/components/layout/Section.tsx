import type { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  noDivider?: boolean;
};

export default function Section({
  as: Tag = "section",
  children,
  className = "",
  noDivider = false,
}: Props) {
  return (
    <Tag
      className={
        noDivider
          ? className
          : `${className} border-b border-gray-200`
      }
    >
      {children}
    </Tag>
  );
}
