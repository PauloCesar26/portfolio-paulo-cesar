// Cabeçalho padrão das seções: pequeno rótulo + título + subtítulo opcional
function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div data-reveal="up" data-reveal-stagger className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow &&
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          <span className="w-6 h-px bg-current"/>
          {eyebrow}
        </span>
      }
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
      {subtitle &&
        <p className="max-w-2xl text-base md:text-lg text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      }
    </div>
  );
}

export default SectionHeading;
