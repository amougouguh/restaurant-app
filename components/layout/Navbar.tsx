import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/meun" },
  { label: "About", href: "/meun/about" },
  { label: "Contact", href: "/meun/about/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f7f4ee]/85 backdrop-blur-md dark:border-stone-800 dark:bg-[#111111]/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b76e3c] text-lg font-semibold text-white shadow-sm">
            V
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.18em] text-stone-900 dark:text-stone-100">
              VERDANT
            </p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
              Table
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition-colors hover:text-[#b76e3c] dark:text-stone-200 dark:hover:text-[#d89b77]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/meun"
            className="hidden rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-300 sm:inline-flex"
          >
            Reserve
          </Link>
        </div>
      </nav>
    </header>
  );
}
