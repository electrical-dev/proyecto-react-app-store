import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { IoIosArrowBack } from "react-icons/io";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  console.log(context.order.index);
  if (index === 'last') index = context.order?.length - 1, console.log(index);
  return (
    <Layout>
      <div className=" flex items-center justify-center relative w-80">
        <Link to="/my-orders" className="absolute left-0">
          <IoIosArrowBack className=" text-red-700 cursor-pointer " />
        </Link>
        <h1 className=" text-lg font-bold text-blue-800">My Order</h1>
      </div>
      <div className=" flex-col items-center justify-cente relative w-80 ">
        {context.order?.[index]?.products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.image}
            price={product.price}
          />
        )
        
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
