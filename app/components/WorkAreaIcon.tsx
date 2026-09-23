export type WorkAreaIconType =
  | "factory"
  | "construction"
  | "school"
  | "hospital"
  | "government"
  | "office"
  | "port"
  | "energy";

export default function WorkAreaIcon({
  type,
  className = "",
}: {
  type: WorkAreaIconType;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {type === "factory" && (
        <>
          <path {...common} d="M3 21V9l6 3V8l6 4V5h4v16" />
          <path {...common} d="M3 21h18M7 17h2M12 17h2M17 17h2" />
        </>
      )}
      {type === "construction" && (
        <>
          <path {...common} d="M4 15h16M6 15v-2a6 6 0 0 1 12 0v2" />
          <path {...common} d="M9 13V9.5M15 13V9.5M3 17h18" />
        </>
      )}
      {type === "school" && (
        <>
          <path {...common} d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z" />
          <path {...common} d="M6 11.2V16c3 2.4 9 2.4 12 0v-4.8M21.5 9v6" />
        </>
      )}
      {type === "hospital" && (
        <>
          <path {...common} d="M5 21V5h14v16M3 21h18" />
          <path {...common} d="M12 8v6M9 11h6M8 17h2M14 17h2" />
        </>
      )}
      {type === "government" && (
        <>
          <path {...common} d="m3 9 9-5 9 5M4 10h16M5 19h14M3 21h18" />
          <path {...common} d="M7 10v9M12 10v9M17 10v9" />
        </>
      )}
      {type === "office" && (
        <>
          <path {...common} d="M5 21V4h10v17M15 9h4v12M3 21h18" />
          <path {...common} d="M8 8h4M8 12h4M8 16h4M17 13h1M17 17h1" />
        </>
      )}
      {type === "port" && (
        <>
          <path {...common} d="M12 3v15M8 7h8M5 12c0 5 3 9 7 9s7-4 7-9" />
          <path {...common} d="m5 12-3 2M19 12l3 2M9 4a3 3 0 0 1 6 0" />
        </>
      )}
      {type === "energy" && (
        <path {...common} d="M13.5 2 5 13h6l-1 9 9-12h-6l.5-8Z" />
      )}
    </svg>
  );
}
