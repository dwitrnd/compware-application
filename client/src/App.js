import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screen/auth/Login";
import ResetPassword from "./screen/auth/ResetPassword";
import SendPasswordResetEmail from "./screen/auth/SendPasswordResetEmail";
import Contact from "./screen/Contact";
import Dashboard from "./screen/Dashboard";
import Home from "./screen/Home";
import Layout from "./screen/Layout";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import Registration from "./screen/auth/Registration";
function App() {
  //? our global state token of redux toolkit used for making protected routes
  const { token } = useSelector((state) => state.authInfo);

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={!token ? <Login /> : <Navigate to='/' />} />
            <Route path='registration' element={!token ? <Registration /> : <Navigate to='/' />} />
            <Route path='sendpasswordresetemail' element={<SendPasswordResetEmail />} />
            <Route path='/api/users/reset/:id/:token' element={<ResetPassword />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
