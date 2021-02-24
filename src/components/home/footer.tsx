import React from 'react'
import storeIcon from '../../assets/img/storeIcon.svg';
import appleStore from '../../assets/img/appleStore.svg';
import googleStore from '../../assets/img/googleStore.svg';
import whattsapp from '../../assets/img/whattsapp.svg'
import linkedin from '../../assets/img/linkedin.svg'
import youtube from '../../assets/img/youtube.svg'
import twitter from '../../assets/img/twitter.svg'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'
import logo from '../../assets/img/footerLogo.svg'
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="column1">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <span>
                        /Talk about the company here/
Brighten your nights with modern designer lighting from Thelightinghaus.com Our range features top brands and all the latest contemporary lighting styles to illuminate your home and garden.

                    </span>
                </div>
                <div className="column2">
                    <div className="title">
                        Quick Links
                    </div>

                    <ul className="links">
                        <li className="orange"><Link to="/">LIGHTING Explorer </Link></li>
                        <li><Link to="/">OFFICE</Link></li>
                        <li><Link to="/">HOTEL</Link></li>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/">MY ACCOUNT</Link></li>
                        <li><Link to="/">CART</Link></li>
                    </ul>
                </div>

                <div className="column3">
                     <div className="title">
                        Connect
                     </div>
                    <span>Connect with us on social media</span>
                    <div className="social_icons">
                        <img src={whattsapp} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={youtube} alt="" />
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt=""/>
                    </div>
                </div>
                <div className="column4">
                    <div className="store_top">
                        <img src={storeIcon} alt="" />
                        <span>
                            <span className="bolded">
                                Download our mobile app
                            </span>
                            Get access to exclusive offers
                        </span>
                    </div>

                    <div className="store_icons">
                        <img src={appleStore} alt="" />
                        <img src={googleStore} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
