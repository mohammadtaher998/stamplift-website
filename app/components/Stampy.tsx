// Stampy — the Stamplift mascot: a rubber stamp with a face.
// He only shows up at moments worth a smile (hero, success, empty, error);
// the rest of the UI stays plain. Colours are fixed brand colours so he looks
// the same on every surface and in both themes.

export type StampyPose = "default" | "happy" | "wave" | "sleepy" | "confused";

const NAVY = "#14215B";
const BLUE = "#3350D8";
const SUNNY = "#FFC83D";
const CHEEK = "#FF9DB0";
// Outline follows the surface: navy on light, soft white on dark
// (set --stampy-outline on a dark container).
const OUTLINE = { stroke: `var(--stampy-outline, ${NAVY})` };
const OUTLINE_FILL = { fill: `var(--stampy-outline, ${NAVY})` };

function Eyes({ pose }: { pose: StampyPose }) {
  if (pose === "happy") {
    return (
      <g fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
        <path d="M19.5 45.5q3.5-4 7 0" />
        <path d="M37.5 45.5q3.5-4 7 0" />
      </g>
    );
  }
  if (pose === "sleepy") {
    return (
      <g fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
        <path d="M19.5 44.5q3.5 2.6 7 0" />
        <path d="M37.5 44.5q3.5 2.6 7 0" />
      </g>
    );
  }
  const right = pose === "confused" ? 4.4 : 3.6;
  return (
    <g>
      <circle cx="23" cy="44" r="3.6" fill="#fff" />
      <circle cx="41" cy="44" r={right} fill="#fff" />
      <circle cx="23.9" cy="44.7" r="1.7" fill={NAVY} />
      <circle cx="41.9" cy="44.7" r="1.9" fill={NAVY} />
    </g>
  );
}

function Mouth({ pose }: { pose: StampyPose }) {
  if (pose === "happy") {
    return <path d="M26 49.5h12a6 6 0 0 1-12 0z" fill="#fff" />;
  }
  if (pose === "sleepy") {
    return <path d="M29.5 51.5h5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />;
  }
  if (pose === "confused") {
    return (
      <path
        d="M26 52q2-2 4 0t4 0 4 0"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    );
  }
  return (
    <path d="M27 50c2.6 2.6 7.4 2.6 10 0" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
  );
}

export default function Stampy({
  pose = "default",
  size = 64,
  className,
  title,
}: {
  pose?: StampyPose;
  size?: number;
  className?: string;
  title?: string;
}) {
  // viewBox leaves room on the right for the waving arm and above for extras.
  return (
    <svg
      className={className}
      width={size}
      height={(size * 76) / 72}
      viewBox="-4 -4 76 76"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {pose === "wave" && (
        <g style={OUTLINE} strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M56 40c6-2 9-8 9-14" />
          <circle cx="65" cy="23" r="4" fill={SUNNY} />
        </g>
      )}
      {/* handle */}
      <circle cx="32" cy="12" r="10" fill={SUNNY} style={OUTLINE} strokeWidth="3" />
      <rect x="26" y="20" width="12" height="14" fill={SUNNY} style={OUTLINE} strokeWidth="3" />
      {/* body */}
      <rect x="6" y="32" width="52" height="26" rx="8" fill={BLUE} style={OUTLINE} strokeWidth="3" />
      <rect x="10" y="58" width="44" height="8" rx="2" style={OUTLINE_FILL} />
      {/* face */}
      <circle cx="15" cy="50" r="2.6" fill={CHEEK} opacity=".75" />
      <circle cx="49" cy="50" r="2.6" fill={CHEEK} opacity=".75" />
      <Eyes pose={pose} />
      <Mouth pose={pose} />
      {pose === "sleepy" && (
        <text x="50" y="16" fontSize="11" fontWeight="700" style={OUTLINE_FILL} fontFamily="system-ui, sans-serif">
          z
        </text>
      )}
      {pose === "confused" && (
        <text x="49" y="18" fontSize="14" fontWeight="800" style={OUTLINE_FILL} fontFamily="system-ui, sans-serif">
          ?
        </text>
      )}
    </svg>
  );
}
