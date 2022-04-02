import React, { useState } from 'react'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from '@mui/icons-material/Home';
import "./Blog.css"
// import { Navigate, useNavigate } from 'react-router';
function Blog() {
// const navigate=useNavigate();
  const [index, setIndex] = useState(0);
  var premiumarr = [
    {
      url: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/37216-featured-700x400.jpg",
      desc: `Blueberry Muffin Breakfast Mug Cake`,
    },
    {
      url: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/27077-featured-700x400.jpg",
      desc: `Essential Guide to MyFitnessPal Premium`,
    },
    {
      url: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/52084-featured-700x400.png",
      desc: `10 Spring Fruits and Vegetables to Eat Now`,
    },
    {
      url: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/40449-featured-700x400.jpg",
      desc: `11 Easy Nighttime Weight-Loss Hacks`,
    },
    {
      url: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/52085-featured-700x400.jpg",
      desc: `7 Green Veggies You Haven’t Tried, But Totally`,
    },
    {
      url: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/34686-featured-700x400.jpg",
      desc: `Is White or Dark Meat Chicken Healthier?`,
    },
    {
      url: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/45014-featured-700x400.jpg",
      desc: `4-Week No-Gym Workout Guide`,
    },
    {
      url: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/49738-featured-700x400.jpg",
      desc: `How My Sister Lost 75 Pounds Run/Walking`,
    },
    {
      url: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg",
      desc: `15 Breakfasts Under 300 Calories`,
    },
  ];
  const handleChange = (e) => {
    let newIndex = index + e;
    if (newIndex < 0) {
      newIndex =premiumarr.length - 5;
    } else if (newIndex > premiumarr.length - 5) {
      newIndex =0
    }
    setIndex(newIndex);
  };
  return (
    <div id="blog" className='blog-container'>
      {/* <div className='blog-header'>
        <div className='blog-up-navbar'>
          <div style={{padding:"8px"}} onClick={()=>{
            // navigate("/")
          }}><HomeIcon color="primary"  /> </div>
          <div className='navbar-img'>
            <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/03/logo-1.png" alt="first" />
          </div>
          <div></div>
        </div>
        <div className='blog-bottom-navbar'>
          <div className='blog-category'>
            <p>RECIPES</p>
            <p>NUTRITION</p>
            <p>WEIGHT LOSS</p>
            <p>FITNESS</p>
            <p>INSPIRATION</p>
            <p>ESSENTIALS</p>
            <p>VIDEO</p>

          </div>
        </div>
      </div><br/><br/><br/><br/><br/><br/> */}

      <div className='blog-register'>
      <h1 className='blog-register-heading'>Fitness starts with what you eat.</h1>
      <p>Sign up for your personalized newsletter.</p>
      <div className='register-div'>
        <input className='input' type="text" placeholder="Your Email" />
        <button>Sign Up</button>
      </div>
      </div><br/><br/><br/><br/>


      <div className='blog-body'></div>

    

      <div className='trending-articles'>
      <div className='line-div'>
        <h3 className="special-font h3">TRENDING ARTICLES</h3>
        <div className='line'></div>
        </div>
        <div className="caraousel-container-trending">
          <div className="caraousel-trending">
            <button
              className="caraousel-btn-trending"
              onClick={() => {
                handleChange(-1);
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </button>

            <div className="caraousel-item-trending">
              <img src={premiumarr[index].url} alt="app" />
              
              <p className="special-font">{premiumarr[index].desc}</p>
            </div>

            <div className="caraousel-item-trending">
              <img src={premiumarr[index + 1].url} alt="app" />
             
              <p className="special-font">{premiumarr[index + 1].desc}</p>
            </div>

            <div className="caraousel-item-trending">
              <img src={premiumarr[index + 2].url} alt="app" />
              
              <p className="special-font">{premiumarr[index + 2].desc}</p>
            </div>

            <div className="caraousel-item-trending">
              <img src={premiumarr[index + 3].url} alt="app" />
              
              <p className="special-font">{premiumarr[index + 3].desc}</p>
            </div>

             <div className="caraousel-item-trending">
              <img src={premiumarr[index + 4].url} alt="app" />
              
              <p className="special-font">{premiumarr[index + 4].desc}</p>
            </div>
           
            <button
              className="caraousel-btn-trending"
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
      </div>

      <div className='latest-articles'>
      <div className='line-div'>
        <h3 className="special-font line2 h3">LATEST ARTICLES</h3>
        <div className='line'></div>
        </div>

        <img  className='big-img' src="https://blog.myfitnesspal.com/wp-content/uploads/2022/03/7-Green-Veggies-You-Havent-Tried-But-Totally-Should-1140x545.jpg" alt="latest-first" /><br/><br/>
      <div className='latest-div'>
        <div>
          <img src="https://blog.myfitnesspal.com/wp-content/uploads/2022/03/Featured-Image-SP-750x592.png" alt="latest-first" />
          <p>10 Spring Fruits and Vegetables to Eat Now</p>
          <p>MARCH 23, 2022</p>
        </div>
        <div>
          <img src="https://blog.myfitnesspal.com/wp-content/uploads/2018/10/UACF-This-or-That-chicken-featured-750x592.jpg" alt="latest-first" />
          <p>Is White or Dark Meat Chicken Healthier?</p>
          <p>MARCH 23, 2022</p>
        </div>
        <div>
          <img src="https://blog.myfitnesspal.com/wp-content/uploads/2019/02/Blueberry-Breakfast-Mug-Cake-750x592.jpg" alt="latest-first" />
          <p>Blueberry Muffin Breakfast Mug Cake</p>
          <p>MARCH 22, 2022</p>
        </div>
        <div>
          <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/03/MFP-Spring-Fish-Chowder-Featured-750x592.jpg" alt="latest-first" />
          <p>Spring Fish Chowder</p>
          <p>MARCH 22, 2022</p>
        </div>
        <div>
          <img src="https://blog.myfitnesspal.com/wp-content/uploads/2022/03/Which-Store-Bought-Coffee-Creamer-Is-Healthiest-750x592.jpg" alt="latest-first" />
          <p>Which Store-Bought Coffee Creamer Is Healthiest</p>
          <p>MARCH 17, 2022</p>
        </div>
        <div>
          <img src="https://blog.myfitnesspal.com/wp-content/uploads/2017/03/Shamrock-Shake-750x592.jpg" alt="latest-first" />
          <p>Healthy Shamrock Shake</p>
          <p>MARCH 15, 2022</p>
        </div>
      </div>
      
      </div><br/><br/><br/><br/>


      {/* <div className='blog-footer'>
        <img src='https://blog.myfitnesspal.com/wp-content/uploads/2021/03/logo-1.png' alt='logo-footer'></img>
        <p className="footer-name">MyFitnessPal</p>
        <p className='footer-desc'>is the leading app for tracking—and conquering—your nutrition and fitness goals. Log meals from a database of 14 million foods, track physical activity, and learn how to build healthy habits that stick. With more than 500 recipes, 150 workout routines, and a variety of expert-guided meal and workout plans, you’ll have the support you need for your entire health and fitness journey.</p>
        <p style={{fontWeight:"bolder"}} className="footer-name">MyFitnessPal Blog</p>
        <p className='privacy'>© 2022MyFitnessPal™ | Privacy Policy | Terms | </p>
      
      </div> */}
    </div>
  )
}

export default Blog