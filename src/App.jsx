import './App.css'
import {Route, Router, Routes} from 'react-router-dom'
import Home from './pages/Home'



function App() {
 

  return (
    <>

   <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> */}
    </Routes>
       
    </>
  )
}

export default App
