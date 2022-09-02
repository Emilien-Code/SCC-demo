import React from "react";

import { useState, useEffect, useRef } from "react"
import "../../assets/styles/atoms/button.scss";
import arrow from  "../../assets/images/icons/arrow.svg";

const Button = ({type, arrowDirection, text, color, triggerParentFunction, link}, props) => {

    const btn = useRef(null)


    useEffect(()=>{

    })

    const btnClicked = ()=>{
        if(!btn.current.disabled){
            triggerParentFunction()
        }
        //disable the button
        btn.current.disabled = true
        
        setTimeout(()=>{
            btn.current.disabled = false
        },500)

    }




    switch (type) {
        case 'link' :
            return (
                <a href="/" className={"btn-link" + " " + color} {...props}>
                    <span>
                        {text}
                    </span>
                </a>
            )
        case 'arrow' :

            if(link){
                return(
                    <div className="arrow-btn btt">

                        <svg className="topArrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10.5L6 1.5" stroke="black" strokeLinecap="round"/>
                            <path d="M9 4.5L6 1.5L3 4.5" stroke="black" strokeLinecap="round"/>
                        </svg>

                    </div>
                )
            }
            return(
                <button className="arrow-btn" onClick={btnClicked} ref={btn}>

                    <svg className={(arrowDirection === 'right' ? "right" : "") + (arrowDirection === 'left' ? "left" : "") + (arrowDirection === 'top' ? "top" : "")} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10.5L6 1.5" stroke="black" strokeLinecap="round"/>
                        <path d="M9 4.5L6 1.5L3 4.5" stroke="black" strokeLinecap="round"/>
                    </svg>
                    
                </button>
            )
    }
}
export default Button;