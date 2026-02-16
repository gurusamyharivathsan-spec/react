import {CDN_URL} from "../utils/constants";
const ResCards = (props) => {
    const {resData} = props
    const {name, areaName, costForTwo, cuisines} = resData?.info
    const {avgRating} = resData?.info;

    return(
    <div className="p-4 m-4 w-62.5 rounded-lg bg-amber-100 transition duration-300 hover:scale-110 hover:bg-amber-300 cursor-pointer">
        <img src={CDN_URL+ resData?.info.cloudinaryImageId} alt="res-logo" className="w-full object-cover h-40 rounded-lg"></img>
        <h3 className="font-extrabold line-clamp-1 italic my-4 text-lg">{name}</h3>
        <h4>{areaName}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
    </div>
    )
}
export default ResCards;