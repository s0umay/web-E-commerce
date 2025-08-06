import { Link } from "react-router-dom";
import "./navbar.css";



export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Shopiee</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ alignContent: "center" }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/prod" className="nav-link" style={{ textDecoration: 'none' }}>
                  Products
                </Link>
              </li>
              
            </ul>
            <div >
              <Link to="/cart">
                <button type="button" className="btn btn-outline-secondary" style={{ margin: 5, width: 30, height: 30, margin: 0, padding: 0 }}>
                  <img src="https://cdn-icons-png.flaticon.com/128/833/833314.png" className="img-thumbnail" alt="cart" width={40} height={40} />
                </button></Link>

              <Link to="/login"><button type="button" className="btn btn-outline-secondary" style={{ alignSelf: "center", margin: 20 }}>Login</button></Link>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}