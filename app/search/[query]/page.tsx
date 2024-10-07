/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useProduct from "@/hooks/useProduct";
import { useParams } from "next/navigation";
import Result from "@/components/Result";
import React, { useEffect } from "react";

function Query() {
  const { query } = useParams();
  const { filteredProduct, getFilteredData, loading, error } = useProduct();
  useEffect(() => {
    getFilteredData(query.toString());
  }, []);

  return (
    <div className="p-2">
      {loading ? (
        <h2 className="text-center text-xl font-bold">Loading...</h2>
      ) : error ? (
        <h2 className="text-center text-xl font-bold">There was an error.</h2>
      ) : (
        <Result filteredProduct={filteredProduct} query={query} />
      )}
    </div>
  );
}

export default Query;
