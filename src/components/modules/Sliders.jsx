import React from "react";
import "../../assets/styles/modules/slider.scss";
import Slide from "../atoms/Slide"
import Button from "../atoms/Button"
import { useState, useEffect } from "react"



const Sliders = ({data}) => {

    const [count, setCount] = useState(0)
    
    
    const next = () => {
        if(count > -data.content.length+4) setCount(count - 1)
    }
    
    const prev = () => {
        if(count < 0 ) setCount(count + 1)
    }

    return (
        <div className="slider">
            <div className="slides-container" 
            style={{
                transform: `translate(${count * 234}px, -50%)`,
                transition: ".5s ease-out ",

             }}
            >
                {
                    data.content.map((el,index)=>{
                        return (<Slide data={el} key={index}/>)
                    })
                }
            </div>
            <div className={"btn-container " + 
                (data.display==="arrows_left_top" ? "top-left" : "" ) + 
                (data.display==="arrows_left_bottom" ? "bottom-left" : "" ) + 
                (data.display==="arrows_center_bottom" ? "bottom-center" : "" ) + 
                (data.display==="arrows_split_center" ? "center-bottom" : "" )  
                }>
                <Button 
                    triggerParentFunction={prev} 
                    type="arrow"
                    arrowDirection="left"
                    color="purple"
                    text={data.btn1}
                />
                <Button type="arrow" triggerParentFunction={next} arrowDirection="right" text={data.btn2}/>
            </div>
        </div>
    )

}
export default Sliders