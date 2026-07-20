import Container from "../layout/Container";
import Section from "../layout/Section";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="bg-[#FAEDE9] p-6">
          <h1 className="text-base font-medium text-primary">
            Animated gradient borders for React. Wrap any component with a
            single line.
          </h1>
          <p className="mt-1 text-[14px] leading-[20px] text-secondary">
            LiveStroke decorates your existing components with animated gradient
            borders—no redesign, no custom CSS.
          </p>
        </div>
      </Container>
    </Section>
  );
}
