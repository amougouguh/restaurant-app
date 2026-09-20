import { menuItems } from "@/data/menu";
import MenuCard from "@/components/ui/MenuCard";

export default function MenuPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b76e3c]">
          Our menu
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl">
          Seasonal favorites, plated beautifully.
        </h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}