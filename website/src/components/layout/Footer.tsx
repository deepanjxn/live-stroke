import Section from "./Section";
import Container from "./Container";
import IconButton from "../ui/IconButton";

const socialLinks = [
  { src: "/images/globe-icon.webp", alt: "Website", href: "#" },
  { src: "/images/linkedin-icon.webp", alt: "LinkedIn", href: "#" },
  { src: "/images/x-icon.webp", alt: "X", href: "#" },
];

export default function Footer() {
  return (
    <Section as="footer" noDivider>
      <Container>
        <div className="flex items-center justify-between px-6 py-6">
          <p className="text-sm">
            <span className="text-secondary">Created by </span>
            <span className="font-medium text-primary">Deepanjan Sen</span>
          </p>
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
