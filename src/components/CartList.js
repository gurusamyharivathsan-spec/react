import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";
const CartList = (dish) => {
    const dispatch = useDispatch();
    const handleRemove = (info) => {
        dispatch(removeItem(info))
    }
    return (
        <div>
                        {dish?.data?.map((dish) => <div key = {dish?.card?.info?.id}>
                            <div className="text-left border-b bg-gray-300 shadow-lg my-2 p-1">
                                <div className="flex ">
                                <div className="w-9/12">
                                <span className="font-bold ">{dish?.card?.info?.name} - </span>
                                <span>₹{dish.card.info.price ? dish?.card?.info?.price/100 : dish?.card?.info?.defaultPrice/100}</span>
                                <p className="text-sm py-1 text-left px-1">{dish?.card?.info?.description}</p>
                                <button className="rounded-lg bg-red-600 px-2 text-white"onClick={()=>handleRemove(dish.card.info.id)}>Remove</button>
                            </div>
                                    <div className="w-3/12 flex relative justify-center">
                                    <img  className="rounded-lg border w-24 flex justify-end " src = {
                                        dish?.card?.info?.imageId ? CDN_URL+dish.card.info.imageId : "https://storage.googleapis.com/ds-builder-bucket/000_menu_placeholder.png"
                                    } ></img>
                                    </div>
                                </div>
                                </div>
                                </div>)}
                </div>
    )
}
export default CartList;