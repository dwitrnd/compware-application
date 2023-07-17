import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import Layout from "./screen/Layout";
import Home from "./screen/Home";
import PageNotFound from "./screen/PageNotFound";
import ContactUs from "./screen/Contact/Contact";
import ResetPassword from "./screen/auth/ResetPassword";
import SendPasswordResetEmail from "./screen/auth/SendPasswordResetEmail";
import Dashboard from "./screen/Dashboard";
import OurTeam from "./screen/OurTeam";
import Gallery from "./screen/Gallery";
import AdminLogin from "./screen/AdminAuth/AdminLogin";
import AdminRegister from "./screen/AdminAuth/AdminRegister";
import AdminForgotPassword from "./screen/AdminAuth/AdminForgotPassword";
import Courses from "./screen/Courses/Courses";
import RequestCertificate from "./screen/RequestCertificate/RequestCertificate";
import VerifyCertificate from "./screen/VerifyCertificate/VerifyCertificate";
import Blog from "./screen/Blog/Blog";
import TermsAndConditions from "./screen/TermsAndConditions/TermsAndConditions";
import BlogPage from "screen/Blog/BlogPage";
import CourseDetailPage from "screen/CourseDetailPage/CourseDetailPage";

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
                  path="our-team"
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
                  path="contact-us"
                  element={
                    <Layout>
                      <ContactUs />
                    </Layout>
                  }
                />
                <Route
                  path="courses"
                  element={
                    <Layout>
                      <Courses />
                    </Layout>
                  }
                />
                <Route
                  path="request-certificate"
                  element={
                    <Layout>
                      <RequestCertificate />
                    </Layout>
                  }
                />
                <Route
                  path="blog"
                  element={
                    <Layout>
                      <Blog />
                    </Layout>
                  }
                />
                <Route
                  path="blog-page"
                  element={
                    <Layout>
                      <BlogPage />
                    </Layout>
                  }
                />
                <Route
                  path="verify-certificate"
                  element={
                    <Layout>
                      <VerifyCertificate />
                    </Layout>
                  }
                />
                <Route
                  path="terms-and-condition"
                  element={
                    <Layout>
                      <TermsAndConditions />
                    </Layout>
                  }
                />
                <Route
                  path="course-detail"
                  element={
                    <Layout>
                      <CourseDetailPage />
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
              <Route
                path="resetpassword"
                element={
                  <Layout>
                    <AdminForgotPassword />
                  </Layout>
                }
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
