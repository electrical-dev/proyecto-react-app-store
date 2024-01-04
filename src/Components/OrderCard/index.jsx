import { GoTrash } from "react-icons/go";
const OrderCard = props => {

    const {id, name, imageUrl, price, handleDelete} = props
    let renderGoTrash
    if (handleDelete){
        renderGoTrash = <GoTrash
        className=" text-red-700 cursor-pointer "
        onClick={ ()=> handleDelete(id)}
      ></GoTrash>
    }

    return (
    <div className=" flex justify-between items-center mb-3 w-auto">
        <div className=" flex items-center gap-2">
            <figure className=" w-20 h-20">
            <img className=" w-full h-full rounded-lg object-cover" src={imageUrl} alt={name} />
            </figure>
            <p className="text-sm font-light">{name}</p>
        </div>
        <div className=" flex items-center gap-3">
            <p className=" text-lg font-medium"> ${price}</p>
            {renderGoTrash}
        </div>
        
    </div>
)

}

export default OrderCard