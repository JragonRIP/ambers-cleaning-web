import { TestimonialsCarousel } from "./TestimonialsCarousel";

const testimonials = [
  {
    quote: `Amber's cleaning service is AMAZING! We have used them twice so far and they far exceeded our expectations. Crew is so friendly and I love that I am able to leave my pets home with them while they clean. Definitely recommend this business!`,
    name: "Fonda Novak",
    business: "Google review",
  },
  {
    quote: `I love Amber's cleaning service! Amber has been great to work with and very accommodating of my schedule. Her staff are always friendly and hard working. Fast professional work for a whole house top to bottom cleaning!`,
    name: "Happy client",
    business: "Residential client",
  },
  {
    quote: `Amber is professional and very efficient, she has a great system to get the job done in a rapid time frame. I highly recommend Amber Cleaning Service!`,
    name: "Happy client",
    business: "Residential client",
  },
];

export function TestimonialsSection() {
  return (
    <section className="texture-grain bg-brand-charcoal pb-20 pt-24 sm:pb-28 sm:pt-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal">
            Testimonials
          </p>
          <h2 id="testimonials-heading" className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-[2.75rem]">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/72 lg:hidden">Swipe sideways to read more reviews.</p>
          <p className="mt-4 hidden text-lg leading-relaxed text-white/72 lg:block">
            Real words from people who trust Amber with their spaces.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <TestimonialsCarousel items={testimonials} />
        </div>
      </div>
    </section>
  );
}
