export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start" style={{ width: "100%" }}>
      <div className="container p-4" style={{padding:"0px 0px"}}>
        <ul className="list-unstyled d-flex justify-content-center flex-wrap">
          <li className="mx-3">About us</li>
          <li className="mx-3">Contact</li>
          <li className="mx-3">Privacy Policy</li>
          <li className="mx-3">Terms of Service</li>
          <li className="mx-3">Help</li>
          <li className="mx-3">FAQ</li>
        </ul>
      </div>
      <div className="text-center p-3">
        © 2023 Shopiee: <a className="text-white" href="https://mdbootstrap.com/"> Shopiee.com</a>
      </div>
    </footer>
  );
}
