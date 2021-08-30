import React from 'react';

function ScrollUpBtn({ className }) {
  return (
    <svg
      className={className}
      width="126"
      height="126"
      viewBox="0 0 126 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ddd)">
        <circle cx="63" cy="47" r="32" fill="white" />
      </g>
      <path
        d="M74.3549 51.5714L63.0001 40.3968L51.6453 51.5714"
        stroke="#1889E9"
        strokWidth="4"
        strokLinecap="round"
        strokLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_ddd"
          x="0"
          y="0"
          width="126"
          height="126"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.3037" />
          <feGaussianBlur stdDeviation="1.26296" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.101961 0 0 0 0 0.156863 0 0 0 0 0.278431 0 0 0 0.0392593 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6.16296" />
          <feGaussianBlur stdDeviation="4.93704" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.101961 0 0 0 0 0.156863 0 0 0 0 0.278431 0 0 0 0.0607407 0"
          />
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="15.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.101961 0 0 0 0 0.156863 0 0 0 0 0.278431 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default ScrollUpBtn;
