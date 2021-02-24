import React, {useState, useEffect, useRef} from 'react'
import sliderItems from './slideitems';
import ForwardArrow from '../../assets/img/forwardArrow.svg'

const Slider: React.FC = () => {

    type funcType = () => number

    const length = sliderItems.length;
    const [current, setCurrent] = useState<number>(0);
    const autoPlay = useRef<funcType>(() => 0);

    useEffect(() => {
        autoPlay.current = nextslide;
    })


    useEffect(() => {

        const play = ()=>{
            autoPlay.current();
        }
        const interval = setInterval(play, 3000)
        return () => clearInterval(interval);
    },[])

    const nextslide = ():number => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        return current
    }

    if (!Array.isArray(sliderItems)){
        return null
    }


    return (
        <div className="slider">
            {
                sliderItems.map((item, index) => {
                return(
                    <div className={current === index ? 'slide active' : 'slide'} key={index} >
                        { current === index && (<img src={item.img} alt="" className="image" />)
                        }
                    </div>
                         )
                })
                
                
            }
            <div className="progressBar">
                {sliderItems.map((slide, index) => {
                    return (
                        <div className={current === index ? 'station active' : 'station'} key={index}></div>
                    )
                })}
            </div>

            <div className="explore-box">
                <h2 className="title">Explore our Showroom</h2>
                <p className="description_text">
                    Not sure of what you’re looking for? 
                    No worries, use <span className="lighting">Lighting Xplorer</span> to see what you can get.
                </p>

                <button className="explore-btn">Proceed to Lighting Xplorer <img src={ForwardArrow} alt="" /></button>

                
            </div>
        </div>
    )
}

export default Slider
