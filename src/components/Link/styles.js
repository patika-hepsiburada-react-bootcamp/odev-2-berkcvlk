import { Link } from "react-router-dom";
import { styled } from "stitches";

export const StyledLink = styled(Link, {
  fontSize: "$",
  fontWeight: "500",
  color: "$gray500",
  textDecoration: "underline",

  "&:hover": {
    color: "$orange",
  },

  variants: {
    size: {
      large: {
        fontSize: "$4",
        fontWeight: "500",
        textTransform: "uppercase",
        color: "$darkPurple",
      },
    },
  },

  transition: "all .24s",
});
