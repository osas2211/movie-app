import { useState, useEffect } from "react";
import ham from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg"
import { MobileNav } from "./mobileNav";
import { Link } from "react-router-dom"


export const Header = ()=>{

    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false);
    const toggle = (e)=>{
      e.preventDefault()
        active ? setActive(false) : setActive(true)
    }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.pageYOffset > 80)
      );
    }
  }, []);
  
    return (
      <>
        <header className={`header d-flex py-3 px-4 px-md-5 justify-content-between py-2 align-items-center ${scrolled ? "header-change": ""}`}>
            <div className="logo">
                <h5><Link to="/">Movie<span>Geeks</span></Link></h5>
            </div>
            <nav className="nav">
                    <a href="#top-rated">Trending</a>  
                    <a href="#nowshowing">now showing</a>   
                    <a href="#upcoming">upcoming</a>
                    <li><Link to="/search" className="btn-custom-1">Search Movies</Link></li>
            </nav>
            <a href="" onClick={toggle} className={`ham-nav d-md-none`}>
                {
                  !active ? <img src={ham} className="mobile-btn rotate2" alt="" srcset="" id="ham" /> : <img src={close} alt="" srcset="" className="mobile-btn rotate" id="ham"/>
                }
            </a>
        </header>
        {
          !active ? <></> : <MobileNav></MobileNav>
        }
      </>
    )
}