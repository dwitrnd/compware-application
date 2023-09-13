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

const styles = {
  appContentHeader: {
    borderRadius: ".45rem",
    backgroundColor: "#0f5288",
    padding: "0.45rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appContentHeaderText: {
    color: "white",
    fontSize: "1rem",
    margin: 0,
  },
  userName: {
    color: "white",
    fontSize: "1rem",
    margin: "1rem",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
  },
  logoutButton: {
    backgroundColor: "white",
    color: "#0f5288",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

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
                <span>Enrolled Students</span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-testimonial'>
                <span>Testimonial</span>
              </Link>
            </li>

            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-team'>
                <span>Team</span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-trainer'>
                <span>Trainer</span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-course'>
                <span>Courses</span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-vacancy'>
                <span> Vacancy </span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-gallery'>
                <span> Gallery </span>
              </Link>
            </li>

            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-blog'>
                <span> Blog </span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-sessions'>
                <span> Sessions </span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-client'>
                <span> Clients </span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-partner'>
                <span> Partners</span>
              </Link>
            </li>
            <li class='sidebar-list-item'>
              <Link to='/dashboard/list-students'>
                <span> Students </span>
              </Link>
            </li>
          </ul>
        </div>
        <div class='app-content'>
          <div style={styles.appContentHeader}>
            <h1 style={styles.appContentHeaderText}>Dashboard</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h6 style={styles.userName}>{userData ? userData.name : ""}</h6>
              <button onClick={handleLogout} style={styles.logoutButton}>
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

export default Dashboard;
