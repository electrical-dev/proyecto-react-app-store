import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { FaCheckSquare } from "react-icons/fa";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.product_id === id).length >0
    
    if (isInCart){
      return (
        <div
          className=" absolute top-0 right-0 flex justify-center items-center w-8 h-8 rounded-full m-2 p-1"
          
        >
          <FaCheckSquare className=" text-green-700 w-5 h-5 " ></ FaCheckSquare>
        </div>
      );
    }
    else{
      return (
        <div
          className=" absolute top-0 right-0 flex justify-center items-center w-8 h-8 rounded-full m-2 p-1"
          onClick={(event) => addProductsCart(event, data.data)}
        >
          <TbSquareRoundedPlusFilled className=" text-blue-700 w-20 h-20 "></ TbSquareRoundedPlusFilled>
        </div>
      );
    }
    
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className=" relative mb-3 w-full h-4/5">
        <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.image}
          alt={data.data.name}
        />
        {renderIcon(data.data.product_id)}
      </figure>
        <p className=" flex justify-between">
          <span className=" text-sm font-light">{data.data.name}</span>
          <span className=" text-lg font-medium">$ {data.data.price}</span>
        </p>
      
    </div>
  );
};

export default Card;