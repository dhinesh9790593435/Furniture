import '../assets/style/Why_choose.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import bag from '../assets/images/bag.svg'
import truck from '../assets/images/truck.svg'
import support from '../assets/images/support.svg'
import returns from '../assets/images/return.svg'
import dots_yellow from '../assets/images/dots-yellow.svg'
import why_choose from '../assets/images/why-choose-us-img.jpg'
import shoba1 from '../assets/images/shoba1.png'
import shoba2 from '../assets/images/shoba2.png'
import shoba3 from '../assets/images/shoba3.png'
import modern1 from '../assets/images/modern1.jpg'
import modern2 from '../assets/images/modern2.jpg'
import modern3 from '../assets/images/modern3.jpg'
import modern4 from '../assets/images/modern4.svg'


const Why_choose = () => {
  return (
    <div>
        <div>
            <Container>
                <Row>
            <div className='col-lg-6 why_choose_content mt-5'>
                <h2>Why Choose Us</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                <div class="parent mt-5">
                    <div class="div1"> 
                        <Card style={{ width: '18rem' }}>
                            <Card.Img id='card_img' variant="top" src={truck} />
                            <div className='card_circle'></div>
                            <Card.Body>
                                <Card.Title>Fast & Free Shipping</Card.Title>
                                <Card.Text>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                                </Card.Text>
                              
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="div2"> 
                        <Card style={{ width: '18rem' }}>
                            <Card.Img id='card_img' variant="top" src={bag} />
                             <div className='card_circle'></div>
                            <Card.Body>
                                <Card.Title>Easy to Shop</Card.Title>
                                <Card.Text>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="div3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img id='card_img' variant="top" src={support} />
                             <div className='card_circle'></div>
                            <Card.Body>
                                <Card.Title>Hassle Free Returns</Card.Title>
                                <Card.Text id='card_para'>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="div4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img id='card_img' variant="top" src={returns} />
                             <div className='card_circle'></div>
                            <Card.Body>
                                <Card.Title>24/7 Support</Card.Title>
                                <Card.Text>
                               Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            <div className='col-lg-6'>
                 
                <img style={{marginLeft:'50px'}} src={dots_yellow}></img>
                <img className='why_choose_big_img' src={why_choose}></img>
            </div>
        </Row>




            <div className='modern_interior' style={{height:'730px'}}>    
                <Row>
                    <div className="col-lg-7">
                       
                        <img src={modern1}></img>
                        <img src={modern2}></img>
                        <img src={modern3}></img>
                        <img src={modern4}></img>
                    </div>
                    <div className="col-lg-5 modern_interior_content">
                        <h1>We Help You Make Modern </h1>
                        <h1>Interior Design</h1>
                        <p className='mt-5'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                        <div className='lists'>
                           <button className='home_content_div_button1'>Explore</button>
                        </div>
                    </div>
                </Row>
            </div>


        <div className='modern_interior_cards'>
            <div className="modern_interior_card">
                <div className="images">
                    <div className="background_layer"></div>
                    <img src={shoba1} alt="" />
                </div>
                <div className="content">
                    <h3>Nordic Chair</h3>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <a href="">Read more</a>
                </div>
            </div>

            <div className="modern_interior_card">
                <div className="images">
                    <div className="background_layer"></div>
                    <img src={shoba2} alt="" />
                </div>
                <div className="content">
                    <h3> Kruzo Aero Chair</h3>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <a href="">Read more</a>
                </div>
            </div>

            <div className="modern_interior_card">
                <div className="images">
                    <div className="background_layer"></div>
                    <img src={shoba3} alt="" />
                </div>
                <div className="content">
                    <h3>Ergonomic Chair</h3>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <a href="">Read more</a>
                </div>
            </div>
        </div>


            </Container>
        </div>
    </div>
  )
}

export default Why_choose