import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const DishList = (dish) => {
    const dispatch = useDispatch();
    const handleAdd = (dish) => {
        dispatch(addItems(dish))
    }
    return (
        <div>
                {dish?.data?.map((dish) => <div key = {dish?.card?.info?.id}>
                    <div className="text-left my-2 px-1">
                        <div className="flex">
                        <div className="w-9/12">
                        <span className="font-bold ">{dish?.card?.info?.name} - </span>
                        <span>₹{dish.card.info.price ? dish?.card?.info?.price/100 : dish?.card?.info?.defaultPrice/100}</span>
                        <p className="text-sm py-1 text-left px-1">{dish?.card?.info?.description}</p>
                    </div>
                            <div className="w-3/12 flex relative justify-center">
                            <img  className="rounded-lg border w-24 flex justify-end " src = {
                                dish?.card?.info?.imageId ? CDN_URL+dish.card.info.imageId : "https://storage.googleapis.com/ds-builder-bucket/000_menu_placeholder.png"
                            } ></img>
                            {/* <div className="absolute"> */}
                            <button className="p-1 cursor-pointer bottom-0 m-auto absolute rounded-lg bg-green-500" onClick={() => handleAdd(dish)}>Add</button>
                            {/* </div> */}
                            </div>
                        </div>
                        </div>
                        </div>)}
        </div>
    )
}
export default DishList;