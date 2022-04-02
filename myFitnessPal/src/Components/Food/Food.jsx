import React, { useRef } from "react";

import { AddFoodDairy } from "./AddFood";


export const FoodDiary=()=> {
  let componentRef = useRef();

  return (
    <div>
   
      <AddFoodDairy componentRef={componentRef} />
     
    </div>
  );
}