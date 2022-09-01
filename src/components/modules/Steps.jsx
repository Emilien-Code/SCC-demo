import React from "react";

import Step from "../atoms/Step"

import "../../assets/styles/modules/steps.scss";


const Steps = ({data}) => {
    return (
        <div className="steps">
            <div className="step-container">
                {
                    data.stepsContent.map((stepContent, index)=> {
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