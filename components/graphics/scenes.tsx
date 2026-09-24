/** Decorative scenes. They illustrate the idea; they are not photographs of a property. */

export function HorizonScene() {
  return (
    <svg viewBox="0 0 640 560" role="img" aria-hidden="true" className="h-auto w-full">
      <rect width="640" height="560" rx="32" fill="#10212B" />
      <circle cx="500" cy="110" r="54" fill="#FFC857" />
      <circle cx="500" cy="110" r="28" fill="#FFF4D6" />
      <path d="M0 250C90 210 140 280 230 240C320 200 360 280 470 230C560 190 600 230 640 210V420H0Z" fill="#1E3440" />
      <path d="M0 310C120 270 180 340 280 300C390 256 430 330 540 290C590 272 620 290 640 280V430H0Z" fill="#0E7C78" opacity="0.55" />
      <rect x="188" y="250" width="196" height="150" rx="8" fill="#F8F5EF" />
      <path d="M172 258L286 168L400 258" fill="#E8DDCC" />
      <rect x="214" y="286" width="36" height="36" rx="4" fill="#D9F0EE" />
      <rect x="268" y="286" width="36" height="36" rx="4" fill="#10212B" />
      <rect x="322" y="286" width="36" height="36" rx="4" fill="#D9F0EE" />
      <rect x="262" y="342" width="48" height="58" rx="6" fill="#0E7C78" />
      <circle cx="118" cy="168" r="28" fill="#F8F5EF" />
      <path d="M118 168V152M118 168l12 8" fill="none" stroke="#0E7C78" strokeWidth="3" strokeLinecap="round" />
      <circle cx="520" cy="188" r="28" fill="#F8F5EF" />
      <rect x="508" y="176" width="24" height="18" rx="3" fill="none" stroke="#10212B" strokeWidth="2.5" />
      <path d="M508 182h24" stroke="#10212B" strokeWidth="2.5" />
      <circle cx="430" cy="128" r="28" fill="#D9F0EE" />
      <path d="M418 128h24M430 116v24" stroke="#0E7C78" strokeWidth="3" strokeLinecap="round" />
      <path d="M146 168C190 150 220 190 250 176" fill="none" stroke="#F8F5EF" strokeWidth="2" strokeDasharray="5 6" />
      <path d="M458 128C470 160 430 200 400 230" fill="none" stroke="#F8F5EF" strokeWidth="2" strokeDasharray="5 6" />
      <path d="M492 188C470 210 430 230 398 248" fill="none" stroke="#F8F5EF" strokeWidth="2" strokeDasharray="5 6" />
      <path d="M40 470C140 430 200 500 300 460C410 416 470 500 600 450" fill="none" stroke="#00B4D8" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

export function ScatteredChannels() {
  return (
    <svg viewBox="0 0 520 360" role="img" aria-hidden="true" className="h-auto w-full">
      <rect width="520" height="360" rx="28" fill="#F8F5EF" />
      <g fill="#FFFFFF" stroke="#E8DDCC" strokeWidth="2">
        <rect x="36" y="40" width="120" height="72" rx="16" />
        <rect x="250" y="28" width="140" height="64" rx="16" />
        <rect x="360" y="150" width="124" height="70" rx="16" />
        <rect x="48" y="210" width="150" height="78" rx="16" />
        <rect x="230" y="230" width="110" height="68" rx="16" />
      </g>
      <g fill="#0E7C78">
        <circle cx="96" cy="76" r="8" />
        <circle cx="320" cy="60" r="8" />
        <circle cx="422" cy="185" r="8" />
        <circle cx="123" cy="249" r="8" />
        <circle cx="285" cy="264" r="8" />
      </g>
      <path d="M150 90L250 60M380 90L390 150M170 250L230 250M330 250L360 200" fill="none" stroke="#66757C" strokeWidth="2" strokeDasharray="4 7" />
    </svg>
  );
}

export function ConnectedFlow() {
  const nodes = [
    { x: 70, label: '01' },
    { x: 190, label: '02' },
    { x: 310, label: '03' },
    { x: 430, label: '04' },
  ];
  return (
    <svg viewBox="0 0 520 180" role="img" aria-hidden="true" className="h-auto w-full">
      <path d="M90 90H430" stroke="#D9F0EE" strokeWidth="8" strokeLinecap="round" />
      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy="90" r="28" fill="#0E7C78" />
          <text x={node.x} y="96" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="700">
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
