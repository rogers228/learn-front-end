import watchMedia from "svelte-media";

const mediaqueries = {
  small: "(max-width: 649px)",
  large: "(min-width: 650px) and (max-width: 1149px)",
  limit: "(min-width: 1150px)",
  short: "(max-height: 399px)",
  landscape: "(orientation: landscape) and (max-height: 499px)",
  tiny: "(orientation: portrait) and (max-height: 599px)",
  dark: "(prefers-color-scheme: dark)",
  noanimations: "(prefers-reduced-motion: reduce)"
};

export const media = watchMedia(mediaqueries);

// return a object
// {
//   small: false
//   large: true
//   short: true
//   landscape: true
//   tiny: false
//   dark: true
//   noanimations : false,
//   classNames: 'media-large media-short media-landscape media-dark'
// }