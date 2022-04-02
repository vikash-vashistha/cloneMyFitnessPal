import React from "react";
import { HomePage } from "../components/Homepage";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer";
import { BeforeFood } from "../Components/BeforeFood";
import { Routes, Route } from "react-router-dom";
import Premium from "../Components/Premium/Premium";
import { FoodDiary } from "../Components/Food/Food"
import Blog from "../Components/Blog/Blog";
import { AllApps } from "../Components/allApps/AllApps"
import { Community } from "../Components/Community/Community"

// import { Payment } from "./components/Payment";
// import { Welcome } from "./components/signup/welcome";
// import { LooseWeight } from "./components/signup/weightgoal";
// import { BaselineActivity } from "./components/signup/activitylevelpage";
// import { Detail } from "./components/signup/detailspage";
// import { BodyCheckout } from "./components/signup/bodyscanpg";
// import { WeightReduce } from "./components/signup/WeightReducepg";
// import { AllApps } from "./components/allApps/AllApps";
// import { Goals } from "./components/goals/Goals";
// import { CreateAccount } from "./components/signup/createaccountpg";
import { SignIn } from "../components/Header/SignIn";
import { SignUp } from "../components/Header/SignUp";

// import { CreateUsername } from "./components/signup/createusernamepg";

// import { Premium } from "./components/premium/Premium";

export const Routess = () => {

  const token = "abcfsg"
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/food" element={token.length == 0 ? <BeforeFood /> : <FoodDiary />}></Route>
        <Route path="/food/:name" element={<BeforeFood />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/AllApps" element={<AllApps />}></Route>
        <Route path="/Community" element={<Community />}></Route>
        <Route path="/premium" element={<Premium />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};
