import { useState } from "react";
import {LOGO} from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = (props) => {
    const onlineStatus = useOnlineStatus();
    const {resList1, setResList1} = props;
    const {filteredResList, setfilteredResList} = props
    const [btnName, setbtnName] = useState("Login");
    const [searchVal, setsearchVal] = useState("");
    return (
    <div className="flex justify-between items-center shadow-lg mb-2 shadow-amber-500 bg-orange-400 sticky top-0 z-10">
        <div className="logo-container flex items-center justify-center">
            <img className="w-24" src={LOGO}></img>
            <h3 className="font-bold">HOTEL GG</h3>
        </div>
        <div className="nav-bar">
            <ul className="flex items-center">
                <input className="border border-b-amber-800 p-2 m-2 rounded-lg" type="text" placeholder="Search" value={searchVal} onChange={(e) => {
                    setsearchVal(e.target.value);
                }}/>
                <button className="px-4 py-2 border  border-amber-400 bg-amber-400 rounded-lg" onClick={()=> {
                    const filteredList = resList1.filter((res) => res.info.name.toLowerCase().includes(searchVal.toLowerCase()));
                    setfilteredResList(filteredList);
                }}>Search</button>
                <li className="px-2"><Link to ="/">Home</Link></li>
                <li className="px-2"><Link to ="/about">About Us</Link></li>
                <li className="px-2"><Link to ="/contact">Contact Us</Link></li>
                <li className="px-2">Online Status :{onlineStatus? "✅" : "❌"} </li>
                <button className="px-4 py-2 border border-amber-400 bg-amber-400 rounded-lg" onClick={()=> {
                    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login"); 
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
)
}
export default Header;
