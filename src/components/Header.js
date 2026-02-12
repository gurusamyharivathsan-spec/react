import { useState } from "react";
import {LOGO} from "../utils/constants";
import { resList1 } from "./Body";
import { Link } from "react-router";
const Header = (props) => {
    const {resList1, setResList1} = props;
    const {filteredResList, setfilteredResList} = props
    const [btnName, setbtnName] = useState("Login");
    const [searchVal, setsearchVal] = useState("");
    return (
    <div className="header-container">
        <div className="logo-container">
            <img className="logo" src= {LOGO}></img>
        </div>
        <div className="nav-bar">
            <ul>
                <input type="text" placeholder="Search" value={searchVal} onChange={(e) => {
                    setsearchVal(e.target.value);
                }}/>
                <button className="searchBtn" onClick={()=> {
                    const filteredList = resList1.filter((res) => res.info.name.toLowerCase().includes(searchVal.toLowerCase()));
                    setfilteredResList(filteredList);
                }}>Search</button>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/about">About Us</Link></li>
                <li><Link to ="/contact">Contact Us</Link></li>
                <button className="loginBtn" onClick={()=> {
                    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login"); 
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
)
}
export default Header;
