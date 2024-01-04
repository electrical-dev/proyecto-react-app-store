import { useContext } from "react";
import "./style.css";
import { RxEyeClosed } from "react-icons/rx";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);


  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-5 border border-black rounded-lg bg-white `}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2 className=" font-medium text-xl ">Detail</h2>
        <div>
          <RxEyeClosed
            className=" text-blue-700 cursor-pointer "
            onClick={ ()=> context.closeProductDetail()}
          ></RxEyeClosed>
        </div>

      </div>
      <figure className=" px-6">
        <img className=" w-full h-full rounded-lg"
        src={context.productToShow.image}
        alt={context.productToShow.name}>
        </img>
      </figure>
      <p className="flex flex-col p-6">
        <span className=" font-medium text-2xl">$ {context.productToShow.price}</span>
        <span className=" font-medium text-md">{context.productToShow.name}</span>
        <span className=" font-light text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
