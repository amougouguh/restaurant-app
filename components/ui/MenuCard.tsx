import type { MenuItem } from "@/data/menu";

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group rounded-[28px] border border-stone-200 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900">
      <div className="mb-4 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 via-stone-100 to-emerald-100 dark:from-stone-800 dark:via-stone-900 dark:to-stone-800">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-stone-300 bg-white/80 text-4xl shadow-inner dark:border-stone-700 dark:bg-stone-950/60">
          {item.name.charAt(0)}
        </div>
      </div>

      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b76e3c]">
            {item.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-stone-900 dark:text-stone-100">
            {item.name}
          </h3>
        </div>
        <span className="text-lg font-semibold text-stone-900 dark:text-stone-100">
          {item.price.toLocaleString('en-US')} FCFA
        </span>
      </div>

      <p className="text-sm leading-6 text-stone-600 dark:text-stone-300">
        {item.description}
      </p>
    </article>
  );
}
