import React, { useState } from "react";
import "./Premium.css";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Premium() {
  const [index, setIndex] = useState(0);

  var premiumarr = [
    {
      name: "Na'Quisha",
      url: "https://www.myfitnesspal.com/react-static/73948c75af049d19430840c0a3c94a84.jpg",
      comments: `"It's truly changed my life and it allowed me to get some direction in my weight loss journey."`,
    },
    {
      name: "Eric",
      url: "https://www.myfitnesspal.com/react-static/bcf55be8b62a3030b24ea7e82690d255.jpg",
      comments: `"Once I lost 10 pounds, then another 10 pounds, it blew me away."`,
    },
    {
      name: "Molly",
      url: "https://www.myfitnesspal.com/react-static/7c3acd117f6a80dfbc2e3cc720431dff.jpg",
      comments: `"I love the app because it allows for balance."`,
    },
    {
      name: "Mat",
      url: "https://www.myfitnesspal.com/react-static/5f3fffbf0ba70cde8daee102a166f978.jpg",
      comments: `"I loved how MyFitnessPal could give you a basic rundown of how many calories you needed to lose fat."`,
    },
    {
      name: "Eden",
      url: "https://www.myfitnesspal.com/react-static/e0e1c18cb8edc4b1245440ef51d1d335.jpg",
      comments: `"MyFitnessPal alerted me every day, and that became a reminder to live a healthy life."`,
    },
    {
      name: "Tim",
      url: "https://www.myfitnesspal.com/react-static/917f460ca62aa4ce3399babacee24e77.jpg",
      comments: `"Keep tracking and you'll find that you'll be able to do more than you could before."
    `,
    },
  ];
  const handleChange = (e) => {
    let newIndex = index + e;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > premiumarr.length - 3) {
      newIndex = premiumarr.length - 3;
    }
    setIndex(newIndex);
  };
  return (
    <div>
    
      <div className="Premium-container">
      <br/><br/>

        <div className="jss78">
          <div className="jss79">
            <div className="left-div">
              <div className="jss90">PREMIUM</div>
              <Typography className="	.MuiTypography-root">
                <h1 className="pre-h1" style={{fontWeight:"900",fontSize:"44px",marginTop:"0"}}>Start Your Free Trial Today</h1>
              </Typography>
              <p className="special-font">
                Premium members are 65% more likely to reach their weight loss
                goal.
              </p>
             <a href="#offer"> <button className="free-trial-btn">
                START FREE 1-MONTH TRIAL
              </button>
              </a>
            </div>

            <div>
              <img
                className="app-img"
                src="https://www.myfitnesspal.com/react-static/e4537e1d014a66cb6083eb6025813bb6.png"
                alt="app"
              />{" "}
            </div>
          </div>

          <div className="second">
            <div>
              <img
                src="https://www.myfitnesspal.com/react-static/51b6c01dec78ddfb6d693b1ff8d23d44.png"
                alt="first"
              />
              <h3>Meal Plans & Recipes</h3>
              <p>Gain insight into your nutrition</p>
            </div>
            <div>
              <img
                src="https://www.myfitnesspal.com/react-static/c51db6a037b248c10816974faac845f9.png"
                alt="first"
              />
              <h3>Personalized Goals</h3>
              <p>Get guidance & coaching tailored to you</p>
            </div>
            <div>
              <img
                src="https://www.myfitnesspal.com/react-static/93c7966575adb77a179235b991596985.png"
                alt="first"
              />
              <h3>Ad-Free Experience</h3>
              <p>Focus on your goals without distraction</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="caraousel-container">
          <h1 className="pre-h1" style={{ fontWeight: "700" }}>Victory Stories</h1>
          <p className="special-font">
            Your victories are our victories and we want to share them with the
            world.
          </p><br/>
          <div className="caraousel">
            <button
              className="caraousel-btn"
              onClick={() => {
                handleChange(-1);
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </button>

            <div className="caraousel-item">
              <img src={premiumarr[index].url} alt="app" />
              <p style={{ fontWeight: "bolder" }}>{premiumarr[index].name}</p>
              <p className="special-font">{premiumarr[index].comments}</p>
            </div>
            <div className="caraousel-item">
              <img src={premiumarr[index + 1].url} alt="app" />
              <p style={{ fontWeight: "bolder" }}>
                {premiumarr[index + 1].name}
              </p>
              <p className="special-font">{premiumarr[index + 1].comments}</p>
            </div>
            <div className="caraousel-item">
              <img src={premiumarr[index + 2].url} alt="app" />
              <p style={{ fontWeight: "bolder" }}>
                {premiumarr[index + 2].name}
              </p>
              <p className="special-font">{premiumarr[index + 2].comments}</p>
            </div>
            <button
              className="caraousel-btn"
              onClick={() => {
                handleChange(1);
              }}
            >
              <ChevronRightIcon fontSize="large" />
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          </div>
          
          <div className="frequently-asked-questions">
            <div className="jss90">PREMIUM</div>
            <h1 className="pre-h1">Frequently Asked Questions</h1>
            <div className="faq-container">
              <div>
                <h3>When will I get charged?</h3>
              </div>
              <div><h3>Will my subscription automatically renew?</h3></div>
              <div><h3>Can I cancel anytime?</h3></div>
              <div><h3>What do I need to upgrade?</h3></div>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className="outer-bottom"></div>
          <div className="jss140">
            <div className="inner-bottom" id="offer">
              <div className="jss90">1-MONTH FREE</div>
              <h2 className="pre-h2">Go Premium, Get Results</h2><br/>
              <p className="sub-para">
                Choose a MyFitnessPal Premium plan to start your 1-month free
                trial. You will be charged after the trial has ended—cancel
                anytime.
              </p>
              <br />

              <div className="subscription">
                <div className="jss163">
                  <h3 className="yellow-heading">SAVE</h3>
                  <div>
                    <h2>ANNUAL</h2>
                    <h1 className="cost pre-h1">₹3,100.00</h1>
                    <p>Per Year</p>
                    <p className="special-font">
                      ₹3,100.00 billed yearly after free trial ends.
                    </p>
                    <button className="yearly-btn monthly-btn">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
                <div className="jss166">
                  <div>
                    <h2  className="pre-h2">MONTHLY</h2>
                    <h1 className="cost pre-h">₹620.00</h1>
                    <p>Per Month</p>
                    <p className="special-font">
                      ₹620.00 billed monthly after free trial ends.
                    </p>
                    <button className="monthly-btn">SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br/><br/><br/>
       
      </div>
   
  );
}

export default Premium;
