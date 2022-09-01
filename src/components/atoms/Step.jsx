import React from "react";

import "../../assets/styles/atoms/step.scss";

const Step = ({data}) => {
    return (
        <div className="step">
            <img src={data.img} alt="icon"/>
            <p>{data.title}</p>
            <p className="secondary">{data.paragraph}</p>
            {data.link !== null && (<a href={data.link}>Let see →</a>)}
        </div>
    )
}
export default Step