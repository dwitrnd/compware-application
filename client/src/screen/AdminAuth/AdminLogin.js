import { Button, IconButton, InputAdornment } from "@mui/material";
import { Box, TextField } from "@material-ui/core";
import EmailIcon from "@mui/icons-material/Email";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/api/auth/userAuthApi";
import { storeTokenByValue } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../redux/features/authSlice";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();

  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      const res = await loginUser({
        email,
        password,
      });
      console.log(res);
      if (res.data) {
        if (res.data.status === "success") {
          storeTokenByValue(res.data.token);
          dispatch(
            setUserToken({
              token: res.data.token,
            })
          );
          window.href = "/dashboard";
        }
      }
    }
  };
  return (
    <>
      <Box
        component='form'
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          margin: "0 auto 0",
          marginTop: "3rem",
          padding: "25px 25px 25px 25px",
          borderRadius: ".25rem",
          alignItems: "center",
          width: "fit-content",
          boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
          "& .MuiTextField-root": { width: "20rem" },
        }}
      >
        <Typography variant='h4' gutterBottom color='primary'>
          Login
        </Typography>

        <div>
          <TextField
            required
            id='standard-basic'
            name='email'
            label='Email'
            variant='outlined'
            onChange={(e) => setEmail(e.target.value)}
            type='email'
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
            id='standard-basic margin-dense'
            name='password'
            label='Password'
            variant='outlined'
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <IconButton onClick={handleTogglePassword} edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          variant='contained'
          sx={{ width: "20rem", marginTop: "1rem" }}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Login
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <Link to='/resetpassword' color='primary'>
              Forgot Password?
            </Link>
          </div>
          
          
        </Box>
      </Box>
    </>
  );
};

export default AdminLogin;
