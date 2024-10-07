import Image from "next/image";
import React from "react";
import Rating from "@/components/utility/Rating";
import shopNow from "@/public/shopNow.png";
import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/redux/CartSlice";

function ProductDetails({ product }: { product: any }) {
  const dispatch = useAppDispatch()
  return (
    <div className="grid grid-cols-2 w-[70%]">
      <div className="relative w-[70%] ml-10">
        <Image
          src={product.image}
          alt={product.title}
         fill
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <p className="my-3 line-clamp-6">{product.description}</p>
        <Rating rating={product.rating} />
        <Image className="my-5" src={shopNow} alt={product.title} />
        <h1 className="text-main text-3xl font-semibold">{`$${product.price}`}</h1>
        <div className="buttons flex gap-6 my-5">
          <button className="bg-[#26abd4] p-3 w-60 text-white">Buy Now</button>
          <button onClick={()=>dispatch(addToCart(product))} className="bg-main p-3 w-60 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
