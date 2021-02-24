import React from 'react'
import { productsData } from './spaceData'
import {Link} from 'react-router-dom'

type proptype = {
    device?: string,
    title?: string,
}

const Products: React.FC<proptype> = ({ device, title }) => {
    const products = device === 'mobile' ? productsData.slice(0,3) : productsData;
    return (
        <div className={
            device ? device === 'desktop' ? "desktop_view products" : 'mobile_view products' : 'products'
        }>
            <div className="top_title">
                {/* if title prop is provided use it else use the one give here */}
                {title? <span> {title}</span>: <>
                <span className="mobile_title">Featured</span>
                    <span className="desktop_title">Popular</span>  Products
                </>}

                <span className="view_all"><Link to="">View all</Link></span>
            </div>
            <div className="product_display">
                {
                   
                    products.map((product, index) => {
                        return (
                            <div className="product" key={index}>
                                <div className="image"><img src={product.img} alt={product.name} /></div>
                                <span className="product_name">{product.name}</span>
                                <span className="product_price">{product.price}</span>
                                {product.old_price ? <span className='product_old_price'>{product.old_price}</span> : ""}
                                {product.discount ? <span className='product_discount'>{ product.discount} OFF</span> : ""}
                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}

export default Products
