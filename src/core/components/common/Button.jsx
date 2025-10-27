import React from "react"
import { Button } from "@mui/material";
const CommonButton = ({
    label,
    onClick,
    color="primary",
    variant="contained",
    ...rest
}) => {
    return <Button
    variant = {variant}
    color = {color}
    onClick={onClick}
    sx={{
        borderRadius:2,
        textTransform:"none",
        fontWeight:600,
        px:3,
        py:1,
    }}
    {...rest}
    >
        {label}</Button>
};
export default CommonButton;