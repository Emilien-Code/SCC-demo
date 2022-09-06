import React from "react";
import "../../assets/styles/atoms/slide.scss";

import defaultImg from '../../assets/images/client-images/Sliders-img/Image.png'


const Slide = ({data}) => {
    return (
        <div className="slide">
            {<img src={data.image.asset.publicUrl ? data.image.asset.publicUrl : defaultImg} alt={data.altText} /> }
            <h1>{data.title}</h1>
            <p>{data.paragraph}</p>
        </div>
    )
}
export default Slide