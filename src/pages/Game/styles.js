import { styled } from "stitches";

export const Word = styled("span", {
  fontFamily: "$mono",
  fontSize: "$4",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "5px",
});

export const Chip = styled("div", {
  dFlex: "center center",
  maxWidth: "max-content",
  backgroundColor: "$bg200",
  borderRadius: "6px",
  padding: "6px 12px",
  marginTop: "14px",
});

export const Text = styled("span", {
  fontSize: "$1",
  fontWeight: "500",
  color: "#979797",

  "& + &": {
    marginLeft: "6px",
  },

  variants: {
    color: {
      orange: {
        fontSize: "$3",
        fontWeight: "600",
        color: "$orange",
      },
    },
  },
});
