import React from 'react'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import "../AfterHome/AfterHome.css"
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import OpacityIcon from '@mui/icons-material/Opacity';
function AfterHome() {
  return (
    <div className='all_divs'>

<div className='addd_1'></div>
<div className='addd_2'>
    <div className='left_bar'>
        <div className='left_1st'>
            <div className='your_daily_summ'>
                <div className='dialy_left'>Your Daily Summary</div>
                <div className='daily_right'><div>1 day strick</div></div>
            </div>

            <div className='beloow_daily_div'>
            <div className='left_1_inner'>
                <div className='avatar'>
                    <span className='in_avatar_text'>no photo provided</span> <br />
                    <span className='upload_photo'><input type="file"/></span>
                </div>
                <div className='info_avatar'>
                    <div className='upper_info_avatar'>
                        <div className='calories_view'>
                            <span style={{fontSize:"14px", lineHeight:0, color:"gray"}}>calories remaining change</span><br />
                            <span style={{fontSize:"45px",lineHeight:0.7, fontWeight:"bold", color:"rgb(133, 196, 0)"}}>2370</span>
                        </div>
                        <div className='buttons' id='buttonss'>
                            <button className='btn_1'>Add Exersize</button>
                            <button className='btn_1'>Add Food</button>
                        </div>
                    </div>

                      <div className='lower_info_avatar'>
                          <div><span className='numbers_11'>2730</span><br /><span>Goal</span></div>
                          <div><span className='numbers_11'>0</span><br /><span>Food</span></div>
                          <div><span className='numbers_11'>0</span><br /><span>Exersise</span></div>
                          <div><span className='numbers_11'>0</span><br /><span>Net</span></div>
                         
                      </div>

                </div>
            </div>
            <div className='gained'>
                <div className='gained_11'>
                <div className='gained_1'> <p style={{color:"gray"}}><span style={{fontSize:"30px", color:"rgb(133, 196, 0)", lineHeight:0.7, fontWeight:"bold"}}>0</span>kg<br />  GAINED</p> </div>
                <div className='gained_1'><WorkHistoryIcon color="disabled"/> </div>
                </div>
                <div className='gained_22'>
                <span className='opacity'><OpacityIcon /></span>
                    <div></div>
                    <div></div>
                </div>
            </div>
            </div>

        </div>
        <div className='new_feed'>
            <div className='new_feed_upper'>
                 News Feed
            </div>
            <div className='new_input'>
                <textarea name="" id="" cols="60" rows="3"></textarea>
                <button className='shear'>Shear</button>
            </div>
        </div>
        <div className='add_friends'>
            <h3>Add Friends to help you reach your goals!</h3>
            <p>Lose up to 3x more with the support of friends, than those who diet alone.</p>
            <div className='go_tomail'>
            <MailTwoToneIcon />
            <span>Invite By Email</span>
            </div>
        </div>
    </div>

    <div className='right_bar'>
        <div className='recent_forum'>
            <span style={{color:"rgb(10, 82, 130)", fontWeight:"bold"}}>Recent Forum Topics</span><br />
            <a href="#">View All</a>
            <hr />
            
                <li>What's Your Most Recent NSV</li>
                <li>Lost 50 pounds, still have a LONG way to go...</li>
                <li>1 Year Transformation/ Testimonials!!!</li>
                <li>"If nothing changes, nothing changes."</li>
                <li>Looking for ladies "tummy apron" success stories!
</li>
            

        </div>
        <div className='hellohelthy'>
            <img src="https://d34yn14tavczy0.cloudfront.net/ember-cli/fe8debda5e8d/images/widgets/ic_hellohealthy.png" alt="" />
            <a href="#">View All</a>
            <hr />
            <span className='topics'>7 Green Veggies You Haven't Tried, But Totally Should</span><br />
            <span>These are nutritionists’ favorite under-the-radar picks.</span><br />
            <a href="">Read More</a> <br />
            <span className='topics'>10 Spring Fruits and Vegetables to Eat Now</span><br />
             <span>Load your plate with these RD-approved spring fruits and vegetables.</span><br />
             <a href="Read More"></a><br />
            <span className='topics'>Is White or Dark Meat Chicken Healthier?</span><br />
            <span>Chicken is a healthy protein and whether you opt for dark or light meat depends on your personal goals and preference.</span> <br />
            <a href="">Read More</a>

        </div>
    </div>
</div>

    </div>
  )
}

export default AfterHome