import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData(resId);
    },[]);
    const fetchData = async(resId) => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}
export default useResMenu;