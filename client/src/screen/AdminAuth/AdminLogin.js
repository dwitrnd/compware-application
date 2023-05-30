import { Button, IconButton, InputAdornment } from "@mui/material";
import { Box, TextField } from "@material-ui/core";
import AvatarImage from "../../assets/images/avatar.png";
import EmailIcon from "@mui/icons-material/Email";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/api/auth/userAuthApi";
import { storeTokenByValue } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../redux/features/authSlice";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();

  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();
  //? local  api error state
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);
      //  ==============================================================================
      const res = await loginUser(actualData);
      console.log(res);
      if (res.data) {
        if (res.data.status === "success") {
          //! TODO: TOKEN STORE garnu xa
          storeTokenByValue(res.data.token);
          dispatch(
            setUserToken({
              token: res.data.token,
            })
          );

          navigate("/");
        }
      }
      if (res.error) {
        setError({
          status: true,
          msg: res.error.data.message,
          type: "error",
        });
      }
      //  ==============================================================================
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          height: "100vh",
          alignItems: "center",
          "& .MuiTextField-root": { width: "20rem" },
        }}
      >
        <div>
          <Avatar
            alt="Deerwalk Logo"
            src={AvatarImage}
            sx={{ width: 76, height: 76 }}
          />
        </div>
        <Typography variant="h4" gutterBottom color="primary">
          Login
        </Typography>
        <div>
          <TextField
            required
            id="standard-basic"
            name="email"
            label="Email"
            variant="filled"
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
            id="standard-basic margin-dense"
            name="password"
            label="Password"
            variant="filled"
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
          onSubmit={handleSubmit}
        >
          Login
        </Button>
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/admin/resetpassword" color="primary">
            Forgot Password?
          </Link>
          <Link to="/admin/register">Register</Link>
        </div>
        {error.status ? <div>{error.msg}</div> : ""}
      </Box>
    </>
  );
};

export default AdminLogin;
