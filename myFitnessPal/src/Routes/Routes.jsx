import React, { useEffect } from "react";

import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer";
import { BeforeFood } from "../Components/BeforeFood";
import { Routes, Route } from "react-router-dom";
import Premium from "../Components/Premium/Premium";
import { FoodDiary } from "../Components/Food/Food";
import Blog from "../Components/Blog/Blog";
import AfterHome from "../Components/AfterHome/AfterHome";
import BeforeAbout from "../Components/BeforeAbout/BeforeAbout";

import { SignIn } from "../Components/Header/SignIn";
import { SignUp } from "../Components/Header/SignUp";
import { Profile } from "../Components/Profile/Profile";
import { useRef } from "react";
import { Community } from "../Components/Community/community";

import  {AllApps} from "../Components/allApps/AllApps"
import Notfound from "../Components/Notfound/Notfound";
import { HomePage } from "../Components/Homepage.jsx";
// import { CreateUsername } from "./components/signup/createusernamepg";



export const Routess = () => {
  const token = useRef();
  useEffect(() => {
    token.current = localStorage.getItem("token");  
  }, []);
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/food" element={token.length == 0 ? <BeforeFood /> : <FoodDiary />}
        ></Route>
        <Route path="/apps" element={<AllApps/>}></Route>
        <Route path="/food/:name" element={<BeforeFood />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/premium" element={<Premium />}></Route>
        <Route path="/about" element={<AfterHome />}></Route>
        <Route path="/exercise" element={<BeforeAbout />}></Route>
        <Route path="*" element={< Notfound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
};
// <Route path="/" element={<BeforeAbout />}></Route>
// <Route
//   path="/"
//   element={token === null ? <BeforeAbout /> : <AfterHome />}
// ></Route>;
