import React, { useRef } from "react";

import { AddFoodDairy } from "./AddFood";


export function FoodDairy() {
  let componentRef = useRef();

  return (
    <div>
   
      <AddFoodDairy componentRef={componentRef} />
     
    </div>
  );
}