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

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#000000",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    info: {
      main: "#000000",
      light: "#000000",
      dark: "#000000",
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
                  path='home'
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path='team'
                  element={
                    <Layout>
                      <OurTeam />
                    </Layout>
                  }
                />
                <Route
                  path='gallery'
                  element={
                    <Layout>
                      <Gallery />
                    </Layout>
                  }
                />
                <Route
                  path='contact'
                  element={
                    <Layout>
                      <Contact />
                    </Layout>
                  }
                />
                <Route
                  path='login'
                  element={
                    !token ? (
                      <Layout>
                        <Login />
                      </Layout>
                    ) : (
                      <Navigate to='/' />
                    )
                  }
                />
                <Route
                  path='register'
                  element={
                    !token ? (
                      <Layout>
                        <Registration />
                      </Layout>
                    ) : (
                      <Navigate to='/' />
                    )
                  }
                />
                <Route
                  path='sendpasswordresetemail'
                  element={
                    <Layout>
                      <SendPasswordResetEmail />
                    </Layout>
                  }
                />
                <Route
                  path='/api/users/reset/:id/:token'
                  element={
                    <Layout>
                      <ResetPassword />
                    </Layout>
                  }
                />
              </Route>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
