import { useNavigate } from "react-router-dom";
import ChangePassword from "../auth/ChangePassword";
import { removeToken } from "../../services/LocalStorageService";
import { useGetLoggedUserQuery } from "../../redux/api/auth/userAuthApi";
import { getTokenByValue } from "../../services/LocalStorageService";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo, unsetUserInfo } from "../../redux/features/userSlice";
import { unsetUserToken } from "../../redux/features/authSlice";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  const token = getTokenByValue();
  const { isLoading, isError, isSuccess, data } = useGetLoggedUserQuery({
    token,
  });

  const [userData, setUserData] = useState(null);

  //?use effect for when data,isSuccess of RTK is true
  useEffect(() => {
    if (data && isSuccess) {
      //? set user data to local state
      // setUserData({
      //   email: data.data.user.email,
      //   name: data.data.user.name,
      // });
      //? set user data to global react-toolkit state
      dispatch(
        setUserInfo({
          email: data.data.user.email,
          name: data.data.user.name,
        })
      );
    }
  }, [data, isSuccess]);

  //? use effect for when global data is loaded
  useEffect(() => {
    if (userInfo.email !== null && userInfo.name !== null) {
      setUserData({
        email: userInfo.email,
        name: userInfo.name,
      });
    }
  }, [userInfo]);
  console.log(data);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    dispatch(
      unsetUserToken({
        token: null,
      })
    );
    dispatch(
      unsetUserInfo({
        email: null,
        name: null,
      })
    );
    removeToken();
    navigate("/login");
  };
  return (
    <>
      {/* <h6>Email: {userData ? userData.email : ""}</h6>
      <h6>Name: {userData ? userData.name : ""}</h6> */}
      {/* <button onClick={handleLogout}> Logout</button> */}
      <ChangePassword />
    </>
  );
};

export default Dashboard;
