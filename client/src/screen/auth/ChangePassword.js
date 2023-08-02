import { Box, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useChangeUserPasswordMutation } from "../../redux/api/auth/userAuthApi";
import { getTokenByValue } from "../../services/LocalStorageService";
import { useSelector } from "react-redux";
const ChangePassword = () => {
  const userInfo = useSelector((state) => state.userInfo);

  console.log("global state");
  console.log(userInfo);
  const [changeUserPassword, { isSuccess, isError, isLoading }] = useChangeUserPasswordMutation();

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      new_password: data.get("password"),
      new_password_confirmation: data.get("password_confirmation"),
    };
    console.log(actualData);
    if (actualData.new_password && actualData.new_password_confirmation) {
      if (actualData.new_password === actualData.new_password_confirmation) {
        console.log(actualData);
        const token = getTokenByValue();
        const res = await changeUserPassword({ token, actualData });
        console.log(res);
        if (res.error) {
          setError({
            status: true,
            msg: res.error.data.message,
            type: "error",
          });
        }
        if (res.data) {
          if (res.data.status === "success") {
            document.getElementById("password-change-form").reset();
            setError({
              status: true,
              msg: res.data.message,
              type: "success",
            });
          }
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
  return (
    <>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit} id='password-change-form'>
        <input required name='password' label='New Password' type='password' id='password' />
        <br />
        <input required name='password_confirmation' label='Confirm New Password' type='password' id='password_confirmation' />
        <br />
        <button type='submit'>Update</button>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </form>
    </>
  );
};

export default ChangePassword;
