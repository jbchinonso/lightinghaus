import React from 'react'
import { Link } from 'react-router-dom'
import { carouselData } from './spaceData'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import Prev from '../../assets/img/arrowback.svg';
import Next from '../../assets/img/arrownext.svg';

const categories = () => {

    // type SliderType = {
    //     slickPrev(): void;
    //     slickNext(): void;
    // }

    const sliderRef = React.createRef<Slider>();

    const previous = () => {
        sliderRef.current?.slickPrev()
    }

    const next = () => {
        sliderRef.current?.slickNext();
    }

const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: window.innerWidth >= 768 ? 2 : 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
};
    
    return (
        <div className="categories">
            <div className="top_title">
                <span className="mobile_title">Featured</span>
                <span className="desktop_title">Popular</span>  Categories

                <span className="view_all"><Link to="">View all</Link></span>
            </div>
            <Slider ref={sliderRef} {...settings} className="sliderlib">
                {
                    carouselData.map((item, index) => {
                        return (
                            <div className="carousel" key={index}>
                                <img src={item.img} alt="" />
                                <div className="carousel_name">{ item.name}</div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="scrollbars">
                <div className="scrolls">
                <div className="scrollprev" onClick={previous}><img src={Prev} alt="" /></div>
                <div className="scrollnext" onClick={next}><img src={Next} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default categories
