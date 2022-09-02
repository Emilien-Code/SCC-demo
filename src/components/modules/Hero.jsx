import React from "react";
import "../../assets/styles/modules/hero.scss";
import defaultImg from "../../assets/images/client-images/Image2.png"

import Button from "../atoms/Button"
const Hero = ({data}) => {
    if(data.display==="img-left" || data.display==="img-right" ){
        return (
            <div className="hero">
                <div className={"hero-container " + (data.display ==="img-right" ?  "reverse" : "")}>
                    <div className="img-container">
                        <img src={data.image ? data.image : defaultImg} alt={data.alternativeText}/>
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
    if(data.display==="no-img"){
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
    return(
        <p>Aucuns affichage pour le hero</p>
        )
}
export default Hero