import React, { useRef } from "react";

import { AddFoodDairy } from "./AddFood";
import {Navbar} from "../Navbar/Navbar"
import {Footer} from "../Footer/Footer"

export function FoodDairy() {
  let componentRef = useRef();

  return (
    <div>
    <Navbar/>
      <AddFoodDairy componentRef={componentRef} />
     <Footer/>
    </div>
  );
}