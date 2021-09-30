import { styled } from "stitches";

export const Key = styled("button", {
  dFlex: "center center",
  fontFamily: "Rubik, sans-serif",
  fontSize: "$2",
  fontWeight: "600",
  width: "40px",
  height: "40px",
  backgroundColor: "$bg200",
  color: "$darkPurple",
  textTransform: "uppercase",
  borderRadius: "6px",

  "&:hover": {
    boxShadow: "0 3px 0 0 #FCBF49",
    backgroundColor: "$cream",
    color: "$orange",
    transform: "translateY(-3px)",
  },

  "&:active": {
    boxShadow: "0 0 0 0 #FCBF49",
    transform: "translateY(3px)",
  },

  "&:disabled": {
    backgroundColor: "$bg300",
    color: "$gray600",
    userSelect: "none",
    pointerEvents: "none",
  },

  transition: "transform 0.3s, box-shadow 0.2s",
});
