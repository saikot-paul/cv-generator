import "bootstrap/dist/css/bootstrap.css";
import scroll from "../assets/scroll-solid.svg";
import "./styling/header.css";

function Header() {
  return (
    <div className="title">
      <h1 className="text-center">Resume Generator</h1>
      <img
        src={scroll}
        alt="script image"
        style={{ width: "5%", height: "auto" }}
      />
    </div>
  );
}

export default Header;
