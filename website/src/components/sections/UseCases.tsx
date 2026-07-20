import { LiveStroke } from "../LiveStroke";
import Container from "../layout/Container";
import Section from "../layout/Section";

export default function UseCases() {
  return (
    <Section>
      <Container>
        <div className="p-6">
          <h2 className="text-base font-medium text-primary">Use Cases</h2>
          <div className="mt-3 grid grid-cols-[1fr_292px] gap-3">
            <div className="col-span-2 flex h-[292px] items-center justify-center rounded-2xl bg-gray-50">
              <LiveStroke radius={9999} strokeSize="sm">
                <div className="flex h-14 w-[400px] items-center gap-1 rounded-full bg-white pl-7 pr-7 pt-4 pb-4">
                  <span className="material-symbols-outlined">
                    search
                  </span>
                  <span className="text-base text-primary/50">
                    What are you looking for?
                  </span>
                </div>
              </LiveStroke>
            </div>
            <div className="flex h-[292px] items-center justify-center rounded-2xl bg-gray-50">
              <LiveStroke radius={9999} strokeSize="sm">
                <div className="flex h-14 items-center justify-center gap-1 rounded-full bg-white pl-7 pr-7 pt-4 pb-4">
                  <span className="material-symbols-outlined">
                    terminal
                  </span>
                  <span className="text-base text-primary">
                    Access Interactive Demo
                  </span>
                </div>
              </LiveStroke>
            </div>
            <div className="flex h-[292px] items-center justify-center rounded-2xl bg-gray-50">
              <LiveStroke radius={9999} strokeSize="sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-4">
                  <span className="material-symbols-outlined">
                    info
                  </span>
                </div>
              </LiveStroke>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
