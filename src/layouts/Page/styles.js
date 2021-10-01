import { styled, keyframes } from "stitches";

const slideInUp = keyframes({
  from: {
    opacity: "0.4",
    transform: "translateY(16px)",
  },
  to: {
    opacity: "1",
    transform: "translateY(0)",
  },
});

export const Container = styled("div", {
  width: "100%",
  height: "100%",
  dFlex: "initial space-between",
  flexDirection: "column",
  paddingTop: "32px",
  animation: `${slideInUp} 0.3s ease`,
});

export const Header = styled("div", {
  width: "100%",
});
