import React from "react";
import "../../assets/styles/modules/hero.scss";

import Button from "../atoms/Button"
const Hero = ({data}) => {
    if(data.display===0){
        return (
            <div className="hero">
                <div className="hero-container">

                    <div className="left">
                        <img src={data.image} alt="image"/>
                    </div>
                    <div className="right">
                        <h1>{data.title}</h1>
                        {data.display === 0 && data.primaryParagraph && (<p>{data.primaryParagraph}</p>)}
                        <p className="secondary">{data.secondaryParagraph}</p>
                        <Button type="link" color="purple" text={data.btn1}/>
                        <Button type="link" text={data.btn2}/>
                    </div>
                </div>
            </div>
        )
    }
    if(data.display===1){
        return (
            <div className="hero">
                <div className="hero-container reverse">
                    <div className="left">
                        <h1>{data.title}</h1>
                        <p>{data.primaryParagraph}</p>
                        <p className="secondary">{data.secondaryParagraph}</p>
                        <Button type="link" color="purple" text={data.btn2}/>
                        <Button type="link" text={data.btn2}/>
                    </div>
                    <div className="right">
                    <img src={data.image} alt="image"/>
                     
                    </div>
                </div>
            </div>
        )
    }
    if(data.display===2){
        return (
            <div className="hero">
                <div className="hero-container-no-img">
                        <h1>{data.title}</h1>
                        <p>{data.primaryParagraph}</p>
                        <p className="secondary">{data.secondaryParagraph}</p>
                        <Button type="link" color="purple" text={data.btn1}/>
                        <Button type="link" text="data.btn2"/>
                </div>
            </div>
        )
    }
}
export default Hero