import React from "react";
import "../../assets/styles/modules/hero.scss";
import defaultImg from "../../assets/images/client-images/Image2.png"
import Button from "../atoms/Button"
const Hero = ({data}) => {
    console.log(data)
    if(data.display==="img-left" || data.display==="img-right" ){
        return (
            <div className="hero">
                <div className={"hero-container " + (data.display ==="img-right" ?  "reverse" : "")}>
                    <div className="img-container">
                        <picture>
                            {<img src={data.image.asset.publicUrl ? data.image.asset.publicUrl : defaultImg} alt={data.altText}/>}
                        </picture>
                    </div>
                    <div className="right">
                        <h1>{data.title}</h1>
                        {data.primaryParagraph && (<p>{data.primaryParagraph}</p>)}
                        <p className="secondary">{data.secondaryParagraph}</p>
                        <Button type="link" color="purple" text={data.firstButton}/>
                        <Button type="link" text={data.seccondButton}/>
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
                        <Button type="link" color="purple" text={data.firstButton}/>
                        <Button type="link" text={data.seccondButton}/>
                </div>
            </div>
        )
    }
    return(
        <p>Aucuns affichage pour le hero</p>
        )
}
export default Hero