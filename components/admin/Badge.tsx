type Category = 'starter' | 'main' | 'dessert' | 'drink';
type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

type Tone =
  | Category
  | ReservationStatus
  | 'available'
  | 'unavailable'
  | 'featured'
  | 'neutral';

interface BadgeProps {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}

const TONES: Record<Tone, string> = {
  // categories
  starter:   'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  main:      'bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20',
  dessert:   'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
  drink:     'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',

  // statuses
  pending:   'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  confirmed: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',

  // availability / flags
  available:   'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  unavailable: 'bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
  featured:    'bg-brand-accent/10 text-brand-accent dark:bg-brand-accent/25 dark:text-emerald-300',

  // fallback
  neutral:   'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
};

export default function Badge({ tone = 'neutral', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}