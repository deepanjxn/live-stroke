import Image from "next/image";
import Container from "./Container";
import IconButton from "../ui/IconButton";

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between px-6 pt-4 pb-4">
          <Image
            src="/images/logo.webp"
            alt="LiveStroke"
            width={112}
            height={24}
            priority
          />
          <IconButton src="/images/github-icon.webp" alt="GitHub" href="https://github.com/deepanjxn/live-stroke" />
        </div>
      </Container>
    </header>
  );
}
