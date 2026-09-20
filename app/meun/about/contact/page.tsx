export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b76e3c]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
            Book your next gathering.
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-stone-300">
            We would love to host your dinner, celebration, or special occasion.
          </p>
        </div>

        <div className="space-y-5 text-stone-700 dark:text-stone-200">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">Address</p>
            <p className="mt-2 text-lg">18 Orchard Lane, New York, NY</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">Phone</p>
            <p className="mt-2 text-lg">(212) 555-0134</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">Email</p>
            <p className="mt-2 text-lg">hello@verdanttable.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
