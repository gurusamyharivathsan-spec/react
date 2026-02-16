import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";
import { CDN_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useResMenu(resId);
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Offline, Please check your internet connection!!</h1>
    if (resInfo === null) return <h1>Loading...</h1>
    const {name, locality, avgRating, cloudinaryImageId, cuisines} = resInfo.cards[2].card.card.info;
    
    return (
        <div className="w-full flex justify-center items-center bg-amber-200 h-screen">
            <div className="menu m-5 p-5 rounded-lg bg-amber-100 w-[250px]">
            <img src={CDN_URL + cloudinaryImageId} alt = "res-logo" className="res-logo w-40 h-40 mx-5 object-cover rounded-lg"/>
            <h1 className="ml-4 font-bold py-4">Hotel Name: {name}</h1>
            <h3 className="ml-4 font-medium">Cuisines: {cuisines.join(", ")}</h3>
            <h3 className="ml-4 font-medium">Location: {locality}</h3>
            <h3 className="ml-4 font-medium">Avg Rating: {avgRating}</h3>
            
        </div>
        </div>
    )
}
export default RestaurantMenu;