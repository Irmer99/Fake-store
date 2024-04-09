
import './App.css'
import { useEffect, useState  } from 'react';

export default function App(){
  
 
  return (
    <>
    <h2>World Store</h2>
    <div className='card'>

    <Store />
    </div>
    <Env />
    </>
  )
}



function Store() {
  // State to hold fetched products
  const [products, setProducts] = useState([]);

  // Error state for handling potential fetch issues
  const [error, setError] = useState(null);

  // Async function to fetch products using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  // Render products conditionally based on state
  return (
    <div>
      {error ? (
        <p>Error fetching products: {error.message}</p>
      ) : products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image}  />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className='price'>{product.price}</p>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}

function Env(){
 
   console.log(import.meta.env.APP_KEY)
    
  
}
