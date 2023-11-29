import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/api/auth/userAuthApi";
import { storeTokenByValue } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../redux/features/authSlice";

const UserLogin = () => {
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
      //  ==============================================================================
      const res = await loginUser(actualData);

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
      <form id="login-form" onSubmit={handleSubmit}>
        <input required id="email" name="email" label="Email Address" />
        <input
          required
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <button type="submit">Login</button>
        <Link to="/sendpasswordresetemail">Forgot Password ?</Link>
        {error.status ? <div>{error.msg}</div> : ""}
      </form>
    </>
  );
};

export default UserLogin;
