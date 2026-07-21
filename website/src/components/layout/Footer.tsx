import Section from "./Section";
import Container from "./Container";
import IconButton from "../ui/IconButton";

const socialLinks = [
  { src: "/images/globe-icon.webp", alt: "Website", href: "https://d-s.me/" },
  { src: "/images/linkedin-icon.webp", alt: "LinkedIn", href: "https://www.linkedin.com/in/deepanjansen/" },
  { src: "/images/x-icon.webp", alt: "X", href: "https://x.com/deepanjxn" },
];

export default function Footer() {
  return (
    <Section as="footer" noDivider>
      <Container>
        <div className="flex items-center justify-between px-5 tablet:px-6 py-3 tablet:py-6">
          <div className="flex items-center gap-2">
            <img
              src="/images/deepanjan-sen-image.webp"
              alt="Deepanjan Sen"
              width={32}
              height={32}
            />
            <p className="text-sm">
              <span className="text-secondary">Created by </span>
              <a href="https://d-s.me/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary">Deepanjan Sen</a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <IconButton
                key={link.alt}
                src={link.src}
                alt={link.alt}
                href={link.href}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
