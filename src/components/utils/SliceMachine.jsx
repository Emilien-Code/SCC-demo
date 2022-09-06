import React from "react";

// //Modules
import StepsModule from "../../components/modules/Steps"
import MediaModule from "../../components/modules/Medias"
import Sliders from "../../components/modules/Sliders"
import HeroModule from "../../components/modules/Hero"
import HeaderModule from "../../components/modules/Header"
import FooterModule from "../../components/modules/Footer"


const SliceMachine = ({Slices}) => {
    return(
        Slices.map((slice, index) => {
            switch (slice._type) {
                case 'header':
                    return <HeaderModule key={index} data={slice}/>
                case 'hero':
                    return <HeroModule 
                            data={slice}
                            key={index}
                            />
                case 'steps':
                    return <StepsModule 
                            data={slice}
                            key={index}
                            />
                case 'Media':
                    return <MediaModule
                            data={slice}
                            key={index}
                            //image={grand_image}
                            />
                case 'Slider':
                    return <Sliders 
                            key={index}
                            data={slice}
                            />
                case "footer" : 
                    return <FooterModule key={index} data={slice}/>
                default:
                    return (<p key={index}>Aucuns composants</p>)
            }
        })
    )
}

export default SliceMachine;