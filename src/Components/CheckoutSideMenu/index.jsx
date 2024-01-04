import { useContext } from "react";
import { Link } from "react-router-dom";
import { RxEyeClosed } from "react-icons/rx";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./style.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: 'hora',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice:  totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setSearchByTitle(null)
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-5 border border-black rounded-lg bg-white `}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2 className=" font-medium text-xl ">My Order</h2>
        <div>
          <RxEyeClosed
            className=" text-blue-700 cursor-pointer "
            onClick={() => context.closeCheckoutSideMenu()}
          ></RxEyeClosed>
        </div>
      </div>
      <div className=" px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className=" px-6">
        <p className=" flex justify-between">
          <span className=" font-light text-xl"> Total:</span>
          <span className=" font-semibold text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
      </div>
      <div className="px-6 py-3">
        <Link to="/my-orders/last">
          <button
            className=" rounded-lg w-full py-1 bg-blue-500 font-semibold text-white text-2xl"
            onClick={() => handleCheckout()}
          >
            CheckOut
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
