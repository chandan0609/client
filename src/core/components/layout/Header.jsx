import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
AppBar,
Toolbar,
Typography,
Button,
IconButton,
Stack,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../auth/redux/reducers/authSlice";
const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
// Get authentication state from Redux store
const { isAuthenticated } = useSelector(state => state.auth);
const handleLogout = () => {
dispatch(logout());
navigate('/'); // Redirect to home page after logout
};
return (
<AppBar position="static" sx={{ bgcolor: "grey.900" }}>
<Toolbar>
{/* Logo / Title */} <IconButton
component={RouterLink}
to="/"
edge="start"
color="inherit"
sx={{ mr: 1 }}
        >
<CodeIcon />
</IconButton>
        <Typography
variant="h6"
component={RouterLink}
to="/"
sx={{
color: "inherit",
textDecoration: "none",
flexGrow: 1,
fontWeight: 600,
          }}
>
DevConnector
</Typography>
{/* Navigation Links */} <Stack direction="row" spacing={2}>
<Button
color="inherit"
component={RouterLink}
to="/profile/profile"
sx={{ textTransform: "none" }}
          >
Developers
</Button>
{! isAuthenticated ?
(
// Show these links only when user is NOT authenticated
<>
              <Button
color="inherit"
component={RouterLink}
to="/auth/register"
sx={{ textTransform: "none" }}
>
                Register
</Button>
<Button
color="inherit"
component={RouterLink}
to="/auth/login"
sx={{ textTransform: "none" }}
              >
Login
</Button>
</>
) : (
// Show these links only when user IS authenticated
            <>
<Button
color="inherit"
component={RouterLink}
to="/posts/createpost"
sx={{textTransform:"none"}}
>
                Posts
</Button>
<Button
color="inherit"
onClick={handleLogout}
sx={{textTransform:"none"}}
>
Logout
</Button>
            </>
)}
</Stack>
</Toolbar>
</AppBar>
);
};
export default Header;