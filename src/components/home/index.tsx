import React from 'react'
import TopBlackNav from './topblacknav'
import Navbar from './navbar'
import Slider from './slider'
import Space from './space'
import Categories from './categories'
import Products from './products'
import MobileProducts from './mobileProducts'
import Newsletter from './newsletter'
import Footer from './footer'

const index = () => {
    return (
        <div className = "container">
            <TopBlackNav />
            <Navbar />
            <Slider />
            <Space />
            <Products device="mobile" />
            <Categories />
            <Products device="desktop" />
            <Products device="desktop" title="Products on Sale" />
            <MobileProducts />
            <Newsletter />
            <Footer />
            <TopBlackNav />
        </div>
    )
}

export default index

