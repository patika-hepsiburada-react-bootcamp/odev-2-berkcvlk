import { styled, keyframes } from "stitches";

const squiggle = keyframes({
  to: {
    strokeDashoffset: "0",
  },
});

export const Path = styled("path", {
  strokeDasharray: "450",
  strokeDashoffset: "450",
  animation: `${squiggle} 2s ease forwards`,
});
