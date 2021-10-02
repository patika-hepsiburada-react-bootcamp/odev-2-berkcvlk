import { styled } from "stitches";

export const Text = styled("span", {
  display: "block",
  fontSize: "$3",
  fontWeight: "500",
  color: "$gray500",
  marginY: "12px",

  variants: {
    size: {
      small: {
        fontSize: "$1",
        color: "$gray600",
      },
    },
    color: {
      orange: {
        color: "$orange",
      },
      gray600: {
        color: "$gray600",
      },
    },
    behaviour: {
      inline: {
        display: "inline-block",
        marginY: "0",
        marginLeft: "8px",
      },
    },
  },
});
