import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white/70 dark:border-stone-800 dark:bg-[#111111]/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em] text-stone-900 dark:text-stone-100">
            VERDANT TABLE
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-stone-600 dark:text-stone-300">
            Seasonal dining inspired by farm-fresh ingredients, slow evenings, and warm hospitality.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100">
            Visit
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-600 dark:text-stone-300">
            <li>18 Orchard Lane</li>
            <li>New York, NY</li>
            <li>(212) 555-0134</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100">
            Explore
          </h3>
          <div className="mt-4 flex flex-col space-y-3 text-sm text-stone-600 dark:text-stone-300">
            <Link href="/">Home</Link>
            <Link href="/meun">Menu</Link>
            <Link href="/meun/about">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
