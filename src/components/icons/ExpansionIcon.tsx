import { JSX } from 'solid-js/jsx-runtime';

// Define a default color for the icon
const defaultButtonColor = '#3B81F6';

// Define the ExpansionIcon component
export const ExpansionIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    // Set SVG attributes
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-expand"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke={props.color ?? defaultButtonColor} // Apply color prop or use default color
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {/* SVG paths for the icon */}
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="16 4 20 8 16 12" />
    <line x1="10" y1="12" x2="20" y2="12" />
    <polyline points="8 20 4 16 8 12" />
    <line x1="14" y1="12" x2="4" y2="12" />
  </svg>
);
