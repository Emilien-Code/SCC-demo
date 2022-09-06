import * as React from "react"

import { graphql } from "gatsby";

// SliceMachine
import SliceMachine from "../components/utils/SliceMachine"

//Modules

//Content
const video = "https://source.unsplash.com/random/1144×606?buildings";
const client_image = "https://source.unsplash.com/random/1144×606?buildings";
const  sliderImage  = "https://source.unsplash.com/random/300×300?buildings";



const IndexPage = ({data}) => {

  const slices = []
  slices.push(data.sanityLanding.header)
  slices.push(...data.sanityLanding.contenu)
  slices.push(data.sanityLanding.footer)
  console.log(slices)

return (
    <>
      <SliceMachine 
      Slices={slices}/>
    </>
  )
}

export default IndexPage



export const query = graphql`
query MyQuery {

  sanityLanding {
    header {
      display
      _type
    }
    contenu{
      ... on SanityHero {
        _key
        _type
        display
        firstButton
        primaryParagraph
        seccondButton
        secondaryParagraph
        title
        altText
        image{
          asset{
            publicUrl
          }
        }
      }
      ... on SanityMedia {
        _type
        title
        primaryParagraph
        altText
        image{
          asset{
            publicUrl
          }
        }
      }
      ... on SanitySlider {
        _type
        display
        name
        slides{
          title
          paragraph
          altText
          image{
            asset{
              publicUrl
            }
          }
        }
      }
      ... on SanitySteps {
        _type
        name
        steps {
          img
          link
          paragraph
          title
        }
      }
    }
    footer {
      display
      _type
    }
  }

}`;


