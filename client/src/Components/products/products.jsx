import { Link } from "react-router-dom"
import Layout from "../layout/layout"
import { useState, useEffect } from "react";
import './product.css'; // Assuming you have a CSS file for styling


export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);
    const [category, setCategory] = useState("smatphones");
    const [categoryList, setCategoryList] = useState([]);
    const [id, setId] = useState();

    async function fetchCategoryList() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=54&skip=${count === 0 ? 0 : count * 20
                }`
            );

            const result = await response.json();
            console.log(result)

            if (result && result.products &&result.products.length) {
                setCategoryList(result.products);
                setLoading(false);
            }
        } catch (err) {
            setError(err);
        }
    }

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products/category-list');
            const result = await response.json();
            console.log(result)

            if (result && result.length) {
                setProducts(result);
                setLoading(false);
            }

        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    async function fetchcategory() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products/category/${category}`);
            const result = await response.json();
            console.log(result)

            if (result && result.products) {
                setCategoryList(result.products);
                setLoading(false);
            }

        } catch (err) {
            setError(err);
            setLoading(false);
        }

    }
    useEffect(() => {
        fetchcategory();
    }, [category]);

    useEffect(() => {
        fetchProducts();
    }, []);
    useEffect(() => {
        fetchCategoryList();
    }, [count]);



    return (
        <Layout>
            <div className="obj" style={{
                marginTop: "0px", backgroundImage: "url('https://i.pinimg.com/1200x/e3/a2/c0/e3a2c06c51ba8b900a0dbacf0eb2362b.jpg')", backgroundSize: "cover",
                backgroundPosition: "center", padding: "0px", borderRadius: "0px", minHeight: "100vh", display: "flex", flexDirection: "column"
            }}>


                <div style={{
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    color: 'black',
                }}>
                    <h2 style={{margin:"20px 0px 20px 0px",fontStyle:"oblique",color:"#fff"}}>Explore our Products just for youu</h2>
                </div>
                <div className="dropdown" style={{
                    display: "flex", alignContent: "center", justifyContent: "center", marginBottom: "20px"
                }}>
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Categories
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {products.map((prod, index) => (
                            <li key={index}>
                                <button className="dropdown-item" style={{ textDecoration: "none", backgroundColor: "white", color: "#0e0f0eff" }} onClick={() => (setCategory(prod))} >
                                    {prod}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                    justifyContent: "center",
                    padding: "20px",
                }}>
                    {categoryList.map((product, index) => (
                        <div key={index} style={{
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            padding: "10px",
                            width: "100%", // full width inside grid cell
                            boxSizing: "border-box",
                        }}
                        onClick={() => setId(product.id)}>
                            <img src={product.thumbnail} alt={product.name} style={{
                                width: "100%",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "4px",
                            }} />
                            <div style={{}}><h3>{product.title}</h3></div>
                            <p>Price: ${product.price}</p>
                            <p style={{ textDecoration: "none", color: "#4CAF50" }}>{product.availabilityStatus}</p>
                            <Link  to="/productpage" state={{ pid: product.id }} style={{ textDecoration: "none", color: "#4CAF50", bottom: "-20px" }} >View Details</Link>
                        </div>

                    ))}

                </div>
                <Link to="/prod" style={{ textDecoration: "none" }}>




                </Link>
            </div>
        </Layout>

    )
}