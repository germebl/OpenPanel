import * as React from "react";
import { SVGProps } from "react";

const SvgDNS = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M9 12m0 1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1z" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M15 12v5" />
</svg>
);

export default SvgDNS;