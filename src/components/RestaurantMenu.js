import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import DishCategory from "./DishCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useResMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Offline, Please check your internet connection!!</h1>
    if (resInfo === null) return <h1>Loading...</h1>
    const {name, locality, cuisines} = resInfo.cards[2].card.card.info;
    const restaurants = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(c=> c.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    const setIndex = (index) => {
        if (showIndex === index) {
            setShowIndex(null);
        } else {
            setShowIndex(index);
        }
    }
    
    return (
        <div className="text-center py-6 bg-amber-200">
            <span className="font-bold text-xl">{name}</span>
            <span>{", "}{locality}</span>
            <h4>{cuisines.join(", ")}</h4>
        <div>
            {restaurants.map((category, index) => 
            <DishCategory key = {category.card.card.categoryId} 
            data = {category}
            showItems = {index === showIndex ? true : false}
            setShowIndex = {() => setIndex(index)}/>)}
        </div>
        </div>
    )
}
export default RestaurantMenu;