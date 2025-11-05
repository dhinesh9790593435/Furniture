import Container from 'react-bootstrap/esm/Container'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { RiShareForwardFill } from "react-icons/ri";
import '../assets/style/footer.css'

const Footer = () => {
  return (
    <div>
        <Container>
          <div className="footer">
                <div className='form'>                 
                  <span><CiMail/></span>
                  <span>Subscribe to Newsletter</span>
                </div>
                <div className="inputs">
                    <input type='text' placeholder='Enter your name'></input>
                    <input type='text' placeholder='Enter your email'></input>
                    <button><RiShareForwardFill /></button>
                </div>

                <div className="footer_content mt-5">
                  

                  <div className="section1">
                    <h3>Furni.</h3>
                    <p className='mt-5'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

                    <div className="social_media">
                       <h4><TiSocialFacebook /></h4>
                       <h4><FaTwitter /></h4>
                       <h4><IoLogoInstagram /></h4>
                       <h4><RiLinkedinBoxFill /></h4>
                    </div>
                  </div>
                  <div className="section2 mt-5">
                    <ul>
                      <li>About us</li>
                      <li>Services</li>
                      <li>Blog</li>
                      <li>Contact us</li>
                    </ul>
                  </div>
                  <div className="section3 mt-5">
                    <ul>
                      <li>Support </li>
                    <li>knowledge base</li>
                    <li>Live chat</li>
                    </ul>
                  </div>
                  <div className="section4 mt-5">
                    <ul>
                      <li>Jobs </li>
                    <li> Our team</li>
                    <li>Leadership</li>
                    <li>Privacy policy</li>
                    </ul>
                  </div>
                  <div className="section5 mt-5">
                    <ul>
                      <li>Nordic Chair </li>
                    <li> Kruzo Aero</li>
                    <li>Ergonomic Chair</li>
                    </ul>
                  </div>
                </div>


                <div className="copyright">
                   <div className="left">
                       <p>Copyright ©2025. All Rights Reserved. — Designed withlove by Untree.co Distributed By <br></br>  ThemeWagon</p>
                   </div>
                   <div className="right">
                      <p>Terms & Conditions  Privacy Policy</p>
                   </div>
                </div>
          </div>
        </Container>
       
    </div>
  )
}

export default Footer