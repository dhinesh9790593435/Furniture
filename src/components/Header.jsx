import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../assets/style/Home.css'
import Row from 'react-bootstrap/Row';
import shoba from '../assets/images/shoba.png'
import dot from '../assets/images/dots-light.svg'
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div>

      <div className='header'>
         
             {/* Home content */}

         <Container>
            <Row>

               <div className='home_content_header'>
                  <div className='col-lg-6 logo'>
                    <h3>Furni <span>.</span></h3>
                  </div>

                  <div className='col-lg-6 links'>
                    <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="">Shop</a></li>
                      <li><a href="">About </a></li>
                      <li><a href="">Services</a></li>
                      <li><a href="">Blog</a></li>
                      <li><a href="">Contact</a></li>
                      <span><CgProfile/></span>
                      <span><FiShoppingCart/></span>
                    </ul>
                  </div>
               </div>


               
                 <div className='home_main'>
                      <div className='home_content'>
                      <h3>Modern Interior</h3>
                      <h3>Design Studio</h3>
                      <p className='mt-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet 
                        <br></br>velit. Aliquam  vulputate velit imperdiet dolor tempor tristique.</p>
                      <div className='mt-4'>
                        <button className='home_content_div_button1'>Shop Now</button>
                        <button className='home_content_div_button2'>Explore</button>
                      </div>
                    </div>

                    <div className='home_content_image'>
                      <img src={shoba} alt="" />
                      <img src={dot} alt="" />
                    </div>
                 </div>
               
            </Row>
         </Container>

      </div>

    </div>
  )
}

export default Header