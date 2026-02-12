import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
const App = () => {
  const  [resList1, setResList1] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
    useEffect( () => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.9997145&lng=76.9529169&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await res.json();
        setResList1(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return (
        <div className="app">
            <Header resList1={resList1} setResList1={setResList1} filteredResList={filteredResList} setfilteredResList={setfilteredResList}/>
            <Body resList1={resList1} setResList1={setResList1} filteredResList={filteredResList} setfilteredResList={setfilteredResList}/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)