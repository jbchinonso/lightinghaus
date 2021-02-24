import React from 'react'
import { Link } from 'react-router-dom'
import spaceData from './spaceData';

const space:React.FC = () => {
    return (
        <div className="space">
            <div className="title"><span className="heading">Shop By Space</span>  <span><Link to="">View all</Link></span></div>
            <p>Select the type of apartment you want to light up.</p>
                <div className="space_display">
            {
                spaceData.map((space, index) => {
                    return (
                        <div className="space_container" key={index}>
                            <div className="space_image">
                            <img src={space.img} alt={space.name} />
                            </div>

                            <div className="space_name">{ space.name }</div>

                        </div>
                    )
                })
            }
                </div>
        </div>
    )
}

export default space
