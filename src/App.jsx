import './App.css'
import Header from '../src/components/Header'
import { ThreeDCardDemo } from '../src/pages/Card'
import Why_choose from './pages/Why_choose'
import {AnimatedTestimonialsDemo} from '../src/pages/Testimonial'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function App() {
 

  return (
    <>
        <Header/>
        <ThreeDCardDemo/>
        <Why_choose/>
        <AnimatedTestimonialsDemo/>
        <Footer/>
        {/* <Contact/> */}
    </>
  )
}

export default App
