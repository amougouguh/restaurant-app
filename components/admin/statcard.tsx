interface StatCardProps {
  label: string;
  value: number | string;
  hint?: string;
  icon?: string;
  tone?: 'default' | 'warning';
}

const TONES = {
  default: 'text-zinc-800 dark:text-zinc-100',
  warning: 'text-amber-600 dark:text-amber-400',
} as const;

export default function StatCard({
  label,
  value,
  hint,
  icon,
  tone = 'default',
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {label}
        </p>
        {icon && (
          <span aria-hidden="true" className="text-lg leading-none">
            {icon}
          </span>
        )}
      </div>

      <p className={`mt-3 text-3xl font-semibold tabular-nums ${TONES[tone]}`}>
        {value}
      </p>

      {hint && (
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{hint}</p>
      )}
    </div>
  );
}