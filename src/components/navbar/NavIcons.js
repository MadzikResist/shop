import {useEffect, useState} from "react";
import { iconsData } from "../../const/iconsData";
import "./navbar.css";
import { Link } from "react-router-dom";
const NavIcons = () => {
  const currentURL = window.location.href
  const [selectedIcon, setSelectedIcon] = useState("");
  const [scrollDirection, setScrollDirection] = useState(null);
  let scrollY = 0

  useEffect(() => {
    if(currentURL.includes("shop")){
      setSelectedIcon("shop")
    } else if(currentURL.includes("cart")){
      setSelectedIcon("cart")
    }
    else if(currentURL.includes("account")){
      setSelectedIcon("account")
    }else{
      setSelectedIcon("")
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < scrollY) {
        setScrollDirection("up");
      }
      // setScrollY(currentScrollY)
      // eslint-disable-next-line
      scrollY = currentScrollY
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollY]);
  return (
    <div className="nav-container" style={{bottom: scrollDirection === 'down' ? '-70px' : '8px'}}>
      {iconsData.map((icon, index) => (
        <Link to={`/${icon.name}`} style={{ color: "white" }} key={icon.name} >
          <div
            className={`nav-container-icons ${selectedIcon === icon.name && "nav-selected-icon"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nav-icon"
              viewBox={icon.viewBox}
            >
              <path d={icon.path} />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavIcons;
