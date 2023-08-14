import { useNavigate } from "react-router-dom";
import ChangePassword from "screen/auth/ChangePassword";
import { removeToken } from "../../services/LocalStorageService";
import { useGetLoggedUserQuery } from "../../redux/api/auth/userAuthApi";
import { getTokenByValue } from "../../services/LocalStorageService";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo, unsetUserInfo } from "../../redux/features/userSlice";
import { unsetUserToken } from "../../redux/features/authSlice";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Dashboard = ({ children }) => {
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
    <main id='compware-dashboard-layout'>
      <div class='app-container'>
        <div class='sidebar'>
          <div class='sidebar-header'>
            <div class='app-icon'>
              <h2 style={{ color: "white" }}>Dashboard</h2>
            </div>
          </div>
          <ul class='sidebar-list'>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-enroll-students'>
                {/* <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg> */}
                <span>Enrolled Students</span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-testimonial'>
                {/* <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg> */}
                <span>Testimonial</span>
              </Link>
            </li>

            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-team'>
                {/* <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg> */}
                <span>Team</span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-course'>
                {/* <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg> */}
                <span>Courses</span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/update-course'>
                {/* <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg> */}
                <span> Update Courses</span>
              </Link>
            </li>
          </ul>
        </div>
        <div class='app-content'>
          <div class='app-content-header'>
            <h1 class='app-content-headerText'>Dashboard</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h6 className='roboto_400' style={{ color: "white", fontSize: "1.6rem", margin: "1rem" }}>
                {userData ? userData.name : ""}
              </h6>
              <button onClick={handleLogout} class='app-content-headerButton'>
                Logout
              </button>
            </div>
          </div>

          {/* //! Body Starts Here */}
          <main>{children}</main>
        </div>
      </div>
    </main>
  );
};

// <h6>Email: {userData ? userData.email : ""}</h6>
// <h6>Name: {userData ? userData.name : ""}</h6>
// <button onClick={handleLogout}> Logout</button>
// <ChangePassword />

export default Dashboard;
