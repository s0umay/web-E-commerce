import { Link } from "react-router-dom";
import Layout from "../layout/layout";


export default function Login() {
    return (
        <Layout>

            <div style={{
                textAlign: "center", marginTop: "0px", backgroundImage: "url('https://i.pinimg.com/736x/2a/ba/3d/2aba3dc43cf05af19dd2ec0755e25317.jpg')", backgroundSize: "cover",
                backgroundPosition: "center", padding: "0px", borderRadius: "10px", height: "90vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                    <h1 style={{ textDecoration: "none", top: "20%" }}>Login Page</h1>
                    <p>Please enter your credentials to log in</p>
                    <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <input type="text" placeholder="Username" style={{ margin: "30px",marginBottom:"0px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <input type="password" placeholder="Password" style={{ margin: "20px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }} />
                        <button type="submit" style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Login</button>
                    </form>
                </Link>


                <p style={{ marginTop: "20px" }}>Don't have an account? <Link to="/register" style={{ color: "#4CAF50", textDecoration: "none" }}>Register here</Link></p>
            </div>
        </Layout>
    )
}