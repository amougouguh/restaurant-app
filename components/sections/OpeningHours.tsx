import { openingHours } from "@/data/hours";

export default function OpeningHours() {
  return (
    <section className="bg-stone-900 py-20 text-stone-50 dark:bg-stone-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d89b77]">
            Hours & location
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Join us for a slow, delicious evening.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-stone-300">
            We welcome guests for intimate dinners, celebrations, and relaxed weekend lunches in the heart of the city.
          </p>
        </div>

        <div className="rounded-[28px] border border-stone-700 bg-stone-800/80 p-6 shadow-xl">
          <div className="space-y-4">
            {openingHours.map(({ day, hours }) => (
              <div key={day} className="flex items-center justify-between gap-4 border-b border-stone-700 pb-3 last:border-none last:pb-0">
                <span className="text-base font-medium text-stone-100">{day}</span>
                <span className="text-sm text-stone-300">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
