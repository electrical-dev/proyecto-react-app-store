import { useContext } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  console.log(context.order.index);
  return (
    <Layout>
      <div className=" flex items-center justify-center relative w-80">
        <h1 className=" text-lg font-bold text-blue-800">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            numberOrder ={index}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
