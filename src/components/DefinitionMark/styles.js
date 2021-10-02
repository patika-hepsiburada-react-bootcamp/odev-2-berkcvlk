import { styled, keyframes } from "stitches";

export const DefinitionMark = styled("div", {
  position: "relative",
  dFlex: "center center",
  width: "18px",
  height: "18px",
  marginLeft: "6px",
  borderRadius: "50%",
  border: "1px dashed $orange",
  cursor: "pointer",
  userSelect: "none",

  "&::after": {
    display: "inline-block",
    position: "absolute",
    height: "18px",
    margin: 0,
    color: "$orange",
    content: "?",
  },
});

const slideInLeft = keyframes({
  from: {
    opacity: "0.4",
    transform: "translateX(-12px)",
  },
  to: {
    opacity: "1",
    transform: "translateX(0)",
  },
});

export const DefinitionMenu = styled("div", {
  position: "absolute",
  top: "-12px",
  left: "calc(100% + 24px)",
  width: "220px",
  padding: "12px",
  borderRadius: "6px",
  backgroundColor: "#fff",
  boxShadow: "-20px 5px 20px rgba(0, 0, 0, 0.01)",
  animation: `${slideInLeft} .4s ease`,

  "&::before": {
    content: "",
    borderStyle: "solid",
    borderWidth: "10px 15px 10px 0",
    borderColor: "transparent #fff transparent transparent",
    position: "absolute",
    left: "-15px",
  },
});

export const Title = styled("h4", {
  fontSize: "$2",
  fontWeight: "600",
  color: "$orange",
  margin: "0 0 6px 0",
});

export const Definition = styled("p", {
  fontSize: "$2",
  fontWeight: "400",
  margin: "0",
  color: "$darkPurple",
});

export const Phonetic = styled("p", {
  fontFamily: "$mono",
  fontSize: "$2",
  fontWeight: "400",
  margin: "16px 0 0 0",
});
