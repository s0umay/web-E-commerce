import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import "./navbar.css";

export default function Navbar() {
  const { username, logout } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    logout();
    setShowLogout(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Shopiee</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ textDecoration: 'none',fontSize:"20px" }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/prod" className="nav-link" style={{ textDecoration: 'none',fontSize:"20px" }}>Products</Link>
              </li>
            </ul>

            <div style={{ position: "relative", marginRight: 20 }}>
              <Link to="/cart">
                <button type="button" className="btn btn-outline-secondary" style={{ marginRight: 10 }}>
                  <img src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="cart" width={30} />
                </button>
              </Link>

              {username ? (
                <div style={{ display: "inline-block" }}>
                  <button
                    onClick={() => setShowLogout(!showLogout)}
                    className="btn btn-outline-secondary"
                  >
                    👤 {username}
                  </button>
                  {showLogout && (
                    <div style={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      backgroundColor: "white",
                      boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      zIndex: 100
                    }}>
                      <button onClick={handleLogout} className="btn btn-link" style={{ textDecoration: "none", color: "red", padding: 0 }}>Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <button type="button" className="btn btn-outline-secondary" style={{ margin: 20 }}>Login</button>
                </Link>
              )}
            </div>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
