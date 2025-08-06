import { useEffect, useState } from "react";
import Layout from "../layout/layout";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []);

    const handleRemove = (indexToRemove) => {
        const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <Layout>
            <div style={{ padding: "20px" }}>
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={index} style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "20px",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "10px"
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                    <img src={item.thumbnail} alt={item.title} width="100" />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>${item.price}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleRemove(index)}
                                    style={{ padding: "8px 15px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px" }}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <hr />
                        <h3>Total: ${getTotal()}</h3>
                    </div>
                )}
            </div>
        </Layout>
    );
}
