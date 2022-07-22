import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "50px",
        width: "90vw",
        margin: "auto",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/product/add-to-cart"> Cart </Link>
      <Link to="/about-us"> About</Link>
    </div>
  );
};

export default Navigation;
