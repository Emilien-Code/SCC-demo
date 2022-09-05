import * as React from "react"

import "../../assets/styles/modules/Medias.scss";
import defaultImg from "../../assets/images/client-images/Image2.png"
import defaultVid from "../../assets/images/client-videos/Video.png"
import SanityImage from "gatsby-plugin-sanity-image"



const Medias = ({data}) => {
    return (
        <div className="medias">
            <div className="media-container">
                {data.title&&(<h1>{data.title}</h1>)}
                {data. primaryParagraph&&(<p>{data. primaryParagraph}</p>)}
                {data.image ? (
                    //<img src={data.image ? data.image : defaultImg} alt="visioneuse photo"/>
                    <SanityImage 
                        {...data.image}
                    />
                    ):(
                    <img src={data.video ? data.video : defaultVid} alt="vide Lecteur"/>
                )}
            </div>
        </div>
    )
}

export default Medias


