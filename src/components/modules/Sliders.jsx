import React from "react";
import "../../assets/styles/modules/slider.scss";
import Slide from "../atoms/Slide"
import Button from "../atoms/Button"
import { useState, useEffect } from "react"

const Sliders = ({data}) => {

    const [count, setCount] = useState(0)
    let slideArray;
    const step = 234;

    useEffect(()=>{ // une fois componentDidMount()
        slideArray = document.getElementsByClassName("slides-container")[0];
    }, [])

//    useEffect(()=>{ // à chaque changement componentUpdate()    })
    
    const next = () => {
        if(count < data.slides.length-1){
            setCount(count + 1)
        }
    }
    
    const prev = () => {
        if(count > 0 ){
            setCount(count - 1)
        }
    }



    if(!data.slides || data.slides.length === 0){
        return (<p>Aucun slides renseignées</p>)
    }

    return (
        <div className="slider">
            <div className="slides-container" 
            style={{
                transform: `translate(${-count * step}px, -50%)`,
                transition: ".5s ease-out ",

             }}
            >
                {
                    data.slides.map((el,index)=>{
                        return (<Slide data={el} key={index}/>)
                    })
                }
            </div>
            <div className={"btn-container " + 
                (data.display==="arrows_right_top" ? "top-left" : "" ) + 
                (data.display==="arrows_right_bottom" ? "bottom-left" : "" ) + 
                (data.display==="arrows_center_bottom" ? "bottom-center" : "" ) + 
                (data.display==="arrows_split_center" ? "center-bottom" : "" )  
                }>
                <Button 
                    triggerParentFunction={prev} 
                    type="arrow"
                    arrowDirection="left"
                />
                <Button type="arrow" triggerParentFunction={next} arrowDirection="right"/>
            </div>
        </div>
    )

}
export default Sliders