import { styled } from "stitches";

export const Stage = styled("div", {
  widht: "100%",
  height: "100vh",
  backgroundColor: "$bg100",
  color: "$darkPurple",
});

export const Upper = styled("div", {
  dFlex: "initial space-between",
  flexDirection: "column",
  maxWidth: "1140px",
  paddingX: "134px",
  height: "70%",
  marginX: "auto",
});

export const Lower = styled("div", {
  dFlex: "center center",
  width: "100%",
  height: "30%",
  backgroundColor: "$cream",
  backgroundImage: "url('assets/background-shadow.svg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  borderTop: "2px solid $darkPurple",
});

export const MadeWithLove = styled("span", {
  fontSize: "$2",
  fontWeight: "500",
  marginTop: "5%",
  color: "$gray600",

  "&:hover a": {
    color: "$blue",
  },
});

export const Main = styled("main", {
  dFlex: "flex-end space-between",
});

export const PageContainer = styled("div", {
  flex: "1 1 0",
  paddingTop: "32px",
  height: "100%",
});

export const GallowStage = styled("div", {
  width: "max-content",
  position: "relative",

  "&::after": {
    content: "",
    display: "block",
    position: "absolute",
    width: "100%",
    height: "16px",
    border: "2px solid $darkPurple",
    borderBottom: "none",
    bottom: "-2px",
    borderRadius: "4px 4px 0 0",
    backgroundColor: "$creamDarker",
  },
});
