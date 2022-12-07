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
        <h2>Fresh From the Farm</h2>
        <div className="products">
          {data &&
            data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image_url} alt={product.name} />
                <div className="details">
                  <span>{product.description}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
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
  

