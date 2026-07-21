import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import Hero from "../components/sections/Hero";
import UseCases from "../components/sections/UseCases";
import Installation from "../components/sections/Installation";
import Usage from "../components/sections/Usage";
import Playground from "../components/sections/Playground";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Section>
          <Container>
            <div className="p-5 tablet:p-6 space-y-5 tablet:space-y-8">
              <Installation />
              <Usage />
              <Playground />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
