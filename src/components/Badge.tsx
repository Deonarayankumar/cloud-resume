type BadgeProps = {
  children: string;
  variant?: 'default' | 'accent';
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles =
    variant === 'accent'
      ? 'border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent-muted)]'
      : 'border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-muted)]';

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>{children}</span>
  );
}
