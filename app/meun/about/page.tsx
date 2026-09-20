export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b76e3c]">
        About us
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl">
        Warm hospitality, rooted in the season.
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-8 text-stone-600 dark:text-stone-300">
        <p>
          Verdant Table began with a simple idea: bring people together around honest food, slow conversation,
          and a deeply welcoming room.
        </p>
        <p>
          We partner with local growers and makers to shape a menu that changes with the rhythm of the season,
          always guided by flavor, balance, and craft.
        </p>
        <p>
          Whether you are joining us for a quiet dinner or a celebratory night out, we want every detail to feel
          considered and effortless.
        </p>
      </div>
    </section>
  );
}
