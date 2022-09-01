import * as React from "react"

// SliceMachine
import SliceMachine from "../components/utils/SliceMachine"

//Modules

//Content
import video from "../assets/images/client-videos/Video.png"
import client_image from "../assets/images/client-images/Image.png";
import sliderImage from "../assets/images/client-images/Sliders-img/Image.png"

const dataArray = [
  {
    type: "header",
    display: "search"
  },{
    type:"Hero",
    title:"Manage all your company's data at once",
    primaryParagraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in sollicitudin quam, eu auctor elit. Integer id urna id tortor convallis semper sed sed odio. ", 
    secondaryParagraph:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus. Quisque luctus ex in sapien lacinia ullamcorper.", 
    display:0,
    btn1:"Join Wait List",
    btn2:"Request a demo",
    image: client_image,
  },{
    type:"Steps",
  },{
    type:"Media",
    title:"Manage your tasks in the same place",
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in sollicitudin quam, eu auctor elit. Integer id urna id tortor convallis semper sed sed odio. ",
    video,
  },{
    type:"Sliders",
    display: "arrows_split_center",
    content: [
      {
        isTop : true,
        sliderImage,
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
        title: "Build your own cloud",
        p:"Nam sit amet pretium tortor. Praesent sagittis fermentum faucibus."
      },
    ]
  },
  {
    type: "footer",
    display: "inline"
  }
  ]


const IndexPage = () => {
  return (
    <>
      <SliceMachine Slices={dataArray}/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
