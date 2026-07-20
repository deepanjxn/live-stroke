import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  href?: string;
};

export default function IconButton({ src, alt, href }: Props) {
  const className =
    "inline-flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-2 transition-colors duration-150 hover:bg-gray-200";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <Image src={src} alt={alt} width={16} height={16} />
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      <Image src={src} alt={alt} width={16} height={16} />
    </button>
  );
}
