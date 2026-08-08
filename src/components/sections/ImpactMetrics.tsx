import Container from "@/components/layout/Container";
import { metrics } from "@/content/metrics";

export default function ImpactMetrics() {
  return (
    <section className="w-full border-y border-outline-variant/20 bg-surface-container-lowest">
      <Container className="py-12">
        <h2 className="sr-only">Career Impact</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={
                "px-2 text-center sm:px-4 " +
                (i < metrics.length - 1
                  ? "lg:border-r lg:border-outline-variant/20"
                  : "")
              }
            >
              <p className="font-display text-headline-sm text-primary sm:text-headline-md lg:text-display-lg">
                {metric.value}
              </p>
              <p className="mt-2 font-label text-label-caps uppercase tracking-widest text-on-surface-variant">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
