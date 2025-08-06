import { Link } from "react-router-dom";
import Layout from "../layout/layout";


export default function Wishlist() {
    return(
        <Layout>
            <Link to="/wishlist">
            <h1>Wishlist Page</h1>
            </Link>
        </Layout>
    )
}