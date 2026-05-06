export function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-28 bg-white pb-20 pt-24 sm:pb-28 sm:pt-28" aria-labelledby="quote-heading">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal-dark">
            Contact
          </p>
          <h2 id="quote-heading" className="mt-4 font-serif text-4xl font-semibold tracking-tight text-brand-charcoal sm:text-[2.75rem]">
            Get a Custom Quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-charcoal/72">
            Tell us about your space. We will follow up with thoughtful next steps.
          </p>
        </div>

        <form
          className="mt-14 space-y-6"
          action="https://formsubmit.co/amberfazer@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New quote request: Amber's Cleaning website" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="block text-sm font-semibold text-brand-charcoal">
                Full name
              </label>
              <input
                id="fullName"
                name="Full Name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-xl border border-brand-charcoal/15 bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-teal/40 transition focus:border-brand-teal focus:ring-4"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="businessName" className="block text-sm font-semibold text-brand-charcoal">
                Business name
              </label>
              <input
                id="businessName"
                name="Business Name"
                type="text"
                autoComplete="organization"
                required
                className="mt-2 w-full rounded-xl border border-brand-charcoal/15 bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-teal/40 transition focus:border-brand-teal focus:ring-4"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal">
                Phone number
              </label>
              <input
                id="phone"
                name="Phone Number"
                type="tel"
                autoComplete="tel"
                required
                className="mt-2 w-full rounded-xl border border-brand-charcoal/15 bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-teal/40 transition focus:border-brand-teal focus:ring-4"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal">
                Email address
              </label>
              <input
                id="email"
                name="Email Address"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-xl border border-brand-charcoal/15 bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-teal/40 transition focus:border-brand-teal focus:ring-4"
              />
            </div>
            <div>
              <label htmlFor="spaceType" className="block text-sm font-semibold text-brand-charcoal">
                Type of space
              </label>
              <select
                id="spaceType"
                name="Type of Space"
                required
                className="mt-2 w-full rounded-xl border border-brand-charcoal/15 bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-teal/40 transition focus:border-brand-teal focus:ring-4"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="Office">Office</option>
                <option value="Retail Space">Retail Space</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Medical Facility">Medical Facility</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="sqft" className="block text-sm font-semibold text-brand-charcoal">
                Approximate square footage
              </label>
              <select
                id="sqft"
                name="Approximate Square Footage"
                required
                className="mt-2 w-full rounded-xl border border-brand-charcoal/15 bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-teal/40 transition focus:border-brand-teal focus:ring-4"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="Under 1000">Under 1000</option>
                <option value="1000 to 3000">1000 to 3000</option>
                <option value="3000 to 5000">3000 to 5000</option>
                <option value="5000 to 10000">5000 to 10000</option>
                <option value="Over 10000">Over 10000</option>
              </select>
            </div>
            <div>
              <label htmlFor="frequency" className="block text-sm font-semibold text-brand-charcoal">
                Cleaning frequency
              </label>
              <select
                id="frequency"
                name="Cleaning Frequency"
                required
                className="mt-2 w-full rounded-xl border border-brand-charcoal/15 bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-teal/40 transition focus:border-brand-teal focus:ring-4"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="One Time">One Time</option>
                <option value="Weekly">Weekly</option>
                <option value="Biweekly">Biweekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Custom Schedule">Custom Schedule</option>
              </select>
            </div>
            <div>
              <label htmlFor="referral" className="block text-sm font-semibold text-brand-charcoal">
                How did you hear about us?
              </label>
              <select
                id="referral"
                name="How did you hear about us"
                required
                className="mt-2 w-full rounded-xl border border-brand-charcoal/15 bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-teal/40 transition focus:border-brand-teal focus:ring-4"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="Google Search">Google Search</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
                <option value="Career Fair">Career Fair</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="notes" className="block text-sm font-semibold text-brand-charcoal">
                Additional notes
              </label>
              <textarea
                id="notes"
                name="Additional Notes"
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-brand-charcoal/15 bg-white px-4 py-3 text-brand-charcoal shadow-sm outline-none ring-brand-teal/40 transition focus:border-brand-teal focus:ring-4"
                placeholder="Placeholder for additional notes"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex min-h-[54px] w-full items-center justify-center rounded-full bg-brand-teal px-8 text-base font-semibold text-white shadow-md shadow-brand-teal/25 transition hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold sm:w-auto sm:min-w-[280px]"
          >
            Request My Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}
