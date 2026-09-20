import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(183,110,60,0.12),_transparent_35%),linear-gradient(135deg,#f7f4ee_0%,#f5efe7_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(183,110,60,0.18),_transparent_35%),linear-gradient(135deg,#111111_0%,#1f1a17_100%)]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-[#b76e3c]/20 bg-[#b76e3c]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a4d2a] dark:border-[#d89b77]/30 dark:bg-[#d89b77]/10 dark:text-[#f5c7a4]">
            Seasonal plates, slow evenings
          </span>

          <div className="space-y-5">
            <h1 className="max-w-xl text-4xl font-semibold leading-none tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl lg:text-7xl">
              Gather around good food.
            </h1>
            <p className="max-w-lg text-lg leading-8 text-stone-600 dark:text-stone-300">
              Thoughtful ingredients, handcrafted plates, and a warm neighborhood atmosphere made for lingering conversations.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/meun">Explore menu</Button>
            <Button href="/meun/about/contact" variant="secondary">
              Book a table
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 pt-4 text-sm text-stone-600 dark:text-stone-300">
            <div>
              <p className="text-2xl font-semibold text-stone-900 dark:text-stone-50">12+</p>
              <p>Signature dishes</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-stone-900 dark:text-stone-50">4.9/5</p>
              <p>Guest rating</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-stone-900 dark:text-stone-50">8 yrs</p>
              <p>Local favorites</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[#d89b77]/30 blur-3xl dark:bg-[#d89b77]/20" />
          <div className="absolute -right-6 bottom-6 h-32 w-32 rounded-full bg-[#7ea77d]/30 blur-3xl dark:bg-[#7ea77d]/20" />

          <div className="relative overflow-hidden rounded-[32px] border border-stone-200 bg-white p-4 shadow-[0_30px_80px_rgba(28,25,23,0.15)] dark:border-stone-800 dark:bg-stone-900">
            <div className="relative h-[560px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#efe5d3_0%,#d9e6d7_100%)] dark:bg-[linear-gradient(135deg,#2f221c_0%,#1f2d22_100%)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.7),_transparent_35%)]" />
              <div className="absolute left-8 top-8 flex items-center gap-3 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm font-medium text-stone-800 shadow-sm backdrop-blur-sm dark:border-stone-700 dark:bg-stone-950/50 dark:text-stone-200">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Open tonight
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-56 bg-[linear-gradient(180deg,transparent_0%,rgba(48,38,31,0.16)_100%)]" />

              <div className="absolute bottom-14 left-8 right-8 rounded-[28px] border border-white/40 bg-white/80 p-5 shadow-lg backdrop-blur-sm dark:border-stone-700 dark:bg-stone-950/70">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                      Chef’s pick
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                      Wild Mushroom Risotto
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#b76e3c] px-3 py-1 text-sm font-medium text-white">
                    $19.50
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-stone-600 dark:text-stone-300">
                  Arborio rice, porcini, parmesan, and truffle oil finished with a whisper of lemon.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-stone-500 dark:text-stone-400">Served with seasonal greens</p>
                  <Link href="/meun" className="text-sm font-semibold text-[#b76e3c]">
                    View full menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
