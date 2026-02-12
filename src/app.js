import React from "react";
import { useEffect, useState } from "react";
import RestaurantMenu from "./components/RestaurantMenu";  
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
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
            <Outlet context={{resList1, setResList1, filteredResList, setfilteredResList}}/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurant/:id",
                element : <RestaurantMenu/>
            }
        ]

    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)