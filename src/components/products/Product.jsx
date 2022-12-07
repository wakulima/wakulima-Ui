import { useGetAllProductsQuery } from './slices/productApi'
import '../products/products.css'

export default function Product() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="home-container">
    {/* {status === "success" ?  */}
    {isLoading ? (
    <p>Loading...</p>
    ) : error ? (
      <p>an error occurred ...</p>
    ) : (
      <>
        <h2>New Arrivals</h2>
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
                <button>
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
  

