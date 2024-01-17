import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width='1em'
    height='1em'
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1440}
    viewBox="0 0 1080 1080"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path d="M455.2 96.1c-8.1 1.4-24.2 10.9-24.2 14.4 0 .6-.9 2.1-2.1 3.3-5 5.5-6.9 17.5-4.5 29.2.9 4.1 2.2 8 2.9 8.5.8.6 1.7 2 2.1 3.3 1.1 3.3 9.2 10.7 14 12.7 2.3 1 5.2 2.2 6.5 2.9 3.1 1.4 21.2 1.4 24.2-.1 1.3-.6 4.3-1.8 6.6-2.7 2.3-.8 5.2-2.4 6.5-3.3 4.6-3.6 10.8-10.4 10.8-11.8 0-.8.4-1.5 1-1.5.5 0 1.7-2.6 2.6-5.7 2.8-9.8 1.1-26.5-3.3-31.1-.7-.7-1.3-1.9-1.3-2.5 0-2-7.4-8.6-13.2-11.6-8.6-4.6-17.5-5.8-28.6-4zM466 112c0 .5.9 1 2 1 3.2 0 9.6 3.9 10.8 6.5.6 1.4 1.5 2.5 2 2.5s1.5 2.5 2.2 5.6c2.5 10.4-1 19.1-9.9 24.7-4.4 2.7-15.5 3-19.2.5-4.5-2.9-8.9-8.2-9.9-11.7-1.2-4.5-1.3-13.2-.1-16.3 2-5.4 10.3-11.8 15.1-11.8 1.1 0 2-.5 2-1 0-.6 1.1-1 2.5-1s2.5.4 2.5 1zM542.5 104.5c-4.5 1.1-10.2 3-11.2 3.7-.6.5-1.3.4-1.5-.2-.5-1.7-14.6-3.4-16.4-1.9-1.2.9-1.4 7.4-1.4 39.1v37.9l8.8-.3 8.7-.3.3-11.3c.1-6.1.4-11.2.6-11.2.2 0 2 .7 3.9 1.5 6.7 2.8 23.2 1.6 26.2-1.9.6-.6 2.3-1.9 3.8-2.9s3.2-2.9 3.7-4.3c.5-1.3 1.3-2.4 1.8-2.4 1.6 0 3.2-7.7 3.2-15.6 0-8.9-1.4-15.2-3.6-16.1-.8-.3-1.4-1-1.4-1.7 0-2.2-6.8-7.6-12.1-9.5-5.3-1.9-11.4-3.1-13.4-2.6zm8.2 19.7c11 11.7-2.7 30.7-15.2 21.2-6.5-4.9-7.2-15.6-1.4-21.4 2.6-2.6 3.8-3 8.3-3 4.6 0 5.6.4 8.3 3.2zM600 111c0 .5-.8 1-1.7 1-6.4 0-16.2 7.1-20 14.4-2.1 4-2.9 18.2-1.4 22.9 2.6 7.7 10.6 15.1 19.8 18.2 6.6 2.3 19.8 2.3 25.7 0 4-1.5 4.6-2.1 4.6-4.7 0-3.5-2.1-7.6-5.1-10.2-2.1-1.7-2.4-1.7-5-.2-4.3 2.5-12.7 2.1-17.1-.9-3.3-2.2-5.7-6-4.6-7.1.6-.6 16.9 1.6 19.3 2.6 1.1.5 5.7 1.4 10.3 2.1 6.3.9 8.6.9 9.5 0 .6-.6 1.3-4.5 1.5-8.6.4-6.8.1-7.9-2.9-14-1.9-3.7-4.2-7.1-5.2-7.7-1-.5-2.7-1.8-3.7-2.8-2-2-7.9-4-11.7-4-1.3 0-2.3-.5-2.3-1 0-.6-2.2-1-5-1-2.7 0-5 .4-5 1zM649 124.2c-.7 2.4-2 6.5-3 9.3-1.1 2.7-4 11.5-6.5 19.5-2.6 8-5.1 15.3-5.6 16.2-1.2 2.4-1.1 4.8.2 4.8.5 0 3 .9 5.4 2 6.2 2.8 10.8 3 11.3.5.2-1.1.9-2.3 1.4-2.6.5-.3 1.6-3.2 2.4-6.5 3-11.6 7.3-20.9 10.5-22.8 4.8-2.8 11-1.5 14.4 3 2.2 2.9 2.5 4 1.7 5.7-.5 1.2-2 5.6-3.2 9.7-1.2 4.1-2.5 8.4-3 9.5-2.1 4.7-4 11.9-3.6 13.2.3.7 1.4 1.3 2.5 1.3s2.1.5 2.3 1c.2.6 2.9 1.5 6.1 2.2 6.6 1.4 7 1.1 8.2-5.1.4-2 1.7-5.9 3-8.6 1.2-2.8 2.8-7.4 3.4-10.4.6-3 1.6-6 2.2-6.7 1.5-1.8 1.5-15.7 0-16.2-.6-.2-1.1-1-1.1-1.8 0-2.5-7-9.2-10.8-10.5-2-.6-4.2-1.6-4.9-2.1-.7-.5-4.4-.8-8.2-.6-6.4.3-7.1.1-7.3-1.7-.2-1.1-1.2-2.1-2.3-2.4-1.1-.2-2.2-.7-2.5-1.1-.7-1-7-3-9.6-3-1.9 0-2.5.8-3.4 4.2zM748.4 154c-5.8 3.4-10.4 10.7-10.4 16.6 0 4.3 4.4 14 7 15.4 1.1.6 2 1.6 2 2.3 0 .7 2.5 3.6 5.5 6.5 6.8 6.5 9 10.4 7.5 13.2-1.4 2.6-6.8 2.6-12 0-5.2-2.7-13.4-11.1-15.7-16.3-.7-1.5-1.9-2.7-2.7-2.7-2.5 0-11.1 6.6-11.4 8.9-.8 5.4 12.9 19.4 24.9 25.3 6.6 3.3 8.5 3.8 14.7 3.8 3.9 0 8.4-.5 9.9-1.2 4.3-1.9 10.1-8.3 11.2-12.5 2.9-10.4.9-14.7-15.1-31.9-5.3-5.7-6.9-10.2-4.4-12.3 2.3-1.9 8.4-.9 13 2.3 4.8 3.2 10.6 9.3 10.6 11 0 2.1 2.7 3.8 4.7 3.2 1-.4 3.8-2.4 6.2-4.5 4.4-3.7 4.4-3.9 3.1-7-2.6-6.3-15.5-17.4-24-20.7-2.5-.9-7.9-1.9-12-2.1-6.9-.3-7.9-.1-12.6 2.7zM323.9 164.1c-2.7 2.7-4.9 5.5-4.9 6.2 0 .8-.3.8-1.2-.1-1.3-1.3-4.4-1.6-5-.5-.1.5-2.4 1.9-5.1 3.3-2.6 1.3-5 3.3-5.3 4.2-.3 1 .7 3.6 2.5 6.2 1.7 2.5 3.1 4.9 3.1 5.5 0 .6.8 1.9 1.8 2.9.9 1 2.7 3.9 4 6.5 1.3 2.6 2.7 4.7 3.2 4.7s1.2 1 1.6 2.2c.4 1.3 1.8 4.1 3.2 6.3 1.4 2.2 3.5 5.8 4.7 7.9 2.9 5.5 4.8 6.5 8.3 4.4 1.5-1 4.1-2.4 5.9-3.3 1.7-.8 3.5-2 3.8-2.5 1.1-1.7-.3-7.4-2.3-9.6-1.6-1.9-2.3-3.1-5.4-8.7-.7-1.2-1.6-2.4-1.9-2.7-1.3-1-4.9-10-4.9-12 0-3.1 2.7-7.3 6.1-9.6 3.4-2.2 3.7-5.1 1.2-9.7-4.7-8.3-6.8-8.6-13.4-1.6zM386.3 172.5c-3.6 1.5-4.9 5.7-4 12.7.7 5.2 2.5 6.9 7.9 7.5 5 .6 10.1-1.4 11.8-4.6 1.3-2.5 1.3-8.2 0-11.5-1.8-4.9-9.3-6.9-15.7-4.1zM279.1 195c-3.6 1-7 2.5-7.7 3.4-.6.9-1.5 1.6-2.1 1.6-1.8 0-8.2 7.5-9.4 11-.7 1.9-1.7 3.8-2.3 4.2-1.6 1-1.4 17 .2 17.5.6.3 1.2 1.1 1.2 1.9 0 2.2 3.2 7.6 6.4 10.8 4.4 4.3 13.2 8 19.1 8 5.8 0 18.4-4 19.2-6 .3-.8 1.1-1.4 1.8-1.4 1.6 0 10.5-9.7 10.5-11.5 0-.7.5-1.5 1-1.7.6-.2 1.3-2.6 1.6-5.4.7-5.9.7-5.9-8.3-7l-5.9-.6-1.3 4.2c-2.4 8.1-12.5 14.6-19 12.2-2.2-.8-2.1-1 3.7-6 3.3-2.9 6.3-5.2 6.7-5.2.4 0 1.8-1 3.1-2.3 1.3-1.2 3.6-3.2 5.1-4.4 8.1-6.4 9.3-7.6 9.3-9.5 0-1-2.4-4.3-5.3-7.1-4.5-4.5-6.3-5.5-12.2-7-8.1-2-7.1-2-15.4.3zm11.3 15.3c1.7 1.2 1.6 1.4-1 3.2-1.6 1-3.8 2.6-4.9 3.7-10 9.3-11.5 9.7-11.5 3.8 0-3.3.7-4.7 4-8s4.7-4 7.8-4c2.1 0 4.6.6 5.6 1.3zM797.3 203.6c-1.3.3-2.3 1-2.3 1.5s-.7.9-1.6.9c-3.1 0-9 4.4-12.6 9.5-4.1 5.8-6.3 14.8-5.3 21.3.8 4.9 3.6 11.5 5.3 12.5.7.5 1.7 2 2.2 3.3.5 1.3 2.1 2.9 3.5 3.4s2.8 1.6 3.1 2.4c.3.7 3.1 2.1 6.2 3 3.1 1 6.5 2.1 7.4 2.7 2.2 1.2 7.3 1.2 9.6 0 .9-.5 3.6-1.5 5.9-2.1 3.8-1.2 12.3-7.6 12.3-9.3 0-.4 1.1-2.4 2.4-4.5 3.9-6 4.7-19.8 1.3-23.4-.7-.7-2.2-3.4-3.4-5.9-1.3-2.5-3.4-5.1-4.8-5.9-1.4-.7-2.5-1.7-2.5-2.1 0-1.1-7.4-4.9-9.4-4.9-.8 0-1.6-.5-1.8-1.1-.4-1.2-11.8-2.1-15.5-1.3zm14.4 17.9c3.5 1 7.3 6.2 7.3 10 0 5-1.7 8.6-5.8 12.4-12.1 11.2-27-5.9-16-18.4 2.9-3.4 7.8-5.6 10.8-5 .8.2 2.5.6 3.7 1zM233.3 236.9c-1.8.5-4.3 1.6-5.5 2.5-1.3.9-3.8 2.6-5.5 3.7-1.8 1.2-3.3 2.6-3.3 3.3 0 .6-.9 1.9-2 2.8-1.1 1-2.5 3.8-3.1 6.3-.9 3.7-1.5 4.4-2.9 4-2.2-.7-11 8.1-11 11 0 2.1 3.2 5.9 8.6 10.4 1.6 1.3 5 4.2 7.5 6.5 2.5 2.2 7.6 6.8 11.3 10.1 8.5 7.5 12.6 11.2 19.9 18.1 3.1 3 6.6 5.4 7.6 5.4 1.1 0 3.2-1.4 4.8-3.1 1.5-1.7 3.6-3.9 4.6-4.7.9-.9 1.7-2.5 1.7-3.6 0-1.8-8.6-10.7-14.2-14.8-2.2-1.6-2.2-1.6-.3-2.3 8.3-2.8 15.9-9.8 17.2-15.8.3-1.5.9-2.7 1.4-2.7.5 0 .9-3.3.9-7.3 0-5.8-.5-8.4-2.4-12.1-2.9-5.7-11.4-14.1-16.4-16.2-4.5-1.8-14.5-2.6-18.9-1.5zm11 18.6c2 .8 4.1 2.4 4.7 3.4.5 1.1 1.8 2.7 2.7 3.7 3 2.9 2.4 9.4-1.2 13.1-5.9 6-13 6.1-19.5.1-5.6-5.1-6.1-11.8-1.1-17.2 4.4-4.8 8.4-5.6 14.4-3.1zM849.7 245.9c-2.4 2.3-4.9 4.1-5.4 4.1-.6 0-1.8 1.1-2.7 2.5-.9 1.4-2.2 2.5-2.8 2.5-.7 0-2.4 1.1-3.8 2.5s-4.1 4-6.2 5.8c-8.6 7.6-10.7 18-5.4 27.6 4.3 8 7.5 10.7 16.1 13.6 1.9.6 1.9.7.3 1.9-2.3 1.7-2.3 2 .5 5.3 7.7 9.3 8.2 9.6 10.8 8.3 1.3-.7 3.3-2.2 4.5-3.4 1.2-1.2 4.1-3.7 6.4-5.6 2.4-1.9 7.6-6.3 11.6-9.8 4-3.4 7.6-6.2 8.1-6.2.4 0 1.4-.9 2.1-2 .7-1.1 1.9-2 2.7-2 2.2 0 4.8-4.6 4.1-7.4-.7-2.8-8.5-11.6-10.3-11.6-.7 0-2.9 1.5-5 3.4-8.2 7.5-18.3 15.5-20.2 16.1-1.2.3-2.1 1.1-2.1 1.6s-1.1.9-2.5.9-2.5-.4-2.5-.9-1.1-1.2-2.5-1.5c-1.6-.4-3.2-2.1-4.5-4.6-1.9-3.8-2-4.2-.4-7.1 1.5-2.9 8.8-10.9 10-10.9.3 0 3.8-2.8 7.9-6.2 8.4-7 9.2-9.3 4.8-13.4-1.4-1.3-3.1-3.4-3.7-4.7-1.9-3.7-5-3.3-9.9 1.2zM191 291.7c-.8.3-1.7.9-2 1.2-.3.3-2.4 1.5-4.7 2.6-4.6 2.3-10.3 8.6-12.3 13.6-.8 1.9-1.9 3.7-2.4 4.1-1.4.9-1.4 19.6-.1 20.6.6.4 2 2.8 3.3 5.4 1.3 2.6 3.2 5 4.2 5.3 1.1.4 2 1.1 2 1.6s2.1 1.9 4.8 3c2.6 1.2 5.5 2.6 6.4 3 2.2 1.1 12.1 1.2 13.3.1.6-.5 2.9-1.4 5.2-2.1 3.7-1 9.1-5.5 14.8-12.1 3.9-4.6 5.8-19.8 3.5-28.2-1.7-6-11.1-15.8-15.1-15.8-.6 0-1.7-.7-2.5-1.5-1.1-1.1-3.6-1.5-9.2-1.4-4.2 0-8.4.3-9.2.6zm13 18.8c4.7 2.4 8 7.6 8 12.3 0 3.6-.6 4.8-4 8.2-5.3 5.3-10.3 5.6-16.6.7-2.3-1.7-4.7-4.2-5.3-5.5-2.3-4.8-.8-10.7 3.5-14.7 3.2-2.9 9.8-3.4 14.4-1zM894 302.2c-1.9 1.3-4.1 2.8-4.8 3.5-.7.7-1.8 1.3-2.4 1.3-.5 0-3 1.3-5.3 2.9-2.4 1.6-6 3.7-7.9 4.6-2 1-3.6 2.1-3.6 2.6s-.5.9-1 .9c-.6 0-3.4 1.5-6.3 3.3-2.8 1.8-6.1 3.8-7.2 4.3-2.9 1.6-3 4.1-.2 7.7 1.3 1.8 3.2 4.7 4.1 6.4 1.8 3.7 4.5 4.3 7.1 1.6 1-.9 3.4-2.5 5.4-3.6 2-1.1 3.8-2.3 4.1-2.7.3-.4 2.5-1.8 5-3s4.8-2.8 5.2-3.4c.4-.6 3.4-1.1 6.7-1.1 5.1 0 6.3.3 7.6 2.2.9 1.2 2.2 2.9 3 3.7.8.8 1.5 1.9 1.5 2.5 0 1.6 3.5 1.4 4.9-.2.6-.8 2.9-2.2 5.1-3.2 5.4-2.4 5.4-5.7.2-10.8-2.1-2-4.1-3.7-4.5-3.7-.4 0-1.4-.6-2.1-1.2-1-1-1.1-1.7-.2-3.1.9-1.4.6-2.6-1.2-5.8-5-8.6-7.1-9.5-13.2-5.7zM132 339.5c-1.1 2.6-2 5.3-2 6.1 0 .8-.4 1.4-1 1.4-.5 0-1 .9-1 2s.7 2 1.5 2 1.5.4 1.5.8c0 .5 2.7 2 6 3.3 3.3 1.3 6 2.6 6 3 0 .3 2.1 1.4 4.8 2.4 2.6 1 7 3 9.7 4.5 2.8 1.5 6.2 3.1 7.8 3.4 1.5.4 2.7 1.1 2.7 1.6 0 .6.5 1 1.1 1 .6 0 6.6 2.7 13.3 6 12.7 6.2 15.6 7 15.6 4.5 0-.7.6-1.8 1.3-2.2 1.6-1.1 4.7-7.8 4.7-10.4 0-1.2-1.1-2.4-2.7-3.2-1.6-.6-3.4-1.7-4.1-2.4-.7-.7-1.8-1.3-2.3-1.3-.5 0-5.1-2-10.1-4.5-5.1-2.5-9.8-4.5-10.5-4.5-.7 0-1.3-.5-1.3-1 0-.6-.5-1-1.2-1-.6 0-7.8-3.4-16-7.5s-16.4-7.7-18.3-8.1c-3.4-.6-3.5-.5-5.5 4.1zM902.5 343.7c-3.5.9-12.9 6.5-15.4 9.2-1.3 1.4-3.2 4.3-4.2 6.6-3.5 7.6-1.7 26.6 3 31.9 5.9 6.7 10.4 10.4 13.9 11.4 8.3 2.5 9.2 1.7 9.2-7.8 0-5.8-.1-5.9-3.6-7.6-5.2-2.5-8.9-7.8-8.9-12.9 0-3.5.6-4.8 3.7-7.9 6.4-6.4 14.3-7 19.8-1.5 3.6 3.7 4.5 7.9 2.9 13.6l-1.2 4.6 4.9 4.3c4.9 4.4 8 5.2 9.5 2.4 4.3-8.1 5.2-17.2 2.4-22.6-.8-1.6-1.5-3.6-1.5-4.5 0-2.8-8-12.6-11.8-14.5-2.1-1.1-4-2.2-4.3-2.7-1.6-2.1-12.8-3.4-18.4-2zM149.7 376.7c-9.5 2.5-19.6 13.3-19.7 21 0 1.3-.4 2.3-1 2.3s-1 3-1 7 .4 7 1 7 1 .9 1 2c0 5.1 6.9 13.5 13 16 1.9.7 4.4 2 5.5 2.7 3 2 13.6 1.6 19.7-.8 4.9-1.9 12.8-8.2 12.8-10.1 0-.5.8-1.8 1.8-2.9 2-2.1 4.2-8.3 4.2-11.7 0-1.1.5-2.4 1-2.7.6-.3 1-2.8 1-5.6 0-2.7-.4-4.9-1-4.9-.5 0-1-1-1-2.3 0-1.3-.6-3.1-1.4-4.2-1.4-1.9-1.8-1.8-9.1.9l-4 1.5.3 5.6c.1 3.1-.2 7.4-.8 9.5-1.2 4.4-7.3 11-10.1 11-1 0-1.9-.1-1.9-.3 0-.1 1.6-4.7 3.6-10.2 1.9-5.5 3.9-11.6 4.4-13.6.5-1.9 1.6-4.9 2.5-6.5.8-1.6 1.5-4.1 1.5-5.5 0-2.9-1.4-3.6-10.3-5.8-5.5-1.3-4.6-1.3-12 .6zM923 398.8c0 .4-2.1 1.3-4.6 2-3.1.8-5.8 2.6-8.7 5.6-5.6 5.8-6.1 6.6-7.5 10.5-2.2 6.2-1 24.6 1.8 27.1.3.3 1.4 2.2 2.5 4.3 1 2.1 3.3 5 5 6.3 1.6 1.3 3.5 2.9 4.2 3.4 1.5 1.2 3.3 1.3 3.3.2 0-.5.8-1.7 1.9-2.8 4.7-5.1 5.3-9.6 1.6-12-5-3.2-7.3-13.9-4.4-19.9 2.5-5 3.5-3.9 5.9 6.2 1.3 5.4 2.6 10 3 10.3.3.3 1.5 4.1 2.6 8.5l1.9 8 5.1-.1c8.2-.2 14.6-4.7 19.8-13.7 2.6-4.5 2.8-5.5 2.4-14.3-.1-5.2-.8-9.8-1.4-10.2-.5-.4-1.6-2.2-2.4-4.1-1.8-4.5-8.8-11.4-13.1-13-1.9-.7-4.2-1.7-5.1-2.2-2.2-1.1-13.8-1.2-13.8-.1zm17.5 20.3c2.7 2.6 3 3.6 3 8.8 0 4.4-.5 6.4-1.9 8-1.1 1.2-2.2 2.1-2.7 2.1-.4 0-1.5-3.5-2.4-7.8-.9-4.2-2.3-9-3.1-10.6-.7-1.6-1.1-3.3-.8-3.8.9-1.4 4.6.1 7.9 3.3zM119.5 429.9c-.3.6-.8 4.5-1.2 8.8l-.6 7.8 4.4 2.4c2.4 1.4 4.6 2.7 4.9 3.1.3.3 2.3 1.7 4.5 3s4.9 3.2 5.9 4.2c1.1 1 2.5 1.8 3 1.8.6 0 2.4 1.1 4 2.5l2.8 2.4-2.8.6c-1.6.3-5.6 1.3-8.9 2.1-3.3.8-9.8 2.1-14.5 2.9-4.6.8-8.9 2-9.6 2.7-1.4 1.6-3.7 15.9-2.7 16.9.8.8 20.2-2.5 23.8-4 1.7-.8 20.9-4.9 31.2-6.7 1.8-.4 3.6-1.1 4.1-1.8 1.1-1.2 2.1-5.9 2.9-12.7.5-4.6.5-4.6-4.7-8.3-2.9-2.1-5.9-4-6.8-4.3-.8-.4-2.3-1.3-3.1-2-2.1-1.9-14.9-10.3-15.6-10.3-.3 0-1.3-.7-2.2-1.6-3-2.7-15.5-10.4-16.9-10.4-.7 0-1.5.4-1.9.9zM944.5 489c-5.1 1.1-9.1 2.6-11.1 4.2-5.9 4.8-11.4 10.3-11.4 11.4 0 .8-.4 1.4-.9 1.4-1.9 0-6.1 15-6.1 21.6 0 6.2 3.7 19.5 6.1 21.7 1 1 1.9 2.1 1.9 2.6 0 1.3 5.6 7.1 6.8 7.1 1.7 0 7.2-5.1 7.2-6.6 0-.7.9-1.8 2-2.4 2.7-1.4 2.5-2.3-1-6.3-1.6-1.9-3-3.9-3-4.5 0-.5-.7-1.5-1.5-2.2-1.1-.9-1.5-3.3-1.5-8.5s.4-7.6 1.5-8.5c.8-.7 1.5-1.8 1.5-2.4 0-.7 1.7-2.8 3.8-4.8 4.7-4.7 11.1-6.3 19-4.8 3.1.5 5.6 1 5.7 1 1.2 0 7.5 7.4 8.5 10 .7 1.9 1.7 3.9 2.2 4.4 1.7 2 .7 8.4-2.2 14.4-1.6 3.4-3.4 6.2-4 6.2-2.1 0-.8 2.7 3.6 7.2 5.4 5.6 8.3 6.1 11.3 2 1.2-1.5 2.6-3.3 3.1-4 .6-.7 1.8-3.1 2.7-5.5 2.1-5.4 2.4-24.5.4-30.1-1.6-4.6-6.8-12.6-8.7-13.3-.8-.3-1.4-1.1-1.4-1.7 0-.7-1.6-2.1-3.5-3.2-1.9-1-3.5-2.1-3.5-2.5 0-.3-1.9-1.4-4.3-2.3-5.1-1.9-17.7-2.8-23.2-1.6zM123.5 498.1c-2.2 1.2-5.2 2.8-6.7 3.6-1.6.8-2.8 1.9-2.8 2.4 0 .6-1.1 2-2.3 3.2-3.5 3.3-4.7 7.9-4.7 18.2 0 9.1 1.2 15.1 3.4 17 .6.5 1.9 2.2 2.9 3.7 1 1.6 2.3 2.8 3 2.8.7 0 2.2.8 3.3 1.9 4.8 4.5 13.4 6.1 22.5 4.2 6-1.3 8-2.5 14.2-8.4 7.4-7.2 10.9-23.9 7.1-34.6-4.1-11.9-8.2-13.7-15.1-6.6-3.9 4-4 4.7-1.2 8.4 1.8 2.5 2.1 4 1.7 10-.3 5.7-.8 7.5-2.8 9.6-1.3 1.4-2.7 2.5-3.2 2.5-.4 0-.8-9-.8-20v-20h-7.3c-5.5 0-8.3.5-11.2 2.1zm6.5 26.3c0 9-.2 10.5-1.7 11.1-1.3.4-2.6-.3-4.5-2.5-4.5-5-3.5-13.3 2.2-17.7 3.5-2.8 4-1.6 4 9.1zM121.5 561c-1.6.4-4.3 1.5-6 2.4-1.6.9-3.5 1.6-4.2 1.6-.6 0-2 1.1-3.1 2.5s-2.4 2.5-2.9 2.5c-1.8 0-8.2 10.5-9.2 15-1.6 6.9-1.3 19 .9 35.5 1.1 8.2 2 15.6 2 16.2 0 .8 1.4 1.3 3.8 1.3 5.5 0 26.4-3 28.4-4.1 1-.5 3.1-.9 4.7-.9 4.2 0 34.2-4 35.4-4.7 1.1-.7.2-15-1.3-19.8-.5-1.7-1.6-7.7-2.4-13.4-.9-5.8-2.2-11.2-2.9-12-.8-.9-2-3.1-2.7-4.9-1.6-4.1-10.4-13-13.6-13.8-1.3-.3-2.4-1-2.4-1.4 0-2.4-17.5-3.8-24.5-2zm21.8 21.9c2.8 2.1 5.2 4.8 6 7 1.7 4.1 5.2 20.9 4.6 21.6-.2.2-6.9 1.2-14.9 2.1-8 1-14.7 2.1-15 2.5-.3.4-2.8.9-5.5 1-5 .3-5 .3-5.3-2.9-.2-1.8-.7-3.2-1.3-3.2-.5 0-.9-4.3-.9-9.5s.4-9.5.9-9.5 1.4-1.4 2.1-3c.7-1.7 2.7-4 4.4-5.2 1.7-1.2 3.3-2.5 3.6-2.9.8-1.1 5.2-1.7 11.1-1.5 4.5.2 6.4.8 10.2 3.5zM933.3 561.2c-2.4.5-4.3 1.3-4.3 1.9 0 .5-.6.9-1.3.9-1.7 0-9.5 8.2-11.8 12.4-2.5 4.7-4.2 15-3.4 20.8 1.4 10 9.9 20.8 18 22.9 2.2.6 4.8 1.5 5.7 2 2.3 1.1 9.3 1.2 11.6 0 .9-.5 3.5-1.4 5.7-2.1 4.6-1.5 11.5-8.2 13.6-13.2.7-1.8 1.8-3.6 2.3-4 .7-.4 1.1-5.2 1.1-12.1 0-9.5-.3-11.6-1.7-13.1-1-1-1.8-2.3-1.8-3.1 0-1.7-7.8-9.5-9.5-9.5-.8 0-2-.6-2.8-1.4-3.2-3.3-12.9-4.3-21.4-2.4zm15.7 19.4c5.6 3.4 7.7 11.2 4.5 17.3-4.2 8.3-19.6 7.6-23.8-1.1-2.5-5-1.4-10.3 2.9-14.6 2.8-2.8 3.9-3.2 8.4-3.2 3 0 6.4.7 8 1.6zM908.5 622c-1.2 1.9-3.5 10.6-3.5 13.2 0 2.3.7 3.1 4.3 4.6 2.3 1.1 7.8 2.7 12.2 3.7 4.4 1 8.2 2.2 8.5 2.5.3.4 2.2 1.5 4.2 2.4 9.7 4.6 7.4 19.5-2.9 19.6-3.7 0-17.2-3.4-22.1-5.6-1.7-.8-5.4-1.8-8-2.1l-4.8-.5-1.9 7.4c-1 4.1-1.6 8.2-1.3 9 .4.8 3.2 2 6.4 2.7 3.3.7 7.4 1.9 9.3 2.8 1.8.8 7 2.2 11.5 3.1 4.4 1 8.3 2 8.4 2.4.5 1.2 8.2.9 8.2-.2 0-.6 1-1 2.3-1 3.4-.1 6.5-2.2 10.3-7 4.2-5.3 5.7-10.4 5.2-18.7-.3-5.9-.2-6.3 1.8-6.3 1.7 0 2.4-1 3.4-4.7.8-2.5 1.4-6.5 1.4-8.7.1-4 0-4.1-3.9-5.2-2.2-.6-5.1-1.5-6.5-2.1-1.4-.6-6.1-1.9-10.5-2.9s-8.2-2.1-8.5-2.5c-.3-.4-4.6-1.8-9.5-3-5-1.3-9.1-2.7-9.3-3.1-.5-1.1-4-1-4.7.2zM175.3 657.3c-1.2 1.8-2.8 4.7-3.4 6.5-.6 1.7-1.5 3.2-1.9 3.2-.4 0-1.8 2.5-3.1 5.5-1.2 3-2.6 5.5-3 5.5-.3 0-1.6 2.2-2.8 5-1.9 4.4-4.1 6.6-4.1 4.1 0-.5-2.4-1.7-5.2-2.6-2.9-1-7.1-2.6-9.3-3.5-8.1-3.6-11.8-5-13.1-5-1.9 0-1.7 2.8.5 7.5 1 2.2 2.6 5.7 3.5 7.8 1.1 2.6 2.7 4.2 5.3 5.5 2.1.9 3.9 2 4.1 2.4.2.3 2.9 1.4 6 2.4 3.1.9 6.4 2.3 7.2 2.9.8.7 2.4 1.5 3.5 2 1.9.7 1.9.8-.5 1.8-1.4.6-2.7 1.4-3 1.8-.3.3-3.5 1.7-7.2 2.9-3.8 1.2-6.8 2.5-6.8 2.9 0 .3-2.8 1.5-6.2 2.6-3.4 1.1-7.3 2.9-8.6 4-2.3 2-2.3 2.1-.7 6.3 1 2.3 2.1 4.2 2.5 4.2.4 0 1 1.3 1.4 3 .3 2 1.2 3 2.3 3 2.1 0 12.5-3.8 13.3-4.9.3-.3 3.7-1.7 7.5-3 3.9-1.3 7.2-2.7 7.5-3.1.3-.4 3.5-1.7 7.3-2.9 3.7-1.3 6.7-2.6 6.7-3 0-.3 2.1-1.3 4.8-2 2.6-.8 6.7-2.4 9.2-3.7 2.5-1.2 6.4-2.8 8.7-3.5 2.4-.7 4.5-2 4.8-2.9.5-1.7-1.2-6.9-2.6-8-.4-.3-1.1-2.1-1.6-4-.5-2-1.6-3.6-2.7-3.8-1.9-.4-10.6 2.9-10.6 4 0 .5-.9.8-2 .8s-2-.4-2-.9-1.3-1.2-3-1.6c-1.6-.4-3-.9-3-1.1 0-.3 1.1-2.2 2.5-4.2s2.5-4.1 2.5-4.6 1.3-3.1 3-5.7c1.6-2.7 3.2-5.9 3.5-7.2.6-2.4-2.7-13.6-4.4-14.6-.5-.3-1-1.5-1.2-2.6-.6-3.1-3.2-2.8-5.6.8zM890.5 691.1c-4.5 2.1-7.9 4.6-8.9 6.4-.6 1.1-1.4 2.2-1.7 2.5-1.8 1.4-3.9 8.9-3.9 13.7v5.4l6.7-.3 6.7-.3.7-3.5c.9-4.3 3.9-6.9 7.4-6.3 1.4.3 2.5.9 2.5 1.3 0 .5 2.9 1.9 6.5 3.2 3.6 1.2 6.5 2.6 6.5 3 0 .5.6.8 1.4.8 2.6 0 2.7 1.8.6 5.9-2.8 5.5-2.6 7.9.7 9.2 1.5.6 3 1.4 3.3 1.9.3.6 2 1.3 3.8 1.6 2.5.5 3.2.3 3.2-.9 0-.8.6-2 1.4-2.6.8-.7 1.8-2.6 2.1-4.2.8-3.5 2.7-3.7 7.3-.9 5 3.1 6.4 2.6 9.5-3.5 3.6-7.3 3.6-11.2 0-12.1-1.5-.4-3.4-1.3-4.1-2.1-.7-.7-2-1.3-2.8-1.3-1.3 0-1.3-.3 0-2.2 2.1-2.9 2.1-6.8 0-6.8-.8 0-2.2-.7-3-1.5-1.9-1.8-5.9-2.9-7.9-2.1-.8.3-2 1.7-2.5 3.1-.5 1.4-1.3 2.5-1.7 2.5-.5 0-3.9-1.5-7.8-3.4-3.8-1.9-9.1-4.4-11.6-5.5-4.8-2.2-11-2.6-14.4-1zM191.7 718.7c-.9.8-.9 11-.1 14 .4 1.4 1.4 2.3 2.5 2.3 3.9 0 8.6 2.8 10.9 6.4 2.8 4.7 2.2 10.1-1.8 14.3-6.1 6.6-14.8 6.8-20.2.6-3-3.4-3.2-4-2.7-9.3.6-6.7-.1-7.9-6.9-11.3-4.9-2.5-5.2-2.5-6.8-.8-.9 1-1.6 2.7-1.6 3.9 0 1.2-.4 2.2-1 2.2s-1 2.8-1 6.5.4 6.5 1 6.5 1 .9 1 2c0 2.4 3.7 10 4.8 10 .4 0 1.5 1.4 2.4 3 .9 1.7 2.9 3.5 4.3 4s2.5 1.3 2.5 1.8c0 1.6 10.1 4.2 16 4.2 6.1 0 11.9-1.5 13.5-3.5.6-.6 2.5-1.9 4.3-2.9 1.7-.9 3.2-2.1 3.2-2.6s1.1-2 2.5-3.4 2.7-4.2 3.1-6.5c.4-2.3 1-4.1 1.5-4.1 1.2 0 1.2-9.5 0-11.8-.5-.9-1.6-3.8-2.5-6.3-2.8-7.9-9.7-15.4-17.2-18.5-3.5-1.5-10.6-1.9-11.7-.7zM869 722.2c-5.9 8.9-6.4 13.1-1.7 15.4 1.7.9 3.4 2 3.7 2.4.3.4 2.5 1.8 5 3s4.7 2.6 5 3c.3.4 1.9 1.5 3.7 2.4 1.7.9 4 2.9 5 4.6.9 1.6 2.1 3 2.5 3 1.5 0 .8 4.9-1.2 8.5-2.7 4.8-2.6 7.3.5 8.5 1.4.5 2.5 1.4 2.5 1.9s1.6 1.6 3.5 2.5c2.7 1.3 3.8 1.4 5.3.5 2.5-1.5 4.2-6.4 4.2-11.7 0-3.8.2-4.2 2.5-4.2 1.6 0 3.1-1 4.2-2.8 1-1.5 2.6-3.6 3.5-4.6 2.3-2.6 2.4-7.5.1-8.3-1-.4-2.7-1.5-3.7-2.5-1.1-1-2.5-1.8-3.2-1.8-.6 0-3.4-1.5-6-3.3-2.7-1.8-5.6-3.6-6.4-4-.8-.4-4.6-2.7-8.5-5.2-3.8-2.5-8-5-9.3-5.5-1.3-.6-3-1.7-3.8-2.5-2.2-2.2-5.7-1.8-7.4.7zM848.2 755.2c-.7.7-1.2 1.8-1.2 2.5 0 .6-.6 1.6-1.3 2-2 1.2-4.7 6-4.7 8.2 0 1.2 1.2 2.6 2.9 3.6 1.6.8 3.5 2 4.3 2.7 2.5 2.4 7.7 5.8 8.8 5.8.5 0 1 .5 1 1 0 .6 1.5 1.9 3.3 3 1.7 1.1 4.1 2.6 5.2 3.5 8.7 6.8 12.4 9.5 13 9.5.4 0 1.5 1 2.4 2.1 2.5 3.1 4.9 1.8 9.4-4.7 4.5-6.6 4.6-8.6.8-11.1-6-3.8-11.7-7.9-14.1-10.1-1.4-1.2-3-2.2-3.7-2.2-.7 0-1.7-.9-2.3-2-.6-1.1-1.5-2-2.1-2-.6 0-3.6-2-6.8-4.5-3.1-2.5-6.1-4.5-6.6-4.5-.4 0-1.3-.6-1.9-1.4-1.6-2-5-2.8-6.4-1.4zM221.7 773c-19.3 16.3-20.7 18.1-20.7 27.4 0 7.6.9 10.9 3.6 14.1 1.3 1.6 2.4 3.1 2.4 3.5 0 .4 2.2 2.9 5 5.6 9.3 9.1 18.4 12.1 20.8 6.9.7-1.4 1.2-3.2 1.2-4 0-.8.5-1.5 1-1.5.6 0 1-.9 1-2.1 0-1.4-1.3-2.6-4.4-3.9-9.1-4.1-14.5-11.8-12.2-17.4l1.1-2.8 2.3 2.4c1.2 1.3 4 4.2 6.2 6.6 6.7 7.4 11.6 10.2 18.2 10.2 3.4 0 6.2-.5 7-1.3.7-.8 2.3-1.9 3.6-2.6 2.9-1.6 5.2-7.2 5.2-13 0-4.5-3.1-13.1-4.7-13.1-.5 0-1.3-1-1.8-2.2-.6-1.2-1.9-2.6-2.9-3.2-1.1-.6-2.8-1.9-3.8-2.9-1-.9-2.5-1.7-3.3-1.7-.9 0-1.5-1-1.5-2.6s-1.7-4.5-4.7-8c-2.6-3-4.9-5.4-5.2-5.3-.3 0-6.4 4.9-13.4 10.9zM829.4 780.7c-2.5 2.7-4.7 6-5 7.4-.4 1.8-2 3.4-4.7 4.9-8.5 4.7-14.7 13.3-14.7 20.4 0 2-.4 3.6-1 3.6-.5 0-1 .9-1 2s.5 2 1 2c.6 0 1 1.3 1 2.8 0 6 6.5 14.8 14.9 20.1 4.6 3 6.3 3.5 13 3.9 7.1.4 8 .2 13.7-3 7.5-4.1 12.4-9.5 13.9-15.5l1.2-4.6 3.6 3.4c2 1.9 6 5.6 8.8 8.3l5.1 4.9 5.9-5.9c3.2-3.2 5.9-6.5 5.9-7.4 0-1.4-9-11-10.3-11-.3 0-4.3-3.7-9-8.3-4.7-4.5-11.6-11-15.4-14.4-3.7-3.4-9.7-8.9-13.3-12.3-3.6-3.3-7.1-6-7.9-6-.7 0-3.3 2.1-5.7 4.7zm12.2 25.5c5.1 3.9 6.4 6.4 6.4 12.2 0 3.5-.6 5-3.4 8-3 3.1-4.1 3.6-7.9 3.6-5.1 0-10-2.9-12.6-7.5-.9-1.7-1.9-3.2-2.3-3.3-1.4-.6-.9-5.2.9-8 5.2-8.6 11.8-10.3 18.9-5zM896.4 795.3c-2.6 2.3-2.9 3.1-2.9 8.6 0 7.3 1.4 9.1 7.8 9.8 4.1.5 4.8.2 8.3-3 3.4-3.1 3.8-3.9 3.8-8.6 0-6.6-1.7-8.3-8.7-8.9-4.6-.4-5.7-.1-8.3 2.1zM265.4 807.7c-.4 1.5-1.3 3.4-2.1 4.1-1.8 1.8-1.7 6.2.1 6.2 1.7 0 7.6 4.8 7.6 6.1 0 .6-1.3 2.4-3 4.2-1.6 1.8-3 3.8-3 4.4 0 .7-.6 1.3-1.4 1.3-.7 0-2.2 1.2-3.2 2.7-.9 1.5-2.7 3.5-3.8 4.5-1.9 1.5-2.3 1.5-4.4.2-1.3-.9-3.2-2.4-4.3-3.5-1-1-2.7-1.9-3.8-1.9-1.8 0-9.1 7.8-9.1 9.7 0 .5 1.8 2.7 4 4.8 2.2 2.1 4 4.2 4 4.7 0 .4-1.6 2.3-3.5 4.2-1.9 2-3.5 4.2-3.5 4.9 0 .8 2.1 3.3 4.8 5.6 6.2 5.5 6.9 6.1 8.1 6.1 1.5 0 7.1-5.3 7.1-6.7 0-2 2.4-1.5 4 .7 2.2 3 4.8 2.4 9.1-1.9s4.9-7.4 1.9-9.3c-2.9-1.8-2.6-2.8 2.8-8.5 8.7-9.4 12.2-13.8 12.8-16.3.3-1.4.9-3.3 1.5-4.2 1.2-2.3 1.2-5.8-.1-5.8-.5 0-1-1-1-2.1 0-2.9-4-9.8-6.1-10.4-.9-.3-2-1.2-2.3-2-.6-1.7-6.9-4.5-10.2-4.5-1.7 0-2.5.7-3 2.7zM779.2 830.7c-1.3.2-2.6 1.1-2.9 1.9-.3.8-1.2 1.4-2.1 1.4-2.2 0-10.2 8.6-10.2 11 0 2-.6 2.3-5 2.1-1.6-.1-4 1.2-6.5 3.4-2.2 1.9-4.3 3.5-4.7 3.5-1.8 0-.6 5 1.5 6.7 1.2 1 3 3.4 4.1 5.3 1 1.9 2.4 3.9 3 4.5.7.5 2.3 2.6 3.6 4.5 1.4 1.9 3.1 4.2 3.8 5 2.5 2.8 10.4 13.5 12.8 17.2 2.8 4.5 5.6 4.9 8 1.3.9-1.4 2-2.5 2.6-2.5 1.8 0 6.8-4.4 6.8-6 0-1.3-7.7-12-12.5-17.3-5.3-5.9-9.7-17.7-6.5-17.7.6 0 1.5-1.1 2.2-2.5 1.3-2.8 6.7-5 9.9-4 2.5.8 8.9 7.4 8.9 9.2 0 .7.9 1.7 2 2.3 1.1.6 2 1.7 2 2.5 0 .7 1 2.2 2.3 3.2 1.2 1 2.8 3 3.6 4.5 3.1 5.9 7 8.4 8.8 5.5.4-.7 2.4-2.3 4.4-3.5 2-1.2 4.2-2.9 4.9-3.7 1.7-2 .5-6.1-2.5-8.7-1.4-1.2-2.5-2.8-2.5-3.5 0-.7-.9-1.8-2-2.5s-2-1.7-2-2.2c0-1.6-11.1-14.5-15.3-17.9-3.7-2.8-4.8-3.2-11.1-3.4-3.9 0-8.1.1-9.4.4zM301 838.9c0 .5-2 1.2-4.4 1.5-4.6.7-11 5.9-12.7 10.4-2.2 5.8.1 21.2 3.1 21.2.6 0 1.5 1.1 2 2.4.5 1.4 2.1 3.2 3.5 4.2 1.4.9 2.5 2.2 2.5 2.8 0 .7 1.2 2.3 2.6 3.7 2.6 2.4 5.4 7 5.4 8.7 0 1.3-3.6 5.2-4.8 5.2-4.4 0-16.8-10.3-20.4-16.9-1.6-2.9-5.8-4.5-5.8-2.2 0 .5-2 1.9-4.4 3.1-2.4 1.1-4.7 2.7-5 3.5-.6 1.8.3 4.5 1.5 4.5.5 0 .9.7.9 1.5 0 1.9 11.1 13.7 14.7 15.5 1.5.8 3.6 2.2 4.6 3.1 3.8 3.4 18.2 5 24.8 2.7 4.4-1.5 10.2-7.3 11.7-11.7.7-1.9 1.2-5.2 1.2-7.5 0-4.4-3.2-12.6-5-12.6-.5 0-1-.5-1-1.2 0-.6-2.2-3.7-4.8-6.7-8.5-9.9-9.5-11.5-8.7-15 .6-2.9.9-3.1 5.1-3.1 2.4 0 4.4.4 4.4 1 0 .5 1.5 1.7 3.2 2.6 1.8.9 4.4 2.9 5.8 4.4 2.8 3 9 12.7 9 14.1 0 .5.5.9 1 .9 2 0 8-2.9 8-3.8 0-.6 1.1-1.3 2.5-1.6 3.8-1 3.2-4.9-1.7-12-3.7-5.5-13.1-14.5-16.1-15.5-.7-.2-1.6-1-2.2-1.7-1.4-1.9-9.1-4.4-13.1-4.4-1.9 0-3.4-.5-3.4-1 0-.6-.9-1-2-1s-2 .4-2 .9zM725.5 867c-6.9 1.9-17.5 9.8-17.5 13 0 1.7 8.1 8.9 10 8.9.8.1 2.6-1.1 3.9-2.4 3.4-3.6 7.3-3.3 9.4.7 4.7 8.8 7.3 13.4 8.5 14.6 2.1 2.3 1.3 3.6-3.9 6-2.7 1.3-5.2 2.9-5.5 3.6-.3.7.4 2.9 1.5 4.7 1.2 1.9 2.5 4.5 3.1 5.8.9 1.9 1.5 2.2 3.8 1.6 1.5-.4 2.9-1 3.2-1.5.3-.5 1.9-1.4 3.5-2 2.6-1 3.1-.8 4.7 1.2 1 1.3 2.3 3.5 3 5 1.5 3.2 2.9 3.5 6.3 1.2 1.3-.8 4.3-2.5 6.7-3.7 4.6-2.3 5.8-4.6 3.6-6.8-.8-.8-2-2.9-2.8-4.7-1.1-2.9-1.1-3.5.1-4.3.8-.5 2-.9 2.7-.9 1.6 0 1.6-6.7-.1-7.7-.7-.4-1.8-2-2.4-3.6-1.3-2.8-5.5-3.8-6.8-1.7-1.3 2.1-3.4.9-5.5-3.2-1.2-2.3-3-5.3-4.1-6.6-1-1.4-1.9-3-1.9-3.7 0-1.7-6.4-9.9-9.2-11.7-3.1-2-10.3-2.9-14.3-1.8zM372.8 883.7c-1.1 2.7-3.3 7.5-4.8 10.8-7.6 16.2-9 19.4-9 20.9 0 .9-.4 1.6-.8 1.6-.9 0-5.2 9.8-5.2 11.8 0 .6-.3 1.2-.8 1.2-.4 0-1.8 2.8-3.2 6.2-1.3 3.5-3 7.3-3.8 8.5-1.6 2.6-1 5.3 1.3 5.3.8 0 1.5.4 1.5.9 0 1.2 10.8 5.1 12.5 4.5.8-.3 1.7-1.6 2.1-2.7.4-1.2 1-2.4 1.3-2.7.4-.3 1.8-3.4 3.1-7s2.6-6.7 3-7c.3-.3 1.4-2.5 2.4-5s3.1-7.2 4.7-10.5 3.1-7.2 3.5-8.8c.3-1.5 1-2.7 1.4-2.7.5 0 1.8-2.4 2.9-5.3 1.1-2.8 3.1-7.5 4.5-10.2 3.6-7.1 3.4-8.2-2-10.5-2.5-1.1-5.2-2-6-2-.8 0-1.4-.5-1.4-1 0-.6-1.2-1-2.6-1-2.1 0-2.9.9-4.6 4.7zM687 886c0 .5-.9 1-2 1-6.1 0-15.2 6-21.7 14.5-5.4 7-5.1 23.5.4 29.3.7.7 1.3 1.9 1.3 2.6 0 3.4 11.1 10.6 16.4 10.6 1.4 0 2.8.4 3.1 1 .3.5 2.2 1 4.1 1 1.9 0 3.4-.5 3.4-1 0-.6 1.7-1 3.8-1.1 7.4-.1 12.9-3.3 20.6-11.9 4.6-5 6.3-21.1 3.1-28.7-3.5-8.4-12.7-16.2-19.2-16.3-1.3 0-2.3-.5-2.3-1 0-.6-2.5-1-5.5-1s-5.5.4-5.5 1zm11 19c3.5 3.4 5 6.8 5 11.2 0 10.9-12.4 17-19.9 9.7-3.9-3.6-5.1-6.7-5.1-12.3 0-3.6.6-4.9 3.5-7.9 3.2-3.3 4.2-3.7 8.5-3.7 4.1 0 5.4.5 8 3zM400.4 891.6c-.3 1.1-1.4 3.7-2.3 5.9-1 2.2-2.4 6.2-3.1 9-.8 2.7-1.7 5.2-2 5.5-.9.7-5 12.6-5 14.5 0 .8-.4 1.5-.9 1.5-.4 0-1.8 3.5-3.1 7.7-1.3 4.3-2.9 8.7-3.5 9.8-2.1 3.3-5.5 15.3-4.9 16.9.8 2.1 14.3 6.2 16.3 4.9.8-.5 2.6-4.3 3.9-8.4 1.3-4.1 3-8.5 3.7-9.9.7-1.4 2.1-5.2 3-8.5 1-3.3 2.1-6.5 2.5-7 .4-.6 1.7-4.2 3-8 1.2-3.9 3-8.8 4.1-11 1-2.2 2.4-6.1 3.1-8.8.6-2.6 1.6-4.7 2-4.7.4 0 .8-1.3.8-3 0-2.6-.5-3.1-4.2-4.2-2.4-.6-4.5-1.5-4.8-1.9-.3-.4-2.2-1-4.2-1.4-3.2-.6-3.9-.4-4.4 1.1zM424.7 901.1c-1.3 4.6-5.7 24-6.2 27.4-.4 2.2-1 4.9-1.5 6-1.4 3.1-4 14.8-4 17.7 0 2.6 1.6 3.8 5 3.8 1 0 3.1.7 4.6 1.5 1.6.8 4.1 1.5 5.5 1.5 2.5 0 2.7-.5 4.2-7.8 5.1-24.1 8.3-30.5 15.8-30.5 2.3 0 4.5.8 5.9 2.1 3.1 2.9 5.2 7.2 4.1 8.6-.4.6-1.9 6.6-3.2 13.3-1.2 6.8-2.7 12.3-3.1 12.3-.4 0-.8 1.6-.8 3.5 0 4.2 2 5.3 11.5 6.2 5.9.5 6 .4 7.2-2.3 2.1-4.8 6.4-26.4 7-34.3.4-6.3.1-7.9-1.9-11.7-5-9.5-16.9-15-27.6-12.6-3.6.9-4.2.7-4.7-.8-1.1-3.3-17-6.8-17.8-3.9zM638.5 902.4c-8.9 2-9 2.1-7.1 10.7.9 4.1 2 8.3 2.5 9.4 1.4 3.3 3.1 11.3 3.1 14.4 0 4-4.3 8.8-9.2 10.3-2.2.6-4.2 1.7-4.5 2.4-.2.7.2 4.3.9 8.1 1.2 6.2 1.6 6.8 4 7.1 2.9.3 13.8-5.3 13.8-7.1 0-.6.6-.2 1.4.8 1.2 1.7 1.8 1.7 7.2.7 3.2-.7 6.1-1.7 6.2-2.2.2-.6 1.3-1 2.4-1 1.9 0 2-.4 1.4-4.3-.4-2.3-1.5-7.1-2.5-10.7-1.1-3.6-2.7-10.1-3.7-14.5s-2.1-8.2-2.4-8.5c-.4-.3-1.4-4.1-2.1-8.5-1.6-9.1-1.9-9.3-11.4-7.1zM573 913.7c-1.4.3-3.7 1.6-5.2 3.1-2.4 2.2-2.8 3.4-2.8 7.8 0 4.7.3 5.5 3.5 8.3 2.7 2.3 4.5 3.1 7.5 3.1 4.7 0 10-4 10-7.5 0-1.3.5-2.7 1-3 .7-.4.7-1.1.2-1.8-.5-.7-1.2-2.4-1.6-3.9-1-4.3-6.7-7-12.6-6.1zM520.4 916.3c-.2.7-.8 6.5-1.2 12.8l-.7 11.4-11.5-.4c-6.3-.2-11.9-.7-12.4-1.2-1.4-1.3-7-1.1-8.4.3-.7.7-1.2 4.1-1.2 8.4v7.2l16 .7 16 .8v7.7c0 4.8-.4 8-1.1 8.2-.6.2-4.5.1-8.7-.3-4.3-.4-12.2-.8-17.7-1l-10-.4-.9 6.8c-.7 5.5-.6 7.1.5 8.1 1.9 1.8 52.5 5.2 54.3 3.7.8-.7 1.7-7.8 2.5-20.8.7-10.9 1.7-25.4 2.2-32.2 1.4-19.5 1.5-18.8-2.8-20-5.5-1.6-14.2-1.4-14.9.2z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const HashNodeIcon = ({ className, ...rest }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto ${className}`} width="1em" height="1em" viewBox="0 0 256 256" {...rest}>
    <path
      fill="#2962FF"
      fillRule="evenodd"
      d="M17.591 85.533c-23.455 23.455-23.455 61.479 0 84.932l67.943 67.944c23.455 23.453 61.479 23.453 84.932 0l67.944-67.944c23.453-23.455 23.453-61.48 0-84.932L170.466 17.59c-23.455-23.452-61.48-23.452-84.932 0L17.59 85.533Zm140.134 72.193c16.418-16.419 16.418-43.036 0-59.452-16.417-16.419-43.034-16.419-59.45 0-16.419 16.418-16.419 43.033 0 59.452 16.418 16.416 43.033 16.416 59.452 0h-.002Z"
    />
  </svg>
);
