import { Button, styled } from "@mui/material";

export const GoogleButton = styled(Button)({
  backgroundColor: "#1976d2",
  color: "white",
  borderColor: "#000",

  "&:hover": {
    color: "white",
  },

  "&:focus": {
    color: "white",
  },

  "&:active": {
    backgroundColor: "#1976d2",
    color: "white",
  },
});

export const GithubButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#111827",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  borderColor: "grey",

  "&:hover": {
    backgroundColor: "rgb(249,250,251)",
    borderColor: "grey",
  },
});
