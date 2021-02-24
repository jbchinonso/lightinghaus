import React from 'react'
import { productsData } from './spaceData'

const MobileProducts:React.FC = () => {
    const products = productsData.slice(0, 6);

    return (
        <div className="mobile_products">
            <div className="mobile_products_title">Popular Categories</div>
            <div className="mobile_products_display">
                {
                    products.map((product, index) => {
                        return (
                            <div className="mobile_product" key={index}>
                                <div className="image">
                                    <img src={product.img} alt={product.name} />
                                </div>
                                <span className="mobile_product_name">{ product.name }</span>
                            </div>
                        )
                    })
                }
            </div>
            <input type="button" value="View All Products"  />
        </div>
    )
}




export default MobileProducts