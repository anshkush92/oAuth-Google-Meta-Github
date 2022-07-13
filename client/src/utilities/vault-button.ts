import { Button, styled } from "@mui/material";

export const VaultButton = styled(Button)({
    backgroundColor: "#FFE7E7",
    color: "#D33A2C",
    border: "1px solid #FEE0E0",

    "&:focus": {
        outline: "0",
    },

    "&:active, &:hover": {
        outline: "0",
        backgroundColor: "#D33A2C",
        boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset",
        color: "#FFFFFF",
    },
})

