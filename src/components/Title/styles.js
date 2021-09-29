import { styled } from "stitches";

export const Title = styled("h1", {
  width: "100%",
  fontSize: "$4",
  fontWeight: "600",
  marginTop: "0",
  marginBottom: "12px",
  position: "relative",
  textTransform: "uppercase",

  "&::before": {
    position: "absolute",
    content: "",
    display: "inline-block",
    whiteSpace: "nowrap",
    transform: "translate(-25%, -20%)",
    zIndex: "0",
    opacity: "0.05",
    fontSize: "$5",
  },

  variants: {
    color: {
      red: {
        color: "$red",
        // Hard coded way to solve before pseudo element
        // content load. This will be remove later.
        "&:before": {
          content: "Game Over",
        },
      },
      blue: {
        color: "$blue",
        "&:before": {
          content: "Knock Knock",
        },
      },
      gold: {
        color: "$gold",
        "&:before": {
          content: "Congratulations",
        },
      },
    },
  },
});