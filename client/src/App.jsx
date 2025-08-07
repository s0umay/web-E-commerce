
import Footer from "./Components/footer/footer";
import Layout from "./Components/layout/layout";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/home/home";
import Products from "./Components/products/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from "./Components/wishlist/wishlist";
import Cart from "./Components/cart/cart";
import Login from "./Components/login/login";
import Register from "./Components/register/register";
import Productpage from "./Components/productdetail/productpage";
import { AuthProvider } from "./Components/AuthContext/AuthContext";

export default function App()
{
    return(
        <div>
            <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prod" element={< Products/>} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/productpage" element={<Productpage/>}/> 
            </Routes>
            </AuthProvider>
            </BrowserRouter>
        </div>
    )
} 