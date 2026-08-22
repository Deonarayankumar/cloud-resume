import { clients } from '../content/profile';

export default function ClientStrip() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      {clients.map((client) => (
        <span
          key={client}
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-muted)]"
        >
          {client}
        </span>
      ))}
    </div>
  );
}
