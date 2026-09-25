'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRestaurant } from '@/context/ThemeContext';
import type { Category, MenuItem } from '@/types';
import ConfirmDialog from './ConfirmDialog';

type Filter = Category | 'all';
const FILTERS: Filter[] = ['all', 'starter', 'main', 'dessert', 'drink'];

const inputCls =
  'rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 ' +
  'focus:outline-none focus:ring-2 focus:ring-brand-primary ' +
  'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100';

export default function MenuTable() {
  const { menu, hydrated, toggleAvailable, deleteItem } = useRestaurant();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [pending, setPending] = useState<MenuItem | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter((m: MenuItem) => {
      const matchesFilter = filter === 'all' || m.category === filter;
      const matchesQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [menu, filter, query]);

  if (!hydrated) {
    return <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading menu…</p>;
  }

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name or description…"
          className={`${inputCls} flex-1 min-w-[12rem]`}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as Filter)}
          aria-label="Filter by category"
          className={inputCls}
        >
          {FILTERS.map((f) => (
            <option key={f} value={f}>{f === 'all' ? 'All categories' : f}</option>
          ))}
        </select>
        <Link
          href="/admin/menu/new"
          className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white
                     transition hover:bg-brand-primary/90 focus:outline-none focus:ring-2
                     focus:ring-brand-primary focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
        >
          Add item
        </Link>
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl bg-white p-4 shadow-sm dark:bg-zinc-900">
        {visible.length === 0 ? (
          <p className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            No items match your search.
          </p>
        ) : (
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-300 text-xs uppercase tracking-wide text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                <th className="pb-2 pr-4 font-medium">Item</th>
                <th className="pb-2 pr-4 font-medium">Category</th>
                <th className="pb-2 pr-4 font-medium">Price</th>
                <th className="pb-2 pr-4 font-medium">Status</th>
                <th className="pb-2 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((item: MenuItem) => (
                <tr key={item.id} className="border-b border-zinc-200 last:border-0 dark:border-zinc-800">
                  <td className="py-3 pr-4">
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{item.name}</p>
                    <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{item.description}</p>
                  </td>
                  <td className="py-3 pr-4 text-sm text-zinc-600 dark:text-zinc-400">{item.category}</td>
                  <td className="py-3 pr-4 text-sm tabular-nums text-zinc-800 dark:text-zinc-100">${item.price.toFixed(2)}</td>
                  <td className="py-3 pr-4">
                    <span className="inline-flex rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      {item.available ? 'Available' : 'Hidden'}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex justify-end gap-3 text-sm">
                      <button
                        type="button"
                        onClick={() => toggleAvailable(item.id)}
                        className="rounded text-zinc-500 hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-zinc-400"
                      >
                        {item.available ? 'Hide' : 'Show'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setPending(item)}
                        className="rounded text-red-600 hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary dark:text-red-400"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <ConfirmDialog
        open={pending !== null}
        title="Delete menu item?"
        message={pending ? `"${pending.name}" will be removed from the menu. This cannot be undone.` : ''}
        confirmLabel="Delete"
        tone="danger"
        onConfirm={() => {
          if (pending) deleteItem(pending.id);
          setPending(null);
        }}
        onCancel={() => setPending(null)}
      />
    </>
  );
}