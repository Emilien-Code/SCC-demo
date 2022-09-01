import * as React from "react"

import "../../assets/styles/modules/Medias.scss";

const Medias = ({data}) => {
    return (
        <div className="medias">
            <div className="media-container">
                {data.title&&(<h1>{data.title}</h1>)}
                {data.paragraph&&(<p>{data.paragraph}</p>)}
                {data.video&&(<img src={data.video} alt="videoLecteur"/>)} 
                {data.image&&(<img src={data.image} alt="videoLecteur"/>)} 
            </div>
        </div>
    )
}

export default Medias


