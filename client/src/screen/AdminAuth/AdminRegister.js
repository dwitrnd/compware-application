import React from "react";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  Button,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeTokenByValue } from "../../services/LocalStorageService";
import { useRegisterUserMutation } from "../../redux/api/auth/userAuthApi";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const AdminRegister = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const navigate = useNavigate();

  //! RTK Generated Register Hook , "registerUser" is name of endpoint in userAuthApi.js
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.password_confirmation &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        // =================================================================================
        //! User Register Using RTK Query Method
        const res = await registerUser(actualData);
        console.log(res);
        if (res.data) {
          if (res.data.status === "success") {
            //! TODO: TOKEN STORE garnu xa
            storeTokenByValue(res.data.token);

            navigate("/login");
          }
        }
        if (res.error) {
          setError({
            status: true,
            msg: res.error.data.message,
            type: "error",
          });
          // =================================================================================
        }
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "fit-content",
          gap: "1rem",
          margin: "0 auto",
          marginTop: "6rem",
          marginBottom: "6rem",
          padding: "25px 25px 25px 25px",
          borderRadius: ".25rem",
          alignItems: "center",
          boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
          "& .MuiTextField-root": { width: "20rem" },
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <Typography variant="h4" gutterBottom color="primary">
            Register
          </Typography>
        </div>
        <div>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            type="text"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <PersonOutlineIcon />
                </IconButton>
              ),
            }}
          />
        </div>
        <div>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <EmailIcon />
                </IconButton>
              ),
            }}
          />
        </div>
        <div>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <Button
          variant="contained"
          type="submit"
          sx={{ width: "20rem", marginTop: "1rem" }}
        >
          Register
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <Typography variant="body">Already Have an account?</Typography>
          </div>
          <div>
            <Link to="/login" color="primary">
              Login
            </Link>
          </div>
        </Box>
        {error.status ? <div>{error.msg}</div> : ""}
      </Box>
    </>
  );
};

export default AdminRegister;
