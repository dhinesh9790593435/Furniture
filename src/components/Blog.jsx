import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/style/Blog.css'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'


const Blog = () => {
  return (
    <div>
        <Container>
          <div className="blog_header">
            <h2>Recents Blog</h2>
            <a href="">View All Posts </a>
        </div>
        
        <div className="blog_card">
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog1} />
      <Card.Body>
        <Card.Title>First Time Home Owner Ideas</Card.Title>
        <Card.Text>
          by Kristin Watson on Dec 19, 2021
        </Card.Text>
       
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog2} />
      <Card.Body>
        <Card.Title>How To Keep Your Furniture Clean</Card.Title>
        <Card.Text>
          by Robert Fox on Dec 15, 2021
        </Card.Text>
 
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog3} />
      <Card.Body>
        <Card.Title>Small Space Furniture Apartment Ideas</Card.Title>
        <Card.Text>
         by Kristin Watson on Dec 12, 2021
        </Card.Text>
      
      </Card.Body>
    </Card>
        </div>
        </Container>
    </div>
  )
}

export default Blog