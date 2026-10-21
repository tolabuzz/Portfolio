import Container from "@/components/layout/Container";
import StrategyCallForm from "@/components/booking/StrategyCallForm";
import Button from "@/components/ui/Button";

export default function BookACall() {
  return (
    <section className="border-t border-outline-variant/20 bg-surface-container-low py-16 md:py-[80px]">
      <Container className="text-center">
        <h1 className="font-display text-display-lg-mobile text-primary md:text-display-lg">
          Book A Call With Me
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-body-lg text-on-surface-variant">
          Got a problem you’d like to solve? Whether you’re navigating a personal
          challenge or working through a business decision, let’s talk about your
          next step.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="https://my.forms.app/cewafrica/coachingbytola" external>
            Book a Coaching Call
          </Button>
          <StrategyCallForm />
        </div>
      </Container>
    </section>
  );
}
