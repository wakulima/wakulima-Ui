import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className='product'>
    <Card style={{ width: '18rem', height:'16rem' }}>
      <Card.Img style={{ height: '16rem' }} variant="top" src={product.picture} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    )}
    </div>
  );
}

export default Researchpost;