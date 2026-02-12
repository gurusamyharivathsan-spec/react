import {CDN_URL} from "../utils/constants";
const ResCards = (props) => {
    const {resData} = props
    const {name, areaName, costForTwo, cuisines} = resData?.info
    const {avgRating} = resData?.info;

    return(
    <div className="res-cards" style={{backgroundColor: "#f0f0f0"}}>
        <img src={CDN_URL+ resData?.info.cloudinaryImageId} alt="res-logo" className="foodImage"></img>
        <h3>{name}</h3>
        <h4>{areaName}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
    </div>
    )
}
export default ResCards;