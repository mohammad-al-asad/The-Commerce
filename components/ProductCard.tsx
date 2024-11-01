import React from "react";
import Image from "next/image";
import Rating from "./utility/Rating";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ProductCard({ product }: { product: any }) {
  const router = useRouter();

  return (
    <Link
      href={`/product/${product.id}`}
      className="hover:shadow-[8px_4px_10px_rgb(255, 255, 255)] group/card p-3 h-auto flex flex-col items-center justify-between rounded-md bg-white"
    >
      <div className="relative mb-4 w-[170px] h-[160px] p-2">
        <Image
          className="mix-blend-multiply"
          priority
          src={product.image}
          alt={product.title}
          fill
        />
      </div>
      <div className="w-full">
        <h1 className="text-sm font-semibold line-clamp-1 mb-1 group/edit group-hover/card:text-blue-500">
          {product.title}
        </h1>
        <p className="text-sm line-clamp-2 ">{product.description}</p>
        <Rating rating={product.rating} />
        <h1 className="font-semibold text-main">{`$${product.price}`}</h1>
      </div>
    </Link>
  );
}

export default ProductCard;
