import React from "react";
import { TextField } from "@mui/material";

const CommonTextField = ({
    label,
    value,
    onChange,
    variant = "outlined",
    size = "medium",
    fullWidth = false,
    ...rest
}) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            sx={{
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                },
            }}
            {...rest} 
        />
    );
};

export default CommonTextField;