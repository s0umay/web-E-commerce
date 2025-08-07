import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import Layout from "../layout/layout";

import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            login(username); // store in context + localStorage
            alert(`Welcome, ${username}`);
            navigate("/");
        }
    };

    return (
        <Layout>
            <div style={{
                textAlign: "center",
                backgroundImage: "url('https://i.pinimg.com/736x/2a/ba/3d/2aba3dc43cf05af19dd2ec0755e25317.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                height: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h1>Login Page</h1>
                <p>Please enter your credentials to log in</p>

                <form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ margin: "30px", marginBottom: "0px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ margin: "20px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                    <button
                        type="submit"
                        disabled={!username || !password}
                        style={{
                            margin: "10px",
                            padding: "10px 20px",
                            backgroundColor: (!username || !password) ? "#ccc" : "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: (!username || !password) ? "not-allowed" : "pointer"
                        }}
                    >
                        Login
                    </button>
                </form>

                <p style={{ marginTop: "20px" }}>
                    Don't have an account? <Link to="/register" style={{ color: "#4CAF50", textDecoration: "none" }}>Register here</Link>
                </p>
            </div>
        </Layout>
    );
}
