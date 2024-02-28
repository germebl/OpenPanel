import * as React from "react";
import { SVGProps } from "react";

const SvgPhpv = (props: SVGProps<SVGSVGElement>) => (

  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="64">
    <defs>
        <linearGradient id="A" x1="255.894" x2="255.894" y1="59.789" gradientUnits="userSpaceOnUse" y2="-452">
            <stop stop-color="#574c4a" offset="0%" />
            <stop stop-color="#80716d" offset="100%" />
        </linearGradient>
        <linearGradient id="B" x1="380.442" x2="191.971" y1="-51.758" y2="-382.305" gradientUnits="userSpaceOnUse">
            <stop stop-color="#268d83" offset="0%" />
            <stop stop-color="#2ea19e" offset="100%" />
        </linearGradient>
        <radialGradient id="C" cx="62.417" cy="142.923" r="9.213" fx="62.417" fy="142.923" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.02,0,0,2.02,92.53,-356.82)">
            <stop stop-color="#db7c7c" offset="0%" />
            <stop stop-color="#c83737" offset="100%" />
        </radialGradient>
        <radialGradient id="D" cx="96.726" cy="142.923" r="9.213" fx="96.726" fy="142.923" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.02,0,0,2.02,92.53,-356.82)">
            <stop stop-color="#db7c7c" offset="0%" />
            <stop stop-color="#c83737" offset="100%" />
        </radialGradient>
    </defs>
    <g transform="matrix(.125052 0 0 .125052 .000001 56.523492)">
        <path d="M0-106.196v-179.82C0-431.255 20.725-452 165.814-452h180.164c145.084 0 165.8 20.745 165.8 165.983v179.82c0 145.238-20.725 165.983-165.812 165.983H165.812C20.73 59.787 0 39.042 0-106.196z" fill="url(#A)" />
        <path
            d="M110.488-355.497C85.34-196.062 98.497-46.8 98.497-46.8h78.63c-7.48-39.802-34.32-221.642-11.993-222.24 11.966 1.9 66.64 154.267 66.64 154.267s12.04-1.5 24.155-1.5 24.16 1.5 24.16 1.5 54.68-152.37 66.64-154.267c22.34.598-4.505 182.438-11.98 222.24h78.633s13.162-149.272-12-308.706h-72.8c-13.857.162-66.58 92.63-72.64 92.63s-58.784-92.457-72.64-92.62z"
            fill="url(#B)"
        />
        <path d="M240.422-65.4c0 10.278-8.333 18.6-18.612 18.6s-18.6-8.333-18.6-18.6 8.333-18.612 18.6-18.612 18.612 8.332 18.612 18.612z" fill="url(#C)" />
        <path d="M308.66-65.4c0 10.278-8.332 18.6-18.6 18.6s-18.6-8.333-18.6-18.6 8.322-18.612 18.604-18.612 18.604 8.332 18.604 18.612z" fill="url(#D)" />
        <path
            d="M397.664-350.226c11.348 76.812 14 150.532 13.802 205.444-.214 56.168-3.432 92.66-3.432 92.66h-66.2l-7.113 5.33h78.64s13.16-149.27-11.992-308.705zm-208.373-1.94c20.66 22.98 56.4 83.966 61.3 83.966-13.1-16.75-45.27-70.192-61.3-83.965zm-29.48 77.802c-22.33.6 4.514 182.44 11.996 222.242H103.16l-4.66 5.33h78.634c-7.444-39.598-34.05-219.824-12.33-222.24-2.02-3.04-3.77-5.137-4.996-5.332zm181.6 0c-11.964 1.9-66.64 154.27-66.64 154.27s-12.04-1.5-24.154-1.5c-7.17 0-13.34.442-17.514.83l-1.3 6s12.04-1.498 24.154-1.498 24.158 1.5 24.158 1.5 54.26-151.372 66.476-154.27c-1.315-3.334-2.94-5.272-5.164-5.332z"
            opacity=".1"
        />
        <path
            d="M110.5-355.497C85.334-196.063 98.495-46.8 98.495-46.8l4.63-5.205c-2.37-35.218-8.7-162.572 12.696-298.17h72.8c1.54.017 3.6 1.28 6 3.33-4.767-5.302-8.73-8.63-11.33-8.662zm218.077 0c-13.857.164-66.58 92.628-72.637 92.628 2.47 3.16 4.477 5.34 5.33 5.34 6.06 0 58.78-92.464 72.638-92.63h64.248l3.224-5.33zm-158.435 91.795c17.685 26.56 61.642 148.94 61.642 148.94l1.286-5.97c-10.853-29.757-52.205-141.32-62.595-142.97-.113.003-.222-.012-.333 0zm181.925 0c11.862 30.254-10.592 181.1-17.326 216.9l7.14-5.567c9.108-53.42 31.03-210.78 10.195-211.34z"
            opacity=".3"
            fill="#fff"
        />
    </g>
</svg>
  
);

export default SvgPhpv;
