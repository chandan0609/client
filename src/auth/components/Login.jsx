import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../redux/action/auth.action";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Container, Box, Typography, Stack, TextField, Button, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CommonTextField from "../../core/components/common/TextField";
import CommonButton from "../../core/components/common/Button";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(formData))
    .then(() => {
      navigate("/dashboard");
    })
  };
const { name, email, password } = formData;
return (
    <>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" color="primary" fontWeight={700} gutterBottom>
            Sign In
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <PersonIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Sign Into Your Account
          </Typography>
        </Box>
{/* Form */}         <Box component="form" onSubmit={onSubmit}>
          <Stack spacing={3}>
            <CommonTextField
              label="Name"
              name="name"
              value={name}
              onChange={onChange}
              fullWidth
              required
            />
            <CommonTextField
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={onChange}
              fullWidth
              required
            />
            <CommonTextField
              label="Password"
              name="password"
              type="password"
              inputProps={{ minLength: 6 }}
              value={password}
              onChange={onChange}
              fullWidth
              required
            />
            <CommonButton
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ py: 1.2, textTransform: "none", fontWeight: 600 }}
              label="Login"
            >
            </CommonButton>
          </Stack>
        </Box>
{/* Footer */}         <Typography variant="body1" align="center" sx={{ mt: 3 }}>
          Don't have an account?{" "}
          <Link
            component={RouterLink}
            to="/auth/register"
            underline="hover"
            color="primary"
            fontWeight={600}
          >
            Sign Up
          </Link>
        </Typography>
      </Container>
    </>
  );
};
export default Login;