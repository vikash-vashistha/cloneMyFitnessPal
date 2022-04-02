import { useState } from "react";
import Premium from "./Components/Premium/Premium.jsx";
import { Header } from "./Components/Header/Header";
import "./App.css";
import Blog from "./Components/Blog/Blog.jsx";
import { FoodDairy } from "./Components/Food/Food.jsx";

import AfterHome from "./Components/AfterHome/AfterHome";
import BeforeAbout from "./Components/BeforeAbout/BeforeAbout";
import { Community } from './Components/community/community'
import {AllApps} from "./Components/allApps/AllApps"



function App() {
  return (
    <div className="App">
      <AfterHome/>
      {/*<Blog/>*/}
      {/* <Premium /> */}
      {/* <FoodDairy/> */}
      {/*<Header />*/}
      {/* <AllApps /> */}
      <Community />
    </div>
  );
}

export default App;
