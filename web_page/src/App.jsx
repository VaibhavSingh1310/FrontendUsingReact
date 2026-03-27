import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Cart from "./Cart";
export default function App() {
  const [cart, setCart] = useState([]);
  const [totalAmt,setAmt] = useState(0);
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 60000,
      image: "/download.jpg"   // public folder se
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      image: "/phone.jpg"   // public folder se
    },
    {
      id: 3,
      name: "Tab",
      price: 35000,
      image:"download (1).jpg"
    }
  ];

  function addToCart(product) {
    setCart([...cart, product]);
  }
  function removeFromCart(index){
    const updatedCart = cart.filter((_,i)=>i!==index);
    setCart(updatedCart)
  }

  return (
    <div style={{ padding: "20px" }}>
      <Form/>
      <Header cartCount={cart.length} />
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="150"
              height="150"
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>

        ))}
      </div>
    </div>
  );
}
