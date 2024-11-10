import { useState, useEffect, useRef } from "react";
import "./navbar.css";
import logo from "../../Images/Logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setMenu(true);
    }
  };

  const handleScroll = () => {
    setMenu(true);
  };

  useEffect(() => {
    if (!menu) {
      document.addEventListener("click", handleClickOutside as EventListener);
      document.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("click", handleClickOutside as EventListener);
      document.removeEventListener("scroll", handleScroll);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside as EventListener);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo.png" />
      </div>
      <div className="menu" ref={menuRef}>
        <ul className={`menu-list ${!menu ? "active" : ""}`}>
          <li>
            <a href="#home" className="menu-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" className="menu-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#why-choose-us" className="menu-link">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#menu" className="menu-link">
              Menu
            </a>
          </li>
          <li>
            <a href="#our-story" className="menu-link">
              Our Story
            </a>
          </li>
        </ul>
        <a href="https://wa.me/9094696650" className="button-link">
          <button className="menu-button">Order Now</button>
        </a>
        <div onClick={toggleMenu} className="mobile-menu">
          {menu ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
