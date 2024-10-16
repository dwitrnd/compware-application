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
import Hardware from "./screen/Hardware";
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
// import CreateCourse from "screen/Dashboard/ListCourseBody/CreateCourse";
import ListTeamBody from "screen/Dashboard/ListTeamBody/ListTeamBody";
import CreateTeamBody from "screen/Dashboard/CreateTeam/CreateTeam";
import ListTestimonialBody from "screen/Dashboard/ListTestimonialBody/ListTestimonialBody";
import EditTestimonial from "screen/Dashboard/ListTestimonialBody/EditTestimonial";
import ListRequestCertificate from "screen/Dashboard/ListRequestCertificate/ListRequestCertificate";
import ListVacancy from "screen/Dashboard/ListVacancy";
import PageTitle from "components/PageTitle/PageTitle";
import UpdateCourse from "screen/Dashboard/UpdateCourse/UpdateCourse";
import CreateCourse from "screen/Dashboard/ListCourseBody/CreateCourse";
import EditTeam from "screen/Dashboard/EditTeam";
import Event from "screen/Event/EventPage";
import ListGalleryBody from "screen/Dashboard/ListGalleryBody/ListGalleryBody";
import CreateGallery from "screen/Dashboard/ListGalleryBody/CreateGallery";
import ListBlogBody from "screen/Dashboard/ListBlogBody/ListBlogBody";
import ListSessionBody from "screen/Dashboard/ListSessionBody/ListSessionBody";
import CreateBlog from "screen/Dashboard/ListBlogBody/CreateBlog";
import CreateSessions from "screen/Dashboard/ListSessionBody/CreateSessions";
import EditSessions from "screen/Dashboard/ListSessionBody/EditSessions";
import ListTrainer from "screen/Dashboard/ListTrainer/ListTrainer";
import AddTrainer from "screen/Dashboard/AddTrainer/AddTrainer";
import UpdateBlog from "screen/Dashboard/ListBlogBody/UpdateBlog";
import ListStudentCertificateBody from "screen/Dashboard/ListStudentCertificateBody/ListStudentCertificateBody";
import CreateStudentCertificate from "screen/Dashboard/ListStudentCertificateBody/CreateStudentCertificate";
import CreateTestimonial from "screen/Dashboard/ListTestimonialBody/CreateTestimonial";
import EditStudentCertificate from "screen/Dashboard/ListStudentCertificateBody/EditStudentCertificate";
import ListClientBody from "screen/Dashboard/ListClientBody/ListClientBody";
import ListHardware from "screen/Dashboard/ListHardware/ListHardware";
import CreateHardware from "screen/Dashboard/ListHardware/CreateHardware";
import UpdateHardware from "screen/Dashboard/ListHardware/UpdateHardware";
import ListNewsletter from "screen/Dashboard/ListNewsletter/ListNewsletter";
import CreateNewsletter from "screen/Dashboard/ListNewsletter/CreateNewsletter";
import UpdateNewsletter from "screen/Dashboard/ListNewsletter/UpdateNewsletter";
import CreateClient from "screen/Dashboard/ListClientBody/CreateClient";
import ListPlacementPartnerBody from "screen/Dashboard/ListPlacementPartnerBody/ListPlacementPartnerBody";
import CreatePlacementPartner from "screen/Dashboard/ListPlacementPartnerBody/CreatePlacementPartner";
import EventPageEpisode2 from "screen/Event/EventPageEpisode2";
import GalleryCategoryDetails from "screen/GalleryCategoryDetails";
import ListGalleryEdit from "screen/Dashboard/ListGalleryBody/ListGalleryEdit";
import EditGallery from "screen/Dashboard/ListGalleryBody/EditGallery";

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
  console.log(token);
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Home />} />
                <Route
                  path="/dashboard"
                  element={
                    token ? (
                      <DashboardLayout>
                        <Dashboard />
                      </DashboardLayout>
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
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
                  path="hardware"
                  element={
                    <Layout>
                      <Hardware />
                      <PageTitle title="Hardware" />
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
                  path="/dashboard/update-blog/:id"
                  element={
                    <DashboardLayout>
                      <UpdateBlog />
                    </DashboardLayout>
                  }
                />
                <Route
                  path="blog-page/:id"
                  element={
                    <Layout>
                      <BlogPage />
                    </Layout>
                  }
                />
                <Route path="episode-I" element={<Event />} />
                <Route path="episode-II" element={<EventPageEpisode2 />} />

                <Route
                  path="blog-page-2"
                  element={
                    <Layout>
                      <SecondBlogPage />
                    </Layout>
                  }
                />
                <Route
                  path="verify-certificate/:id"
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
                {/* <Route
                  path='register'
                  element={
                    !token ? (
                      <Layout>
                        <AdminRegister />
                      </Layout>
                    ) : (
                      <Navigate to='/dashboard' />
                    )
                  }
                /> */}
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
                  token ? (
                    <DashboardLayout>
                      <ListEnrollStudentBody />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/list-sessions"
                element={
                  token ? (
                    <DashboardLayout>
                      <ListSessionBody />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/dashboard/list-hardware"
                element={
                  token ? (
                    <DashboardLayout>
                      <ListHardware />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

<Route
                path="/dashboard/update-hardware/:id"
                element={
                  token ? (
                    <DashboardLayout>
                      <UpdateHardware />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
<Route
                path="/dashboard/create-hardware"
                element={
                  token ? (
                    <DashboardLayout>
                      <CreateHardware />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

<Route
                path="/dashboard/list-newsletter"
                element={
                  token ? (
                    <DashboardLayout>
                      <ListNewsletter />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

<Route
                path="/dashboard/update-newsletter/:id"
                element={
                  token ? (
                    <DashboardLayout>
                      <UpdateNewsletter />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
<Route
                path="/dashboard/create-newsletter"
                element={
                  token ? (
                    <DashboardLayout>
                      <CreateNewsletter />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/dashboard/create-session"
                element={
                  token ? (
                    <DashboardLayout>
                      <CreateSessions />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/create-client"
                element={
                  token ? (
                    <DashboardLayout>
                      <CreateClient />
                    </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/list-partner"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListPlacementPartnerBody />
                  </DashboardLayout>
                   ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/create-placement"
                element={
                  token ? (
                  <DashboardLayout>
                    <CreatePlacementPartner />
                  </DashboardLayout>
                   ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/edit-session/:id"
                element={
                  token ? (
                  <DashboardLayout>
                    <EditSessions />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/list-blog"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListBlogBody />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/list-students"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListStudentCertificateBody />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/create-blog"
                element={
                  token ? (
                  <DashboardLayout>
                    <CreateBlog />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/create-student"
                element={
                  token ? (
                  <DashboardLayout>
                    <CreateStudentCertificate />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/dashboard/create-course"
                element={
                  token ? (
                  <DashboardLayout>
                    <CreateCourse />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="gallery/:id"
                element={
                  !token ? (
                    <Layout>
                      <GalleryCategoryDetails />
                    </Layout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />

              <Route
                path="/dashboard/create-gallery"
                element={
                  token ? (
                  <DashboardLayout>
                    <CreateGallery />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />

              <Route
                path="/dashboard/list-course"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListCourseBody />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/list-gallery"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListGalleryBody />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/list-gallery/:id"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListGalleryEdit />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/editGallery/:id"
                element={
                  token ? (
                  <DashboardLayout>
                    <EditGallery />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              {/* <Route
                path='/dashboard/create-course'
                element={
                  <DashboardLayout>
                    <CreateCourse />
                  </DashboardLayout>
                }
              /> */}
              <Route
                path="/dashboard/update-course/:id"
                element={
                  token ? (
                  <DashboardLayout>
                    <UpdateCourse />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/edit-student-certificate/:id"
                element={
                  token ? (
                  <DashboardLayout>
                    <EditStudentCertificate />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/list-team"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListTeamBody />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/list-trainer"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListTrainer />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/add-trainer"
                element={
                  token ? (
                  <DashboardLayout>
                    <AddTrainer />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/create-team"
                element={
                  token ? (
                  <DashboardLayout>
                    <CreateTeamBody />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/edit-team/:id"
                element={
                  token ? (
                  <DashboardLayout>
                    <EditTeam />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/list-client"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListClientBody />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/list-testimonial"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListTestimonialBody />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/create-testimonial"
                element={
                  token ? (
                  <DashboardLayout>
                    <CreateTestimonial />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/edit-testimonial/:id"
                element={
                  token ? (
                  <DashboardLayout>
                    <EditTestimonial />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/list-request-certificate"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListRequestCertificate />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/list-vacancy"
                element={
                  token ? (
                  <DashboardLayout>
                    <ListVacancy />
                  </DashboardLayout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />


              <Route
                path="resetpassword"
                element={
                  token ? (
                  <Layout>
                    <AdminForgotPassword />
                  </Layout>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
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
