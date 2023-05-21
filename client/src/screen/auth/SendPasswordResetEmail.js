import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { useSendPasswordResetEmailMutation } from "../../redux/api/auth/userAuthApi";
const SendPasswordResetEmail = () => {
  const [sendPasswordResetEmail, { isLoading, isError, isSuccess }] = useSendPasswordResetEmailMutation();
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
      <h1>Reset Password</h1>
      <form id='password-reset-email-form' onSubmit={handleSubmit}>
        <input required id='email' name='email' label='Email Address' />
        <button type='submit'>Send</button>
        {error.status ? <div>{error.msg}</div> : ""}
      </form>
    </>
  );
};

export default SendPasswordResetEmail;
