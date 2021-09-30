import { Link } from "react-router-dom";
import { styled } from "stitches";

export const StyledLink = styled(Link, {
  fontSize: "$",
  fontWeight: "500",
  color: "$gray500",
  textDecoration: "underline",

  variants: {
    size: {
      large: {
        fontFamily: "$mono",
        fontSize: "$4",
        fontWeight: "600",
        textTransform: "uppercase",
        color: "$darkPurple",
      },
    },
  },
});
