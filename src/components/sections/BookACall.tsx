import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function BookACall() {
  const strategyCallUrl = process.env.STRATEGY_CALL_URL;

  return (
    <section className="border-t border-outline-variant/20 bg-surface-container-low py-16 md:py-[80px]">
      <Container className="text-center">
        <h2 className="font-display text-display-lg-mobile text-primary md:text-display-lg">
          Book A Call With Me
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-body-lg text-on-surface-variant">
          Got a problem you’d like to solve? Whether you’re navigating a personal
          challenge or working through a business decision, let’s talk about your
          next step.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="https://bit.ly/coachingxtola" external>
            Book a Coaching Call
          </Button>
          {strategyCallUrl ? (
            <Button href={strategyCallUrl} variant="secondary" external>
              Book a Strategy Call
            </Button>
          ) : (
            <div className="text-center">
              <button
                type="button"
                disabled
                aria-describedby="strategy-call-status"
                className="cursor-not-allowed rounded-full border-2 border-outline-variant/40 px-8 py-[14px] font-label text-label-caps uppercase text-on-surface-variant"
              >
                Book a Strategy Call
              </button>
              <p id="strategy-call-status" className="mt-2 font-body text-caption text-on-surface-variant">
                Coming soon
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
