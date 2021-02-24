import React, {useState } from 'react'
import { Link } from 'react-router-dom';

import hamburger from '../../assets/img/Fbars.svg'
import close from '../../assets/img/close.svg'
import logo from '../../assets/img/logo.svg'
import cart from '../../assets/img/cart.svg'
import account from '../../assets/img/account.svg'
import list from '../../assets/img/list.svg'

const Navlinks: React.FC<{className:string}> = ({className}) => {



    return (
        <div className={`navwrap ${className}`}>
            <ul className = "nav-item">
                <li className="orange"> <Link to="/">LIGHTING Explorer </Link></li>
                <li className="orange"><Link to="/">OFFICE</Link></li>
                <li className="orange"><Link to="/">HOTEL </Link></li>
                <li className="orange"><Link to="/">Home </Link></li>
                <li><Link to="/">All Products</Link></li>
                <li><Link to="/">PENDANT LIGHT</Link></li>
                <li><Link to="/">CHANDELIER</Link></li>
                <li><Link to="/">SWITCHES & SOCKETS</Link></li>
                <li><Link to="/">CEILING LAMP</Link></li>
                <li><Link to="/">WALL LAMP</Link></li>
            </ul>
            
        </div>
    )
}



const Navbar: React.FC = () => {

    
    const [open, setopen] = useState<boolean>(false);
    const style = open ? "navlinks-active" : "navlinks";

    const menu = () => {
        setopen(!open);
    }

    return (
        <>
        <div className="navbar">
            <div className="hambuger"><img src={ open ? close : hamburger } alt="" onClick={menu} /></div>
            <div className="logo"> <img src={logo } alt="" /></div>
            <div className="util">
                <div className="account">
                    <img src={account} alt="" />
                </div>

                <div className="list">
                    <img src={list} alt="" />
                </div>

                <div className="cart">
                    <img src={cart} alt="" />
                    <div className="cart_word">CART</div>
                </div>
            </div>
            <form action="" method="post" className="search-form">
                <input type="text" name="search" className="search-field" placeholder="Search for a product, category or space." />
            </form>
            </div>
            <Navlinks className={ style}/>
        </>
    )
}

export default Navbar
