import { styled, keyframes } from "stitches";

const squiggle = keyframes({
  to: {
    stroke: "$darkPurple",
    strokeDashoffset: "0",
  },
});

export const Path = styled("path", {
  stroke: "transparent",
  strokeDasharray: "450",
  strokeDashoffset: "450",
  animation: `${squiggle} 1.5s ease forwards`,
});
