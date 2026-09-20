type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-[#b76e3c] text-white hover:bg-[#9d5d30]"
      : "border border-stone-300 bg-white/60 text-stone-900 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900/60 dark:text-stone-100 dark:hover:bg-stone-800";

  const content = (
    <span
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 ${classes} ${className}`}
    >
      {children}
    </span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
