import { Link, useLocation } from "react-router-dom";
import Layout from "../layout/layout";
import { useEffect, useState } from "react";

export default function Productpage() {
    const location = useLocation();
    const { pid } = location.state || {};  // extract pid from state
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    async function fetchProductDetails() {
        try {
            const response = await fetch(`https://dummyjson.com/products/${pid}`);
            const result = await response.json();
            console.log(result);
            setProduct(result);
        } catch (err) {
            console.error("Error fetching product details:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (pid) {
            fetchProductDetails();
        }
    }, [pid]);
    console.log(cart);

    return (
        <Layout>
            <div style={{ left: "10%", marginTop: "20px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>


                {loading ? (
                    <p>Loading...</p>
                ) : product ? (
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p style={{ textAlign: "center", border: "1px solid black", padding: "0px", width: "130px" }}>  {product.rating} <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" style={{ width: "20px", marginBottom: "5px" }}></img> Rating</p>
                        <hr style={{ border: "1px solid black" }} />
                        <div style={{ display: "flex", gap: "50px" }}>
                            <img src={product.thumbnail} alt={product.title} width="50%" style={{ objectFit: "cover" }} />
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "40px" }}>
                                <p>Brand: {product.brand}</p>
                                <h3><strong>Price:</strong> ${product.price} <span style={{ backgroundColor: "yellow" }}>{product.discountPercentage}% Off</span></h3>
                                <p style={{ color: "green" }}>{product.availabilityStatus}</p>
                                <button style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
                                    onClick={() => {
                                        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
                                        const updatedCart = [...currentCart, product];
                                        localStorage.setItem("cart", JSON.stringify(updatedCart));
                                        alert(`${product.title} has been added to your cart!`);
                                    }}
                                >Add to Cart</button><br /><br /><br />
                                <p style={{ margin: "0" }}>{product.warrantyInformation}</p>
                                <p style={{ marginBottom: "40px" }}>{product.returnPolicy}</p>
                                <h3>Reviews:</h3>
                                <ul style={{ listStyleType: "none", padding: "0" }}>
                                    {product.reviews && product.reviews.map((review, index) => (
                                        <li key={index} style={{ marginBottom: "10px" }}>
                                            <strong>{review.reviewerName}</strong>: {review.comment} <span style={{ color: "gold" }}>⭐{review.rating}</span>
                                        </li>
                                    ))}</ul>

                            </div>
                        </div>
                    </div>
                ) : (
                    <p>No product found.</p>
                )}

                <Link to="/prod">← Explore more</Link>
            </div>
        </Layout>
    );
}
