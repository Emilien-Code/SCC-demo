import * as React from "react"

import "../../assets/styles/modules/Medias.scss";
import defaultImg from "../../assets/images/client-images/Image2.png"
import defaultVid from "../../assets/images/client-videos/Video.png"


const Medias = ({data}) => {
    if(data.image){

    }else{
        console.log("non")
    }
    return (
        <div className="medias">
            <div className="media-container">
                {data.title&&(<h1>{data.title}</h1>)}
                {data.paragraph&&(<p>{data.paragraph}</p>)}
                {data.image ? (
                    <img src={data.image ? data.image : defaultImg} alt="visioneuse photo"/>
                    ):(
                    <img src={data.video ? data.video : defaultVid} alt="vide Lecteur"/>
                )}
            </div>
        </div>
    )
}

export default Medias


