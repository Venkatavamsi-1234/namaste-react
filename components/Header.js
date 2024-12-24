import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlinestatus();

    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white m-2 sh">
            <div className="logo-container">
                <img src={LOGO_URL} alt="Logo" className="w-32 h-auto" />
            </div>
            <nav className="nav-items">
                <ul className="flex items-center space-x-4">
                    <li className="text-sm font-medium">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/" className="text-sm hover:text-gray-300">Home</Link></li>
                    <li><Link to="/about" className="text-sm hover:text-gray-300">About Us</Link></li>
                    <li><Link to="/contact" className="text-sm hover:text-gray-300">Contact Us</Link></li>
                    <li className="text-sm">Cart</li>
                    <button 
                        className="py-1 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                        onClick={() => {
                            btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;



{/*
    import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlinestatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>onlineStatus: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button 
                        className="button-login" 
                        onClick={() => {
                            btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;


*/}