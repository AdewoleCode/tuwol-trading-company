import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    const navRef = useRef();


    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


    return (
        <div className="nav_container">

            <header>
                <h3>
                    <Link to='/' className="nav_title">
                        TUWOL
                    </Link>

                </h3>
                <nav ref={navRef}>
                    <Link className="homee" to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to='/gallery'>GALLERY</Link>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <div className="icon">
                    <div className="contact-box">
                        {/* <div className="phone">
                            <AiOutlineMail className="icon"/>
                            <h3> tuwol@gmail.com</h3>
                        </div> */}
                        <a href="tel:08038288250" className="ref">

                            <div className="email">
                                <BsFillTelephoneInboundFill className="icon" />
                                <h3>08038288250</h3>
                            </div>
                        </a>

                    </div>
                </div>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </div>
    );
}

export default Navbar;