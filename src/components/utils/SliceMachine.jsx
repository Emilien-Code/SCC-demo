import React from "react";

// //Modules
import StepsModule from "../../components/modules/Steps"
import MediaModule from "../../components/modules/Medias"
import Sliders from "../../components/modules/Sliders"
import HeroModule from "../../components/modules/Hero"
import HeaderModule from "../../components/modules/Header"
import FooterModule from "../../components/modules/Footer"


const SliceMachine = ({Slices}) => {
    console.log(Slices[5].internal.type)
    return(
        Slices.map((slice, index) => {
            switch (slice.internal.type) {
                case 'SanityHeader':
                    return <HeaderModule key={index} data={slice}/>
                case 'SanityHero':
                    return <HeroModule 
                            data={slice}
                            key={index}
                            />
                case 'SanitySteps':
                    return <StepsModule 
                            data={slice}
                            key={index}
                            />
                case 'SanityMedia':
                    return <MediaModule
                            data={slice}
                            key={index}
                            //image={grand_image}
                            />
                case 'SanitySlider':
                    return <Sliders 
                            key={index}
                            data={slice}
                            />
                case "SanityFooter" : 
                    return <FooterModule key={index} data={slice}/>
                default:
                    return (<p key={index}>Aucuns composants</p>)
            }
        })
    )
}

export default SliceMachine;