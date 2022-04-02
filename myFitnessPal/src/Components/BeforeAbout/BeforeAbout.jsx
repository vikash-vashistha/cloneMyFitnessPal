import React from "react";
import "../BeforeAbout/BeforeAbout.css";

function BeforeAbout() {
  return (
    <div className="main_div">
      <div className="chiled_div1">
        <h3 className="main-title">
          Lose Weight with MyFitnessPal.com — for FREE!
        </h3>
        <hr />
        <div>
          <br />
          <p>
            Losing weight isn't easy - we know. But with a membership to
            MyFitnessPal.com, you'll get the tools you need to successfully take
            weight off - and keep it off. And best of all, you can signup for
            free, no strings attached. So put away your credit card - you'll
            never have to pay a cent.
          </p>
          <br />
          <p>
            Study after study has confirmed the benefits of keeping track of the
            food you eat and the activity you do. It's simple - the more
            consistently you track your food intake, the more likely you are to
            lose weight. That's why every successful weight management program
            suggests that you keep a food diary and/or an activity log. But
            recording everything you eat without the right tools can be tedious
            at best, or simply impossible at worst.
          </p>
          <br />
          <p>
            At MyFitnessPal.com, we focus on making sure you can log your meals
            as quickly and easily as possible. Because the easier we make it for
            you, the more likely you are to stay on track, and the more likely
            you are to succeed in your weight loss goals.
          </p>
        </div>
        <div className="chiled_div2">
          <div>
            <img
              src="https://www.myfitnesspal.com/assets/img-about-us.png"
              alt=""
            />
          </div>
          <div>
            <h4 style={{ color: "rgb(10,82,138)" }}>How does it work?</h4>
            <p>
              The reason our system is so easy to use is because{" "}
              <strong>it learns from you!</strong> remembers what you've eaten
              and done most often in the past, and makes it easy for you to add
              those foods again to your log.
            </p>
          </div>
        </div>
        <h4 style={{ color: "blue" }}>With a FREE membership you get:</h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            <span>
              <strong>The easiest to use food diary on the web -</strong>Track
              what you eat with just a few clicks from anywhere with an internet
              connection - at home or at work
            </span>
          </li>
          <li>
            <span>
              <strong>
                {" "}
                A searchable food database of over 300,000,000 items -
              </strong>{" "}
              and it's growing every day!
            </span>
          </li>
          <li>
            <span>
              <strong>Your own personal food database -</strong>add your own
              foods and recipes at any time and access them from anywhere with
              an internet connection
            </span>
          </li>
          <li>
            <span>
              <strong>Free mobile apps for iPhone and Android -</strong>so you
              can log your meals and exercise even when you are on the go
            </span>
          </li>
          <li>
            <span>
              <strong>Support and motivation </strong>from people just like you
              - Our discussion forums let you learn from others, share your own
              tips, receive and give encouragement, and make friends.
            </span>
          </li>
          <li>
            <span>
              <strong>A personalized diet profile</strong>- customized to your
              unique weight loss goals.
            </span>
          </li>
          <li>
            <span>
              <strong>Support and motivation </strong>- our system can support
              any diet like Atkins, the South Beach Diet, the Zone, and more. No
              matter what diet you're on, we can help.
            </span>
          </li>
        </ul>
        <h3 className="main-title">
          Don't wait! Start losing weight the healthy way - all for FREE!
        </h3>
        <div className="chiled_div3">
          <div>
            <img
              src="https://www.myfitnesspal.com/assets/img-about-us-2.png"
              alt=""
            />
          </div>
          <div>
            <p>
              All the tools you need for healthy, sustainable weight loss are
              right at your fingertips - and you'll never have to pay a cent! So
              what are you waiting for? Stop wasting money on other dieting
              programs.
              <strong>
                Join today and get on the path to healthier living!
              </strong>
            </p>
            <button className="btnnn">Join Now For FREE!</button>
          </div>
        </div>
      </div>
      <div className="side_bar" >
        <div className="form">
          <div className="inside_div">
            <span><strong>Member Login</strong></span>
            <div className="fb">Log in with facebook</div>
            <br />
            <div style={{textAlign:"center"}}>or</div>
            <br />
            <span>Username:</span>
            <input className="innput" type="text" />
            <span>Password:</span>
            <input className="innput" type="password" />
            <input  type="checkbox" className="checkme"/><span>Remember me</span>
            <input className="innput" type="button" value={"Log In"}/>

          </div>
        </div>
        <span className="forgotname">Forgot Password or username?</span><br />
        <span>Not a member yet? <span className="forgotname">Signup Now?</span> </span>
        </div>
    </div>
  );
}

export default BeforeAbout;
