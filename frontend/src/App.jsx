import React, { useEffect, useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/data');
                setProducts(response.data);
            } catch (error) {
                setError("There was an error fetching the products!");
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


  return (
    <>
    
      
      <div>
           
            <ul>
                {products.map(product => (
                    <div key={product.index}>
                        <h1>{product.name}</h1>
                        <h2>{product.title}</h2>
                    </div>
                ))}
            </ul>
        </div>
    </>
  )
}

export default App

