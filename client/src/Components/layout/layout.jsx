import Footer from "../footer/footer";
import Navbar from "../Navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      width: "100%",
    }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <div className="container111" style={{ margin: 0, padding: 0,widtth:"100%" }}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
