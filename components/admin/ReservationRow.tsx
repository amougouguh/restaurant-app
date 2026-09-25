'use client';

import type { Reservation, ReservationStatus } from '@/types';
import Badge from './Badge';

interface ReservationRowProps {
  reservation: Reservation;
  onStatus: (status: ReservationStatus) => void;
}

const ACTIONS: { status: ReservationStatus; label: string; cls: string }[] = [
  {
    status: 'confirmed',
    label: 'Confirm',
    cls: 'text-emerald-700 hover:underline dark:text-emerald-400',
  },
  {
    status: 'cancelled',
    label: 'Cancel',
    cls: 'text-red-600 hover:underline dark:text-red-400',
  },
];

export default function ReservationRow({ reservation, onStatus }: ReservationRowProps) {
  const r = reservation;
  return (
    <tr className="border-b border-zinc-200 last:border-0 dark:border-zinc-800">
      <td className="py-3 pr-4">
        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{r.name}</p>
        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{r.phone}</p>
      </td>
      <td className="py-3 pr-4 text-sm tabular-nums text-zinc-800 dark:text-zinc-100">
        {r.date} · {r.time}
      </td>
      <td className="py-3 pr-4 text-sm text-zinc-600 dark:text-zinc-400">
        {r.partySize} {r.partySize === 1 ? 'guest' : 'guests'}
      </td>
      <td className="py-3 pr-4">
        <Badge tone={r.status}>{r.status}</Badge>
      </td>
      <td className="py-3 text-right">
        <div className="flex justify-end gap-3 text-sm">
          {r.status === 'pending' ? (
            ACTIONS.map((a) => (
              <button
                key={a.status}
                onClick={() => onStatus(a.status)}
                className={`rounded focus:outline-none focus:ring-2 focus:ring-brand-primary ${a.cls}`}
              >
                {a.label}
              </button>
            ))
          ) : (
            <button
              onClick={() => onStatus('pending')}
              className="rounded text-zinc-500 hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-zinc-400"
            >
              Reopen
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}