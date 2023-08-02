import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../redux/api/auth/userAuthApi";

const ResetPassword = () => {
  const { id, token } = useParams();
  console.log(id, token);
  const [resetPassword, { isError, isSuccess, isLoading }] = useResetPasswordMutation();

  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        console.log(id, token);

        const res = await resetPassword({ actualData, id, token });
        console.log(res);
        if (res.data) {
          if (res.data.status === "success") {
            document.getElementById("password-reset-form").reset();
            setError({
              status: true,
              msg: "Password Reset Successfully. Redirecting to Login Page...",
              type: "success",
            });
          }
        }
        if (res.error) {
          setError({
            status: true,
            msg: res.error.data.message,
            type: "error",
          });
        }
        setTimeout(() => {
          navigate("/login");
        }, 3000);
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
      <h1>Reset Password</h1>
      <form id='password-reset-form' onSubmit={handleSubmit}>
        <input required id='password' name='password' placeholder='new password' label='New Password' type='password' />
        <input required id='password_confirmation' placeholder='confirm new password' name='password_confirmation' label='Confirm New Password' type='password' />
        <button type='submit'>Save</button>
        {error.status ? <div severity={error.type}>{error.msg}</div> : ""}
      </form>
    </>
  );
};

export default ResetPassword;
