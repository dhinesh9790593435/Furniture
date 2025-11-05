"use client";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import '../assets/style/Home.css'
import Container from "react-bootstrap/esm/Container";
import '../assets/style/card.css'
import img1 from '../assets/images/shoba1.png'
import img2 from '../assets/images/shoba2.png'
import img3 from '../assets/images/shoba3.png'


export function ThreeDCardDemo() {
  return (
    <div className="card_section">

      <Container className="card_section">

        <div className="card_content">
        <h2>Crafted with </h2>
        <h2>excellent material.</h2>
        <p className="mt-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        <button  style={{background:'#2f2f2f',color:'white'}} className="home_content_div_button1 mt-3">Explore</button>
      </div>
     

      <div>
      <CardContainer className="inter-var cards">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6   ">
       
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img1}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem>
            Nordic Chair
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="card_inside_btn px-4 py-2 rounded-xl  dark:bg-white dark:text-black text-white text-xs font-bold">
            Buy Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

      </div>


     <div>
           <CardContainer className="inter-var cards">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6  ">

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img2}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem>
            Nordic Chair
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="card_inside_btn px-4 py-2 rounded-xl  dark:bg-white dark:text-black text-white text-xs font-bold">
           Buy Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

      </div>


    <div>
           <CardContainer className="inter-var cards">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6  ">
       
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img3}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem>
            Nordic Chair
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className=" card_inside_btn px-4 py-2 rounded-xl  dark:bg-white dark:text-black text-white text-xs font-bold">
            Buy Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

      </div>

 </Container>
    </div>

    
  );
}
