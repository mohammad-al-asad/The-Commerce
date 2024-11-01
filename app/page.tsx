"use client";

import ProductGroup from "@/components/ProductGroup";
import useProduct from "@/hooks/useProduct";
import { useEffect } from "react";

export default function Home() {
  const { getAllData, product } = useProduct();
  useEffect(() => {
    getAllData();
  }, [getAllData]);
  const flashProduct: any = [];
  product.map((item: any, index: number) => {
    console.log(flashProduct);

    if (index > 7 && index < 13) {
      flashProduct.push(item);
    }
  });
  return (
    <div className="p-10">
      <div>
        <h2 className="font-bold text-3xl py-3 text-white">Flash Sale</h2>
        <ProductGroup products={flashProduct} />
      </div>
      <div>
        <h2 className="font-bold text-3xl py-3 mt-6 text-white">For You</h2>
        <ProductGroup products={product} />
      </div>
    </div>
  );
}
