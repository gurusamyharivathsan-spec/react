import DishList from "./DishList";

const DishCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }
    if (data === null) return <h1>Loading...</h1>
    return (
        <div className="my-2 p-3 bg-gray-200 m-auto text-center shadow-lg border-b w-6/12" >
            <div className="flex justify-between cursor-pointer px-10" onClick={handleClick}>
                <span className="font-bold">{data?.card?.card?.title} ({data?.card?.card?.itemCards?.length})</span>
                <span className="font-bold">+</span>
            </div>
            <div>
                {showItems &&  <DishList data = {data?.card?.card?.itemCards}/>}
            </div>
        </div>
    )
}
export default DishCategory;