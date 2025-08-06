import { Link } from "react-router-dom";


export default function Register() {
    return (
        <div>
            <Link to="/register" style={{ textDecoration: "none", color: "black" }}>

                <form style={{
                    display: "flex", flexDirection: "column", alignItems: "center", backgroundImage: "url('https://i.pinimg.com/736x/2a/ba/3d/2aba3dc43cf05af19dd2ec0755e25317.jpg')", backgroundSize: "cover",
                    backgroundPosition: "center", padding: "0px", borderRadius: "10px   ", height: "90vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
                }}  >
                    <h1 style={{ textDecoration: "none", marginBottom: "20px", textAlign: "center" }}>Sign up!!</h1>
                    <input type="text" placeholder="First Name" style={{display: 'flex', gap: '10px',margin: "30px", marginBottom: "0px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    <input type="text" placeholder="Username" style={{ margin: "30px", marginBottom: "0px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    <input type="email" placeholder="Email" style={{ margin: "20px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    <input type="password" placeholder="Create Password" style={{ margin: "20px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    <input type="password" placeholder="Re-Enter Password" style={{ margin: "20px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }} />

                    <button type="submit" style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Register</button>

                </form>
            </Link>
            <p style={{ textAlign: "center", marginTop: "20px" }}>Already have an account? <Link to="/login" style={{ color: "#4CAF50", textDecoration: "none" }}>Login here</Link></p>

        </div>
    )


}
