import React from 'react'
import spiral from '../../assets/img/spiral.svg'
import mail2 from '../../assets/img/mail2.svg'

const Newsletter = () => {
    return (
        <div className="news_letter">
            <div className="text_box">
                <div className="box_container">
                    <div className="row1">
                        <img src={mail2} alt="" />
                        Join our mailing list
                    </div>

                     <span className="subscribe_text">
                            Subscribe to our newsletter to get updates on our latest offers!
                        </span>

                    <div className="row2">

                        <input type="text" placeholder="Enter email address here"/>
                        
                        <input type="button" value="Subscribe"/>
                    </div>


                </div>
            </div>
            <div className="spiral_img_box">
                <img src={spiral} alt=""/>
            </div>
            
        </div>
    )
}

export default Newsletter
