import { Link } from "react-router-dom";
import { styled } from "stitches";

export const StyledLink = styled(Link, {
  fontSize: "$3",
  fontWeight: "500",
  color: "$gray500",
  textDecoration: "underline",

  "&:hover": {
    color: "$orange",
  },

  variants: {
    size: {
      large: {
        fontSize: "$5",
        fontWeight: "500",
        textTransform: "uppercase",
        color: "$darkPurple",
      },
    },
  },

  transition: "all .24s",
});
