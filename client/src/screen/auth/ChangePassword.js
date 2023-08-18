import { Box, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useChangeUserPasswordMutation } from "../../redux/api/auth/userAuthApi";
import { getTokenByValue } from "../../services/LocalStorageService";
import { useSelector } from "react-redux";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f7f7f7",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  alert: {
    marginTop: "10px",
  },
};
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
      <div style={styles.container}>
        <h1>Change Password</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input required name='password' label='New Password' type='password' id='password' style={styles.input} />
          <input required name='password_confirmation' label='Confirm New Password' type='password' id='password_confirmation' style={styles.input} />
          <button type='submit' style={styles.button}>
            Update
          </button>
          {error.status ? (
            <div style={styles.alert}>
              <Alert severity={error.type}>{error.msg}</Alert>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
