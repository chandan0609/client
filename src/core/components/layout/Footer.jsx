import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
const Footer = () => {
return (
<Box
component="footer"
sx={{
py: 3,
mt: 'auto',
backgroundColor: (theme) => theme.palette.
mode === 'light'
          ?
theme.palette.grey[200]
: theme.palette.
grey[800]
}}
    >
<Container maxWidth="lg">
<Typography
variant="body2"
color="text.secondary"
align="center"
>
&copy; {new Date().
getFullYear()}{' '}
<Link
color="inherit"
href="https://fractal.com"
underline="hover"
>
            fractal
</Link>
{' — All Rights Reserved. '}
</Typography>
</Container>
</Box>
);
};
export default Footer;