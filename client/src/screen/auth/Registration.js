import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeTokenByValue } from "../../services/LocalStorageService";

//! Import RTK Generated Register Hook
import { useRegisterUserMutation } from "../../redux/api/auth/userAuthApi";

const Registration = () => {
  //? alert component state
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
        // =================================================================================
        //! User Register Using RTK Query Method
        const res = await registerUser(actualData);

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
      <form id="registration-form" onSubmit={handleSubmit}>
        <input required placeholder="name" id="name" name="name" label="Name" />
        <br />{" "}
        <input
          placeholder="email"
          required
          id="email"
          name="email"
          label="Email Address"
        />
        <br />{" "}
        <input
          placeholder="password"
          required
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <br />{" "}
        <input
          placeholder="password_confirmation"
          required
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
        />
        <br />
        <label htmlFor="tc">
          <input value={true} required id="tc" name="tc" type="checkbox" />I
          agree to the terms and conditions
        </label>
        <br />
        <button type="submit">Join</button>
        {error.status ? <div>{error.msg}</div> : ""}
      </form>
    </>
  );
};

export default Registration;
