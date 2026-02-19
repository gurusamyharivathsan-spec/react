import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart())
    }
    const cart = useSelector(store=>store.cart.items);
    console.log(cart);
    return (
        <div className="text-center w-6/12 my-9 mx-auto">
            <h1>This is the Cart page</h1>
            <div className="bg-white">
            <button className="bg-black cursor-pointer text-white p-2 m-2 rounded-lg" onClick={handleClear}>Clear Cart</button>
            <div>
                <CartList data = {cart}/>
            </div>
            </div>
        </div>
    )
}
export default Cart;