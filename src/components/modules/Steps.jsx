import React from "react";

import Step from "../atoms/Step"

import "../../assets/styles/modules/steps.scss";


const Steps = ({data}) => {
    console.log(data)
    if(!data.steps || data.steps.length === 0){
        return(
            <>Aucunes étapes renseignées</>
        )   
    }
    return (
        <div className="steps">
            <div className="step-container">
                {
                    data.steps.map((stepContent, index)=> {
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