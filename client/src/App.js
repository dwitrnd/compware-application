import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import Layout from "./screen/Layout";
import Home from "./screen/Home";
import Contact from "./screen/Contact";
import PageNotFound from "./screen/PageNotFound";
import Registration from "./screen/auth/Registration";
import Login from "./screen/auth/Login";
import ResetPassword from "./screen/auth/ResetPassword";
import SendPasswordResetEmail from "./screen/auth/SendPasswordResetEmail";
import Dashboard from "./screen/Dashboard";
import OurTeam from "./screen/OurTeam";
import Gallery from "./screen/Gallery";
import AdminLogin from "./screen/AdminAuth/AdminLogin";
import AdminRegister from "./screen/AdminAuth/AdminRegister";
import AdminForgotPassword from "./screen/AdminAuth/AdminForgotPassword";
import AboutUs from "./screen/AboutUs/AboutUs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f5288",
      light: "#0f5288",
      dark: "#0f5288",
      contrastText: "#ffffff",
    },
    info: {
      main: "#0f5288",
      light: "#0f5288",
      dark: "#0f5288",
      contrastText: "#ffffff",
    },
  },
});
function App() {
  //? our global state token of redux toolkit used for making protected routes
  const { token } = useSelector((state) => state.authInfo);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route
                  index
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path="home"
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path="team"
                  element={
                    <Layout>
                      <OurTeam />
                    </Layout>
                  }
                />
                <Route
                  path="gallery"
                  element={
                    <Layout>
                      <Gallery />
                    </Layout>
                  }
                />
                <Route
                  path="about"
                  element={
                    <Layout>
                      <AboutUs />
                    </Layout>
                  }
                />
                <Route
                  path="contact"
                  element={
                    <Layout>
                      <Contact />
                    </Layout>
                  }
                />
                <Route
                  path="login"
                  element={
                    !token ? (
                      <Layout>
                        <AdminLogin />
                      </Layout>
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route
                  path="register"
                  element={
                    !token ? (
                      <Layout>
                        <AdminRegister />
                      </Layout>
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route
                  path="sendpasswordresetemail"
                  element={
                    <Layout>
                      <SendPasswordResetEmail />
                    </Layout>
                  }
                />
                <Route
                  path="/api/users/reset/:id/:token"
                  element={
                    <Layout>
                      <ResetPassword />
                    </Layout>
                  }
                />
              </Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/register" element={<AdminRegister />} />
              <Route
                path="/admin/resetpassword"
                element={<AdminForgotPassword />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
