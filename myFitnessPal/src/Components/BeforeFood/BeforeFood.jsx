import React, { useEffect, useState } from "react";
import "../BeforeFood/BeforeFood.css";
import { Link } from "react-router-dom";
import axios from "axios";

function BeforeFood() {
  const [search, setSearch] = useState("hhsdjhsdhj");
  const [sdata, setSdata] = useState([]);

  useEffect(() => {
    //   debounce(handlesearch,3000)
    handlesearch(search);
  }, [search]);

//   let wait_item;
//   const debounce=(func,delay)=>{
//      if(wait_item){
//          clearTimeout(wait_item)
//      }else{

//          wait_item = setTimeout(()=>{
//              func();
//          },delay);
//      }
//   }

  const handlesearch = (search) => {
    axios.get("http://localhost:8080/foods?q="+ search).then((res) => {
      console.log(res.data);
      setSdata(res.data);
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="main_searchbar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="search for Food Brand or Restorent"
            className="serchbar"
            onInput={(e) => {
                if(e.target.value){
                    setSearch(e.target.value);
                }
                else{
                    setSearch("gdgshdg")
                }

            }}
          />
        </div>

        <div className="img_1">
          {/* <img
            src="https://www.myfitnesspal.com/react-static/e95f17aa29d83b7a7588a0f825f7b66f.svg"
            alt=""
          /> */}
<hr />
          {sdata.map((el) => {
            return (
                <div key={el.id}>
              <div  style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                {/* <div>{el.name}</div> */}
                <div>
                <h3 style={{color:"blue",}}>{el.name}</h3>
                <span>medium apple</span><br />
                <span>Calories:299</span><span>carbons:1371</span>
                </div>
                <div style={{height:"50px", width:"50px", border:"2px solid red", borderRadius:"50%",placeItems:"center"}}>
                      100
                </div>

              </div>
<hr />
              </div>
            );
          })}
        </div>
        <div className="food_name">
          <h3>Food Analysis</h3>
          <span>
            Understand how the food you’re eating contributes to your daily
            calories, macronutrients, and micronutrients.
          </span>
        </div>
        <div className="all_carts">
          <div className="cart_1">
            <div>
              <img
                src="https://www.myfitnesspal.com/react-static/b3754d3c0fff1f109ab484002e29f3a3.png"
                alt=""
                className="img_22"
              />
            </div>
            <h3>
              10 Make-Ahead Breakfasts Under 300 Calories <br />{" "}
              <span style={{ color: "blue", fontSize: "16px" }}>
                MyFitnessPal Blog
              </span>
            </h3>
          </div>
          <div className="cart_1">
            <div>
              <img
                src="https://www.myfitnesspal.com/react-static/fda07e55f2952750bad581ed72cfad0a.png"
                alt=""
                className="img_22"
              />
            </div>
            <h3>
              Essential Guide to Getting Moving <br />{" "}
              <span style={{ color: "blue", fontSize: "16px" }}>
                {" "}
                MyFitnessPal Blog
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeforeFood;
