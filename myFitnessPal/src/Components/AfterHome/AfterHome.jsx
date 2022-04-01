import React from 'react'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import "../AfterHome/AfterHome.css"
function AfterHome() {
  return (
    <div className='all_divs'>

<div className='addd_1'><img src="https://s0.2mdn.net/simgad/18061351812913099779" alt="" /></div>
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
                    <span className='upload_photo'>upload photo</span>
                </div>
                <div className='info_avatar'>
                    <div className='upper_info_avatar'>
                        <div className='calories_view'>
                            <span style={{fontSize:"14px", lineHeight:0, color:"gray"}}>calories remaining change</span><br />
                            <span style={{fontSize:"45px",lineHeight:0.7, fontWeight:"bold", color:"rgb(133, 196, 0)"}}>2370</span>
                        </div>
                        <div className='buttons'>
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
        <div className='add_friends'></div>
    </div>

    <div className='right_bar'></div>
</div>

    </div>
  )
}

export default AfterHome