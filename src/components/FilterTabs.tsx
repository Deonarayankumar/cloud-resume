type FilterTabsProps<T extends string> = {
  options: readonly T[];
  active: T;
  onChange: (value: T) => void;
};

export default function FilterTabs<T extends string>({
  options,
  active,
  onChange,
}: FilterTabsProps<T>) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              isActive
                ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent-muted)]'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
