import React from "react";
import ProductCard from "./ProductCard";

function Result({
  filteredProduct,
  query,
}: {
  filteredProduct: any;
  query: any;
}) {
  return (
    <div>
      <h1 className="p-3 font-semibold">{`${filteredProduct.length} items found for`} <span className="text-main">{`"${query}"`}</span></h1>
      <div className="grid grid-cols-6 gap-5">
      {filteredProduct.map((item:any,index:number)=><ProductCard product={item} key={index}/>)}
      </div>
    </div>
  );
}

export default Result;
