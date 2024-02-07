import { productsApi, useGetAllProductsQuery } from "../features/productsApi";

function Homepage() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="home-container">
      {isLoading ? (
        <p>loading</p>
      ) : error ? (
        <p>error occured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name}></img>
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button>Add to cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
