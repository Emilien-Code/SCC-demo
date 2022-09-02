import React from "react";
import "../../assets/styles/atoms/slide.scss";

import defaultImg from '../../assets/images/client-images/Sliders-img/Image.png'

const Slide = ({data}) => {
    return (
        <div className="slide">
            <img src={data.sliderImage ? data.sliderImage : defaultImg} alt={data.alternativeText} />
            <h1>{data.title}</h1>
            <p>{data.p}</p>
        </div>
    )
}
export default Slide