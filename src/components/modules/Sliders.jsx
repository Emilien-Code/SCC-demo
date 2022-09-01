import React from "react";
import "../../assets/styles/modules/slider.scss";
import Slide from "../atoms/Slide"
import Button from "../atoms/Button"
import { useState, useEffect } from "react"



const Sliders = ({data}) => {

    const [count, setCount] = useState(0)
    let slideArray;
    let halfWindow;
    const date = new Date();

    const [lastCallNext, setLastCallNext] = useState(0)
    const [lastCallPrev, setLastCallPrev] = useState(0)
    useEffect(()=>{
        slideArray = document.getElementsByClassName("slide");
        halfWindow = window.innerWidth/2;
    })
    
    const next = () => {
        let found = false;
        let i = -1;
        let center = -1
        const now = date.getTime()
        console.log( now - lastCallNext )
        
        if(now - lastCallNext > 550){
            console.log( now - lastCallNext )

            while(!found){
                i++
                if(slideArray[i]){
                    const element = slideArray[i]
                    center = element.getBoundingClientRect().left + ( element.getBoundingClientRect().right -  element.getBoundingClientRect().left) /2
                    if(center > halfWindow){
                        found = true
                    }
                }else{
                    found = true
                }
            }
            
            if(center != -1){
                setCount(count + halfWindow-center)
            }
        }
        setLastCallNext(now)
    }
    
    const prev = () => {
        let found = false;
        let i = slideArray.length;
        let center = -1
        const now = date.getTime()
        if(now - lastCallPrev > 550){
            while(!found){
                i--
                if(slideArray[i]){
                    const element = slideArray[i]
                    center = element.getBoundingClientRect().left + ( element.getBoundingClientRect().right -  element.getBoundingClientRect().left) /2
                    if(center < halfWindow){
                        found = true
                    }
                }else{
                    found = true
                }
            }

            if(center != -1){
                setCount(count + halfWindow-center)
            }
            setLastCallPrev(now)
        }
    }

    return (
        <div className="slider">
            <div className="slides-container" 
            style={{
                transform: `translate(${count}px, -50%)`,
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