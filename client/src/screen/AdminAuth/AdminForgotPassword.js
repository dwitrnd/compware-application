import { React, useState } from "react";
import { Box, TextField, Typography, Button, IconButton } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useSendPasswordResetEmailMutation } from "../../redux/api/auth/userAuthApi";

const AdminForgotPassword = () => {
  const bodyText = "No Worries, we'll send you reset instructions";
  const [sendPasswordResetEmail, { isLoading, isError, isSuccess }] =
    useSendPasswordResetEmailMutation();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      console.log(actualData);
      const res = await sendPasswordResetEmail(actualData);
      console.log(res);
      if (res.data.status === "success") {
        document.getElementById("password-reset-email-form").reset();
        setError({
          status: true,
          msg: "Password Reset Email Sent. Check Your Email !!",
          type: "success",
        });
      }
      if (res.error.data.status === "failed") {
        setError({
          status: true,
          msg: res.error.data.message,
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "Please Provide Valid Email",
        type: "error",
      });
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
          margin: "0 auto 0",
          // height: "100vh",
          marginTop: "6rem",
          marginBottom: "6rem",
          padding: "25px 25px 25px 25px",
          borderRadius: ".25rem",
          alignItems: "center",
          width: "fit-content",
          boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
          "& .MuiTextField-root": { width: "20rem" },
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" color="primary">
          Reset Password
        </Typography>
        <Typography variant="h6" gutterBottom>
          Email
        </Typography>
        <Typography variant="body" gutterBottom>
          {bodyText}
        </Typography>
        <TextField
          required
          id="forgot-password-email"
          placeholder="Enter Your Email"
          name="email"
          variant="standard"
          sx={{ marginTop: "1rem" }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ width: "20rem", marginTop: "1rem" }}
        >
          Reset Password
        </Button>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Link to="/login">
            <Button
              sx={{
                fontSize: "1.1rem",
                mt: 3,
              }}
              variant="outlined"
              startIcon={<ArrowBack />}
            >
              Back to Login
            </Button>
          </Link>
        </Box>

        {/* <IconButton>
          <Link to="/login">
            <ArrowBackIcon />
            <Typography
              variant="body"
              sx={{ color: "black", fontSize: "18px" }}
            >
              {" "}
              Back To Login
            </Typography>
          </Link>
        </IconButton> */}
        {error.status ? <div>{error.msg}</div> : ""}
      </Box>
    </>
  );
};

export default AdminForgotPassword;
