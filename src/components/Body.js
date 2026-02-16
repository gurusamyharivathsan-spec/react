import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import { useOutletContext } from "react-router";
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const {resList1, setResList1, filteredResList, setfilteredResList} = useOutletContext();
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Offline, Please check your internet connection!!</h1>
    return resList1.length === 0 ? <Shimmer/> : (
        <div className="body bg-amber-200 h-full">
            <button className="filter-btn border border-amber-400 bg-amber-400 px-4 py-2 m-4 rounded-lg" onClick={() => {
                const filteredList = resList1.filter((res) => res.info.avgRating > 4.6)
                setfilteredResList(filteredList);
            }}>Top Restaurant</button>
            
            <div className="flex flex-wrap justify-center">
            {
                filteredResList.map((res) => 
                <Link key = {res.info.id} to = {"restaurant/"+res.info.id}><ResCards  resData = {res}/></Link>)
            }
            </div>
        </div>
    )
}
export default Body;