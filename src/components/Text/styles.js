import { styled } from "stitches";

export const Text = styled("p", {
  fontSize: "$3",
  fontWeight: "500",
  color: "$gray500",

  variants: {
    size: {
      small: {
        fontSize: "$1",
        color: "$gray600",
      },
    },
  },
});
