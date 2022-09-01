import React from "react";
import "../../assets/styles/atoms/slide.scss";

const Slide = ({data}) => {
    return (
        <div className="slide">
            <img src={data.sliderImage} alt="sliderImg" />
            <h1>{data.title}</h1>
            <p>{data.p}</p>
        </div>
    )
}
export default Slide