import { useEffect, useState } from "react";

const RestaurantMenu = () => {
    const [menu, setMenu] = useState(null);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.9997145&lng=76.9529169&restaurantId=119370&catalog_qa=undefined&submitAction=ENTER");
        
        const json = await data.json();
        console.log(json);
        setMenu(json);
    }
    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className="menu">
            <h1>Restaurant Menu</h1>
            <h3>Menu Details</h3>
        </div>
    )
}
export default RestaurantMenu;