import React from "react";

import Step from "../atoms/Step"

import "../../assets/styles/modules/steps.scss";

import bolt from "../../assets/images/icons/steps/bolt.png"
import cloud from "../../assets/images/icons/steps/cloud.png"
import lock from "../../assets/images/icons/steps/lock-alt.png"
import tool from "../../assets/images/icons/steps/tool.png"

const stepsContent = [{
    link: null,
    img : bolt,
    paragraph : "Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus.",
    title : "Build your own cloud",
    link:"/"
},{
    link: null,
    img : cloud,
    paragraph : "Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus.",
    title : "Protect your data",
    link:"/"
},{
    link: null,
    img : lock,
    paragraph : "Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus.",
    title : "Host everything",
    link:"/"
},{
    link: null,
    img : tool,
    paragraph : "Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus.",
    title : "Fast & reliable",
    link:"/"
}]

const Steps = () => {
    return (
        <div className="steps">
            <div className="step-container">
                {
                    stepsContent.map((stepContent, index)=> {
                        return(
                            <Step
                            key={index} 
                            data={stepContent}
                            />
                            )
                    })
                }
            </div>
        </div>
    )
}
export default Steps