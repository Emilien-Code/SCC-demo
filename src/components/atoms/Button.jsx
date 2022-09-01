import React from "react";

import "../../assets/styles/atoms/button.scss";
import arrow from  "../../assets/images/icons/arrow.svg";

const Button = ({type, arrowDirection, text, color, triggerParentFunction, link}, props) => {
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
                        <img
                            src={arrow}
                            className="topArrow" 
                            alt="arrow"
                        />
                    </div>
                )
            }
            return(
                <button className="arrow-btn" onClick={triggerParentFunction}>
                    <img
                        src={arrow}
                        className={(arrowDirection === 'right' ? "right" : "") + (arrowDirection === 'left' ? "left" : "") + (arrowDirection === 'top' ? "top" : "")} 
                        alt={arrowDirection + "arrow"}
                    />
                </button>
            )
    }
}
export default Button;