import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = (props) => {
    const {resList1, setResList1, filteredResList, setfilteredResList} = props;
    return resList1.length === 0 ? <Shimmer/> : (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filteredList = resList1.filter((res) => res.info.avgRating > 4.6)
                setfilteredResList(filteredList);
            }}>Top Restaurant</button>
            <div className="res-container">
            {
                filteredResList.map((res) => <ResCards key = {res.info.id} resData = {res}/>)
            }
            </div>
        </div>
    )
}
export default Body;