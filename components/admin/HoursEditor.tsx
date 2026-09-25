'use client';

interface DayHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

interface HoursRowProps {
  day: DayHours;
  onChange: (patch: Partial<DayHours>) => void;
}

const inputCls =
  'rounded-lg border border-zinc-300 bg-white px-2 py-1 text-sm text-zinc-800 ' +
  'disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-brand-primary ' +
  'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100';

export default function HoursRow({ day, onChange }: HoursRowProps) {
  const disabled = !!day.closed;

  return (
    <div
      className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-3
                 border-b border-zinc-200 py-3 last:border-0
                 dark:border-zinc-800"
    >
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
        {day.day}
      </span>

      <input
        type="time"
        aria-label={`${day.day} opening time`}
        value={day.open}
        disabled={disabled}
        onChange={(e) => onChange({ open: e.target.value })}
        className={inputCls}
      />

      <input
        type="time"
        aria-label={`${day.day} closing time`}
        value={day.close}
        disabled={disabled}
        onChange={(e) => onChange({ close: e.target.value })}
        className={inputCls}
      />

      <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <input
          type="checkbox"
          checked={disabled}
          onChange={(e) => onChange({ closed: e.target.checked })}
          className="h-4 w-4 accent-brand-primary"
        />
        Closed
      </label>
    </div>
  );
}