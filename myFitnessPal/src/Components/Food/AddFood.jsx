import styled from "styled-components";
import "../Food/tableDiary.css";
import water from "../../../assets/water.png";
import foodDate from "../../../assets/fooddate.png";
import note from "../../../assets/note.png";

import { TableDairy } from "./TableDairy";

const CalederDairyImg = styled.img`
  width: 276px;
  height: 86px;
  margin-left: -650px;
  cursor: pointer;
  margin-top:120px;
`;

const WaterConsumption = styled.img`
  height: 250px;
  width: 448px;
  margin-right: -280px;
`;

const NoteDairy = styled.img`
  height: 220px;
  width: 370px;
  margin-left: -250px;
  cursor: pointer;
`;

const ComE = styled.img`
  width: 214px;
  height: 54px;
  margin-right: -400px;
  cursor: pointer;
`;

const VieR = styled.img`
  width: 214px;
  height: 54px;
  margin-left: -400px;
  cursor: pointer;
`;

export function AddFoodDairy({ componentRef }) {
  return (
    <div>
      
      <center>
        <div>
          <div className="food-container">
          <br/>
            <CalederDairyImg src={foodDate} alt="calendar" />
          </div>
          <TableDairy componentRef={componentRef} />
        </div>
        <div className="container">
          <div className="row text-flex">
            <div className="col-5">
              <br />
              <WaterConsumption src={water} alt="water" />
            </div>
            <div className="col-2"></div>
            <div className="col-5">
              <br />
              <NoteDairy src={note} alt="note" />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            
              When you’re finished logging all foods, water and excercise for
              this day, click here :
           
          </div>
          <div className="row buttton-food" >
            
           
            <button className="addfood-btn">COMPLETE ENTRY</button>
            
            
             
              <button className="addfood-btn">VIEW REPORT</button>
            
          </div>
          <br/><br/>
        </div>
      </center>
    </div>
  );
}