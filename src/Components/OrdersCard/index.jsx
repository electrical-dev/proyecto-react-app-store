import { TbShoppingBagCheck } from "react-icons/tb";
const OrdersCard = (props) => {
  const { totalPrice, totalProducts, numberOrder } = props;

  return (
    <div className=" items-center mb-3 border border-blue-500 p-4 rounded-lg w-80 ">
      <p>
        <div className=" flex justify-between items-center">
          <div className=" flex flex-col">
            <span> Order : {numberOrder + 1}</span>
            <span> {totalProducts}-Articles</span>
            <span className=" font-light text-sm">
              {" "}
              Data Order: {new Date().toLocaleString()}{" "}
            </span>
          </div>
          <div className=" flex flex-col items-center">
            <TbShoppingBagCheck className=' text-blue-500 text-3xl'></TbShoppingBagCheck>
            <span className=" font-medium text-blue-700"> ${totalPrice} </span>
          </div>
        </div>
      </p>
    </div>
  );
};

export default OrdersCard;
