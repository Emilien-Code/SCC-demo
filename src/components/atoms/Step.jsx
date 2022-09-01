import React from "react";

import "../../assets/styles/atoms/step.scss";
import bolt from "../../assets/images/icons/steps/bolt.png"
import cloud from "../../assets/images/icons/steps/cloud.png"
import lock from "../../assets/images/icons/steps/lock-alt.png"
import tool from "../../assets/images/icons/steps/tool.png"


const Step = ({data}) => {
    return (
        <div className="step">
            <img 
                src={
                    (data.img==="bolt" ? bolt : "")||
                    (data.img==="cloud" ? cloud : "")||
                    (data.img==="lock" ? lock : "")||
                    (data.img==="tool" ? tool : "")
                } 
                alt={data.img}
            />
            <p>{data.title}</p>
            <p className="secondary">{data.paragraph}</p>
            {data.link !== null && (<a href={data.link}>Let see <span>→</span></a>)}
        </div>
    )
}
export default Step