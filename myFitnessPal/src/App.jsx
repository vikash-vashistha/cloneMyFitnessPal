import "./App.css";

import { HomePage } from "./components/Homepage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Food } from "./components/Food";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/food/:name" element={<Food />}></Route>

    
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
