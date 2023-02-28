import React, { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import {auth} from './_firebase';
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Header from "./components/nav/Header";
import RegisterComplete from './pages/auth/RegisterComplete';
import ForgotPassword from './pages/auth/ForgotPassword';
import {createUser, getCurrentUser} from './api/User';
//!@import {roleBasedRedirect} from './functions/Common';
//@check import UserRoute from './components/routes/UserRoute';
import AdminRoute from './components/routes/AdminRoute';
import History from './pages/user/History';
import Password from './pages/user/Password';
import Wishlist from './pages/user/Wishlist';
import AdminDashboard from './pages/admin/AdminDashboard';

import Loader from './components/Loader';
import "./App.css";


const App = () => {
  // Check the user state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const [showUI, setshowUI] = useState(false);

  const roleBasedRedirect = (role) => {
      if (role === 'admin') {
          navigate('/admin/dashboard');
      } else {
          // Normal user
          navigate('/user/history');
      }
  }
  
  useEffect(() => {
    // Get status from Firebase
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          // Already Logged in
          const idTokenResult = await user.getIdTokenResult();
          //console.log('User: ', user);

          // Get current user database details
          getCurrentUser(idTokenResult.token).then((res) => {
              console.log(res);
              // Dispatch this information to maintain "Redux" userReducer's state while Page refresh.
              dispatch({
                type: 'LOGGED_IN_USER',
                payload: {
                    email: res.data.email,
                    name: res.data.name,
                    role: res.data.role,
                    userId: res.data._id,
                    token: idTokenResult.token
                }
              });  

              // redirect
              roleBasedRedirect(res.data.role);
          });
        }/*!} else {
          // Redirect to Login Page
          navigate('/login');
        }*/
    });

  }, []);
  
  return (  
    <>
      
      {//showUI && (
        <>
          <Header />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/register/complete" element={<RegisterComplete/>} />
            <Route path="/forgot/password" element={<ForgotPassword />} />
            <Route path="/user/history" element={<History />} />
            <Route path="/user/password" element={<Password />} />
            <Route path="/user/wishlist" element={<Wishlist />} />
            <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            {/* <Route path="/admin/dashboard/*" element={<AdminWrapper />}>
              <Route index element={<AdminDashboard />}/>
              <Route index element={<AdminHistory />}/>
            </Route> */}
          </Routes>
        </>
      //)
    }  
    </>
  );
}
  
export default App;
