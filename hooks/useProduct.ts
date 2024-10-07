import { supabase } from "@/lib/supabase/product";
import { useState } from "react";

export default function useProduct() {
  const [product, setProduct] = useState<any>([]);
  const [filteredProduct, setFilteredProduct] = useState<any>([]);
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getAllData() {
    setError(false);
    const { data, error } = await supabase.from("products").select("*");
    if (data) {
      setProduct(data);
      setLoading(false);
    } else {
      console.log(error.message);
      setError(true);
    }
  }

  async function getFilteredData(query: string) {
    setError(false);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .or(
        `title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`
      );
    if (data) {
      setLoading(false);
      setFilteredProduct(data);
    } else {
      console.log(error.message);
      setError(true);
    }
  }

  async function getSingleData(id: any) {
    setError(false);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);

    if (data) {
      setLoading(false);
      setSingleProduct(data[0]);
    } else {
      console.log(error.message);
      setError(true);
    }
  }
  return {
    product,
    getAllData,
    filteredProduct,
    getFilteredData,
    singleProduct,
    getSingleData,
    loading,
    error
  };
}
