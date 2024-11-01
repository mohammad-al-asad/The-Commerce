import Image from "next/image";
import React from "react";
import Rating from "./utility/Rating";
import Link from "next/link";

function ProductGroup({ products }: { products: any }) {
  return (
    <div className="grid grid-cols-5 gap-y-6 gap-x-4">
      {products.map((product: any) => {
        return (
          <Link key={product.id} href={`/product/${product.id}`} className="bg-white p-4 space-y-2 hover:shadow-[3px_3px_5px_rgba(151, 2, 2, 0.3)] rounded-md">
            <div className="relative h-40 ">
              <Image fill src={product.image} alt={product.title} />
            </div>
              <h2 className="line-clamp-2">{product.title}</h2>
            <div className="flex gap-4">
            <p className="font-[500] text-main">${product.price}</p>
            <p className="text-sm line-through text-gray-400">${product.price}</p>
            </div>
            <Rating rating={product.rating}/>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductGroup;
