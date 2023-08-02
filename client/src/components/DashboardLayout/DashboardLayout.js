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
            <li class='sidebar-list-item active'>
              <a href='#'>
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
                  class="feather feather-shopping-bag"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg> */}
                {/* <span>Products</span> */}
              </a>
            </li>
            <li class='sidebar-list-item'>
              <a href='#'>
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
                  class="feather feather-pie-chart"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg> */}
                <span>Statistics</span>
              </a>
            </li>
            <li class='sidebar-list-item'>
              <a href='#'>
                {/* <svg fill='#ffffff' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-inbox'>
                  <polyline points='22 12 16 12 14 15 10 15 8 12 2 12' />
                  <path d='M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
                </svg> */}
                <span>Inbox</span>
              </a>
            </li>
            <li class='sidebar-list-item'>
              <a href='#'>
                {/* <svg fill='#ffffff' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-bell'>
                  <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' />
                  <path d='M13.73 21a2 2 0 0 1-3.46 0' />
                </svg> */}
                <span>Notifications</span>
              </a>
            </li>
          </ul>
        </div>
        <div class='app-content'>
          <div class='app-content-header'>
            <h1 class='app-content-headerText'>Products</h1>
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
