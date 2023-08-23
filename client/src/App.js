import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import SecondBlogPage from "screen/Blog/SecondBlogPage";
import DashboardLayout from "../src/components/DashboardLayout/DashboardLayout";
import ListEnrollStudentBody from "screen/Dashboard/ListEnrollStudent";
import ListCourseBody from "screen/Dashboard/ListCourseBody";
import ListTeamBody from "screen/Dashboard/ListTeamBody/ListTeamBody";
import CreateTeamBody from "screen/Dashboard/CreateTeam/CreateTeam";
import ListTestimonialBody from "screen/Dashboard/ListTestimonialBody/ListTestimonialBody";
import ListRequestCertificate from "screen/Dashboard/ListRequestCertificate/ListRequestCertificate";
import ListVacancy from "screen/Dashboard/ListVacancy";
import PageTitle from "components/PageTitle/PageTitle";
import UpdateCourse from "screen/Dashboard/UpdateCourse/UpdateCourse";
import EditTeam from "screen/Dashboard/EditTeam";

// Simple git
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
                    !token ? (
                      <Layout>
                        <Home />
                        <PageTitle title="Deerwalk Training Center" />
                      </Layout>
                    ) : (
                      <Navigate to="/dashboard" />
                    )
                  }
                />
                <Route
                  path="home"
                  element={
                    <Layout>
                      <Home />
                      <PageTitle title="Deerwalk Training Center" />
                    </Layout>
                  }
                />
                <Route
                  path="our-team"
                  element={
                    <Layout>
                      <OurTeam />
                      <PageTitle title="Our Team" />
                    </Layout>
                  }
                />
                <Route
                  path="gallery"
                  element={
                    <Layout>
                      <Gallery />
                      <PageTitle title="Gallery" />
                    </Layout>
                  }
                />
                <Route
                  path="contact-us"
                  element={
                    <Layout>
                      <ContactUs />
                      <PageTitle title="Contact Us" />
                    </Layout>
                  }
                />
                <Route
                  path="/courses"
                  element={
                    <Layout>
                      <Courses />
                      <PageTitle title="Courses" />
                    </Layout>
                  }
                />

                <Route
                  path="blog"
                  element={
                    <Layout>
                      <Blog />
                      <PageTitle title="Blogs" />
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
                  path="blog-page-2"
                  element={
                    <Layout>
                      <SecondBlogPage />
                    </Layout>
                  }
                />
                <Route
                  path="verify-certificate"
                  element={
                    !token ? (
                      <Layout>
                        <VerifyCertificate />
                        <PageTitle title="Verify Certificate" />
                      </Layout>
                    ) : (
                      <Navigate to="/dashboard" />
                    )
                  }
                />
                <Route
                  path="terms-and-condition"
                  element={
                    !token ? (
                      <Layout>
                        <TermsAndConditions />
                      </Layout>
                    ) : (
                      <Navigate to="/dashboard" />
                    )
                  }
                />
                <Route
                  path="course-detail/:id"
                  element={
                    !token ? (
                      <Layout>
                        <CourseDetailPage />
                      </Layout>
                    ) : (
                      <Navigate to="/dashboard" />
                    )
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
                      <Navigate to="/dashboard" />
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
                      <Navigate to="/dashboard" />
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

              {/* //! Dasboard private routes starts here */}

              <Route
                path="/dashboard"
                element={
                  <DashboardLayout>
                    <Dashboard />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/list-enroll-students"
                element={
                  <DashboardLayout>
                    <ListEnrollStudentBody />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/list-course"
                element={
                  <DashboardLayout>
                    <ListCourseBody />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/update-course/:id"
                element={
                  <DashboardLayout>
                    <UpdateCourse />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/list-team"
                element={
                  <DashboardLayout>
                    <ListTeamBody />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/create-team"
                element={
                  <DashboardLayout>
                    <CreateTeamBody />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/list-testimonial"
                element={
                  <DashboardLayout>
                    <ListTestimonialBody />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/list-request-certificate"
                element={
                  <DashboardLayout>
                    <ListRequestCertificate />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/list-vacancy"
                element={
                  <DashboardLayout>
                    <ListVacancy />
                  </DashboardLayout>
                }
              />

              {/* //! Dasboard private routes ends here */}

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
          <ToastContainer />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
