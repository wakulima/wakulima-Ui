import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './posts.css'
import Button from 'react-bootstrap/Button';
import { useGetAllProductsQuery } from '../products/slices/rpostApi';
import { useDispatch, useSelector } from "react-redux";



function Researchpost() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="home-container">
      {isLoading ? (
    <p>Loading...</p>
    ) : error ? (
      <p>an error occurred ...</p>
    ) : (
        <div className='products'>
          {data &&
            data?.map((product) => (
        <div key={product.id} className='product'>
{/* <Card style={{ width: '18rem' }}>       */}
<Card.Img style={{ height: '16rem' }} variant="top" src={product.picture} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.content}
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    {/* <Card> */}
    </div>
     ))}
    </div>
    )}
    </div>
  );
}

export default Researchpost;