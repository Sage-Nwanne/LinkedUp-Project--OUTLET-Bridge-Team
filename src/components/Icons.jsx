// Inline SVG icon set. 1.5px strokes, 24x24 viewBox, currentColor.
// Usage: <Icon name="menu" size={20} />

const PATHS = {
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M6 6l12 12M18 6L6 18" /></>,
  arrowRight: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  chevronRight: <><path d="M9 6l6 6-6 6" /></>,
  chevronDown: <><path d="M6 9l6 6 6-6" /></>,
  book: <>
    <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5z" />
    <path d="M4 19a2 2 0 0 1 2-2h12" />
  </>,
  // CI/CD step icons
  calendar: <>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </>,
  eye: <>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </>,
  chart: <>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </>,
  wrench: <>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.1-2.1 2.4-2.4z" />
  </>,
  rocket: <>
    <path d="M14 4s5 0 6 1c1 1 1 6 1 6l-7 7-4-4 4-10z" />
    <path d="M9 14l-3 3 4 1-1-4z" />
    <circle cx="15" cy="9" r="1.5" />
  </>,
  // Mission accents
  check: <><path d="M5 12l4 4L19 7" /></>,
  x: <><path d="M6 6l12 12M18 6L6 18" /></>,
  // Misc
  spark: <>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </>,
  users: <>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15 20c0-2 2-4 4.5-4 1.6 0 3 .9 3.5 2" />
  </>,
  shield: <>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </>,
  flow: <>
    <rect x="3" y="4" width="6" height="6" rx="1" />
    <rect x="15" y="4" width="6" height="6" rx="1" />
    <rect x="9" y="14" width="6" height="6" rx="1" />
    <path d="M9 7h6M6 10v4M18 10v4M9 14H6M15 14h3" />
  </>,
  loop: <>
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 4v5h-5" />
  </>,
  target: <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
  </>,
  download: <>
    <path d="M12 3v10M5 14h14l-7 6 7-6M19 14v4H5v-4" />
  </>,
};

const FILLED = new Set([]);

export default function Icon({ name, size = 18, className = '', strokeWidth = 1.7, ...rest }) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={FILLED.has(name) ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon--${name} ${className}`.trim()}
      aria-hidden="true"
      {...rest}
    >
      {path}
    </svg>
  );
}
