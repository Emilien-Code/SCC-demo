import * as React from "react"

import { graphql } from "gatsby";

// SliceMachine
import SliceMachine from "../components/utils/SliceMachine"

//Modules

//Content
const video = "https://source.unsplash.com/random/1144×606?buildings";
const client_image = "https://source.unsplash.com/random/1144×606?buildings";
const  sliderImage  = "https://source.unsplash.com/random/300×300?buildings";
const workArray = [
  {
    type: "header",
    display: "search"
  },{
    type:"Hero",
    title:"Manage all your company's work at once",
    primaryParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in sollicitudin quam, eu auctor elit. Integer id urna id tortor convallis semper sed sed odio. ", 
    secondaryParagraph:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus. Quisque luctus ex in sapien lacinia ullamcorper.", 
    display:"img-right",
    alternativeText:"illustration",
    btn1:"Join Wait List",
    btn2:"Request a demo",
    image: client_image,
  },{
    type:"Steps",
    stepsContent : [{
      img : "bolt",
      paragraph : "Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus.",
      title : "Build your own cloud",
      link:"/"
  },{
      img : "cloud",
      paragraph : "Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus.",
      title : "Protect your work",
      link:"/"
  },{
      img : "lock",
      paragraph : "Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus.",
      title : "Host everything",
      link:"/"
  },{
      img : "tool",
      paragraph : "Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus.",
      title : "Fast & reliable",
      link:"/"
  }]
  },{
    type:"Media",
    title:"Manage your tasks in the same place",
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in sollicitudin quam, eu auctor elit. Integer id urna id tortor convallis semper sed sed odio. ",
    image : client_image,
  },{
    type:"Sliders",
    display: "arrows_split_center",
    content: [
      {
        alternativeText:"illustration",
        sliderImage,
        title: "Build your own cloud",
        p:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus."
      },
      {
        sliderImage,
        alternativeText:"illustration",
        title: "Build your own cloud",
        p:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus."
      },
      {
        sliderImage,
        title: "Build your own cloud",
        p:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus."
      },
      {
        sliderImage,
        alternativeText:"illustration",
        title: "Build your own cloud",
        p:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus."
      },
      {
        sliderImage,
        alternativeText:"illustration",
        title: "Build your own cloud",
        p:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus."
      },
      {
        sliderImage,
        alternativeText:"illustration",
        title: "Build your own cloud",
        p:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus."
      },
      {
        sliderImage,
        alternativeText:"illustration",
        title: "Build your own cloud",
        p:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus."
      },
    ]
  },
  {
    type: "footer",
    display: "column"
  }];


const IndexPage = ({data}) => {

  // let PROJECT_ID = "h3asrjaf";
  // let DATASET = "production";
  // let QUERY = encodeURIComponent('*[_type == "header"]');
  // // Compose the URL for your project's endpoint and add the query
  // let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  const slices = [
    data.sanityHeader,
    data.sanityHero,
    data.sanityMedia,
    data.sanityFooter,
    data.sanitySlider,
    data.sanitySteps
  ]

  return (
    <>
      <SliceMachine 
      Slices={slices}/>
      {/* Slices={workArray}/> */}
    </>
  )
}

export default IndexPage



export const query = graphql`
query MyQuery {
  sanityHeader {
    display
    internal {
      type
    }
  }
  
  sanityHero {
    internal {
      type
    }
    display
    title
    secondaryParagraph
    primaryParagraph
    firstButton
    seccondButton
    image{
      asset{
        id
        height
        gatsbyImageData
        gatsbyImage
        filesize
        filename
        extension
        description
        assetId
        _updatedAt
        _type
        _rev
        _rawSource
        _rawMetadata
        _key
        _id       id
        height
        gatsbyImageData
        gatsbyImage
        filesize
        filename
        extension
        description
        assetId
        _updatedAt
        _type
        _rev
        _rawSource
        _rawMetadata
        _key
        _id
      }
    }
  }



  sanityMedia {
    image{
      asset{
        id
        height
        gatsbyImageData
        gatsbyImage
        filesize
        filename
        extension
        description
        assetId
        _updatedAt
        _type
        _rev
        _rawSource
        _rawMetadata
        _key
        _id       id
        height
        gatsbyImageData
        gatsbyImage
        filesize
        filename
        extension
        description
        assetId
        _updatedAt
        _type
        _rev
        _rawSource
        _rawMetadata
        _key
        _id
      }
    }
    title
    primaryParagraph
    internal {
      type
    }
  }
  


  sanityFooter {
    display
    internal {
      type
    }
  }


  sanitySlider {
    display
    slides {
      title
      paragraph
      image{
        asset{
          id
          height
          gatsbyImageData
          gatsbyImage
          filesize
          filename
          extension
          description
          assetId
          _updatedAt
          _type
          _rev
          _rawSource
          _rawMetadata
          _key
          _id       id
          height
          gatsbyImageData
          gatsbyImage
          filesize
          filename
          extension
          description
          assetId
          _updatedAt
          _type
          _rev
          _rawSource
          _rawMetadata
          _key
          _id
        }
      }
    }
    internal {
      type
    }
  }
  sanitySteps {
    steps {
      name
      paragraph
      link
      img
    }

    internal {
      type
    }
  }



}`;


