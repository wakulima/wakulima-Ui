import { useGetAllProductsQuery } from '../products/slices/productApi';
import '../../../src/components/products/products.css'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../products/slices/cartSlice';


export default function FarmProduct() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // history.push("/cart");
  };


  return (
    <div className="home-container">
    {/* {status === "success" ?  */}
    {isLoading ? (
    <p>Loading...</p>
    ) : error ? (
      <p>an error occurred ...</p>
    ) : (
      <>
        <h2 className='text-white'>My farm products</h2>
        <div className="products">
          {data &&
            data?.map((product) => (
              <div key={product.id} className="product text-white">
                <h3 >{product.product_name}</h3>
                <img src={product.image_url} alt={product.product_name} />
                <div className="details text-white">
                  <span>{product.quantity} kg(s) Available</span>
                  <span className="price">Ksh{product.price}/kg</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  update
                </button>
              </div>
            ))}
        </div>
      </>
    ) 
    // : status === "pending" ? (
    //   <p>Loading...</p>
    // ) : (
    //   <p>Unexpected error occured...</p>
    // )
    }
  </div>
);
};
  

