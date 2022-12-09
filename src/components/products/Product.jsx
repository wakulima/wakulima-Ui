import { useGetAllProductsQuery } from './slices/productApi';
import '../products/products.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from './slices/cartSlice';


export default function Product() {
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
        <h2 className='text-white'>Fresh From the Farm</h2>
        <div className="products text-white">
          {data &&
            data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.product_name}</h3>
                <img src={product.image_url} alt={product.product_name} />
                <div className="details">
                  <span>{product.quantity}kg(s) Available </span>
                  <span className="price">Ksh{product.price}/kg</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Order Now
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
  

