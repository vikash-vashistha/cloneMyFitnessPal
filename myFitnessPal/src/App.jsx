import { useState } from "react";
import Premium from "./Components/Premium/Premium.jsx";
import { Header } from "./Components/Header/Header";
import "./App.css";
import Blog from "./Components/Blog/Blog.jsx";
import { FoodDairy } from "./Components/Food/Food.jsx";

import AfterHome from "./Components/AfterHome/AfterHome";
import BeforeAbout from "./Components/BeforeAbout/BeforeAbout";

function App() {
  return (
    <div className="App">
      <AfterHome/>
      {/*<Blog/>*/}
      {/* <Premium /> */}
      {/* <FoodDairy/> */}
      {/*<Header />*/}
    </div>
  );
}

export default App;
