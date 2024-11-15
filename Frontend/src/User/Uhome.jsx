import React from 'react'
import Unavbar from './Unavbar'
import "./uhome.css"
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Componenets/Footer'


const Uhome = () => {
  const navigate=useNavigate()
  const  products=()=>{
 navigate('/uproducts')
  }
  return (
    <div>
      <Unavbar/>
      
      <div style={{ backgroundColor: "#b2beb5" }}>

      <h1 className='text-center' style={{fontSize:"50px"}}>Best Seller</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between',  }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://www.writersdigest.com/.image/t_share/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>STEPHEN KING</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://fivebooks.com/app/uploads/2011/06/0815601689.01.LZ_.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>DUTIES BEYOND<br/>BORDERS</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.l3g9sSosQK0OWEkJT156twHaLt&pid=Api&P=0&h=180" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>MOHANDAS GANDHI AUTOBIOGRAPHY</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.8TD_d_dRAQZ9nMWBjjB8pwHaLe&pid=Api&P=0&h=180" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'> THE HOBBIT</Card.Title>
    </Card.Body>
  </Card>
</div>

  </div>
  <br/>
  <br/>
  <br/>
  <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Top Recomendation</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635218169i/59452090.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>MORALS AND DOGMA</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.eOz0vj8bZCznmgY6syUGUgHaLX&pid=Api&P=0&h=180" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>STEPHEN KING </Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/59e235dcd7bdcec81eb68962/1575923349157-3BNDH7JR5UF7ZU0A5A48/ke17ZwdGBToddI8pDm48kJTNl5E2hijD7J-sESO_BVN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ue3pExvFiO6E9rv2lljq9S2_mVV9EJlaTc_26ArkrjDTJilkUu7eIyBb-AQDEk_nZw/Historical+Fiction+The+Sound+of+the+Hours+by+Karen+Campbell.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>THE SOUND OF THE HOURS</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.M5l6fh2whyN_OR-XdINNCgAAAA&pid=Api&P=0&h=180" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>THE STORY OF MY LIFE</Card.Title>
    </Card.Body>
  </Card>
</div>
</div>
</div>
      </div>
      <br/>
     <Footer/>
          </div>
  )
}

export default Uhome