import { menuItems } from "@/data/menu";
import MenuCard from "@/components/ui/MenuCard";

export default function FeaturedDishes() {
  const featured = menuItems.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b76e3c]">
            Popular dishes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Crafted for memorable nights.
          </h2>
        </div>
        <a href="/meun" className="text-sm font-medium text-stone-700 hover:text-[#b76e3c] dark:text-stone-200">
          Browse the full menu →
        </a>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
