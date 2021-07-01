<template>
  <svg
    width="81"
    height="50"
    viewBox="0 0 81 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :filter="shadow && 'url(#filter0_d)'">
      <path
        d="M10 12.0001L26.25 25.5001L38 35.5002L67 12.0001"
        stroke="#FEBF3D"
        stroke-width="10"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.804688"
        y="0.115479"
        width="79.343"
        height="49.8839"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="2" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.184314 0 0 0 0 0.184314 0 0 0 0 0.184314 0 0 0 0.24 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'CollapsibleChevron',
  props: {
    shadow: {
      type: Boolean,
      require: true,
    },
  },
}
</script>
