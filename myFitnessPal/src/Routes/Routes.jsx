import React from "react";
import { HomePage } from "../components/Homepage";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BeforeFood } from "../Components/BeforeFood";
import { Routes, Route } from "react-router-dom";
import BeforeAbout from "../Components/BeforeAbout/BeforeAbout";
import { SignIn } from "../Components/Header/SignIn";
import { SignUp } from "../Components/Header/SignUp";
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
// import { Login } from "./components/signup/loginpg";
// import { CreateUsername } from "./components/signup/createusernamepg";

// import { Premium } from "./components/premium/Premium";

export const Routess = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BeforeAbout />}></Route>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route path="/food" element={<BeforeFood />}></Route>
        <Route path="/food/:name" element={<BeforeFood />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup/welcome" element={<SignUp />}></Route>
        
      </Routes>
      <Footer />
    </div>
  );
};
