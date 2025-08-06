import { Link } from "react-router-dom";
import Layout from "../layout/layout";

export default function Home() {
    return (
        <Layout>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh",width: "100%" }}>
            <Link to="/" >
                <div style={{ textAlign: "center", padding: 0, margin: 0, marginTop: "0px", height: "100vh", width: "100%" }}>
                    <img src="https://i.pinimg.com/1200x/3d/0e/76/3d0e76236ab910e448c0392122b176b9.jpg" alt="home icon" style={{ padding:"0",margin:"0",position: "relative", width: "100%", padding: 0, margin: 0, height: "100vh" }} />
                    <div style={{
                        position: 'absolute',
                        top: '68%',
                        left: '80%',
                        transform: 'translate(-50%, -50%)',
                        color: 'black',
                        fontSize: '35px',
                        fontWeight: 'bold',
                        whiteSpace: 'nowrap'

                    }}>
                        welcome to Shopiee
                    </div>
                </div>
            </Link>
            <div>
                <Link to="/prod">
                <button type="button" className="btn btn-light" style={{
                    width: '150px',
                    fontSize: '20px',
                        position: 'absolute',
                        top: '78%',
                        left: '80%',
                        transform: 'translate(-50%, -50%)'}}>Explore</button>
                </Link>
            </div>
            </div>
            
        </Layout>
    );
}