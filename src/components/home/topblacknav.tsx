import React from 'react'
import '../../assets/css/style.scss'
import phone from '../../assets/img/phone.svg';
import location from '../../assets/img/location.svg';
import mail from '../../assets/img/mail.svg';

const TopBlackNav:React.FC = () => {
    return (
        <div className = "top_black_nav">
            <div className="phone">
                <div className="phone_icon"><img src={phone} alt="" />  </div>
                +234 802 501 8557
             </div>
            
            <div className="location">
                <div className="location_icon"> <img src={location} alt="" /> </div>
                35 Freedom Way, Lekki Phase 1, Lagos, Nigeria
            </div>

            <div className="mail">
                <div className="mail_icon"> <img src={mail} alt="" /> </div>
                sales@thelightinghaus.com
            </div>
        </div>
    )
}

export default TopBlackNav
