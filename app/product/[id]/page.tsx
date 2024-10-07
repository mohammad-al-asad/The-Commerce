/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import DeliveryDetails from "@/components/DeliveryDetails";
import ProductDetails from "@/components/ProductDetails";
import useProduct from "@/hooks/useProduct";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

// const state = history.state;
function Product() {
  const { getSingleData, singleProduct } = useProduct();
  const { id } = useParams();
  useEffect(() => {
    getSingleData(id);
  }, [id]);

  return (
    <div className="flex m-10 p-5 bg-white gap-10">
      <ProductDetails product={singleProduct} />
      <DeliveryDetails/>
    </div>
  );
}

export default Product;
