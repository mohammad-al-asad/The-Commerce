"use client";
import AddressForm from "@/components/AddressForm";
import CheckoutItem from "@/components/CheckoutItem";
import NotFound from "@/components/utility/NotFound";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { databases, db, orderCollection } from "@/lib/Appwrite";
import { RootState } from "@/lib/redux";
import { ID } from "appwrite";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Page() {
  const selectedCarts = useSelector(
    (state: RootState) => state.selectedCart.selectedCart
  );

  const { toast } = useToast();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const authUser: any = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    setUser(authUser);
    if (!authUser) {
      router.replace("/sign-in");
    }
  }, [authUser, router]);

  async function checkout() {
    try {
      await databases.createDocument(db, orderCollection, ID.unique(), {
        userId: user.$id,
        carts: JSON.stringify(selectedCarts),
        totalPrice: JSON.stringify(shippingFee + subtotal),
      });
      toast({
        title: "Order placed successfully",
      });
      router.replace("/cart");
    } catch (error: any) {
      console.log(error.message);
      toast({
        title: "Order failed",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  let subtotal: number = 0;
  let shippingFee: number = 100;
  if (selectedCarts.length === 0) return <NotFound text="No product found" />;
  return (
    <div className="bg-main m-auto w-[96%] lg:w-2/3 rounded-md mt-4 flex flex-col justify-center relative h-[650px]">
      <div className="text-white bg-gray-700 px-8 py-5 text-2xl font-bold mb-6 rounded-t-md">
        Checkout Now
      </div>
      <div className="text-white mb-1 px-5 md:px-8">
        <AddressForm user={user} setUser={setUser} />
        <div className="flex items-center gap-2">
          <Input className="w-5" type="radio" checked={true} />
          <p>Cash on delivery</p>
        </div>
      </div>

      <h1 className="text-white text-lg font-semibold mb-3 p-2 md:px-6">All Items:</h1>
      <div className="h-[400px] border-2 p-2 overflow-x-hidden overflow-y-auto custom-scrollbar mx-4 md:mx-8">
        {selectedCarts.map((cart: any) => {
          subtotal += cart.product.price * cart.count;
          return <CheckoutItem key={cart.product.$id} cart={cart} />;
        })}
      </div>
      <h3 className="text-white text-sm md:text-lg md:pr-16 font-semibold flex justify-end pt-3 pr-12 text-right">
        <p className="mr-20">Subtotal:</p>
        <p className="w-20">{parseFloat(subtotal.toFixed(2))}</p>
      </h3>
      <h3 className="text-white text-sm md:text-lg md:pr-16 font-semibold flex justify-end pt-2 pr-12 mb-2 text-right">
        <p className="mr-20">Shipping:</p>
        <p className="w-20">{"100"}</p>
      </h3>
      <div className="bg-gray-700 w-full flex justify-between p-3 md:px-5 rounded-b-md">
        <h3 className="text-white text-lg font-semibold mr-10 my-auto">
          Total: <span className="text-red-500">{parseFloat(subtotal.toFixed(2)) + shippingFee}</span>
        </h3>
        <Button className="bg-red-600 hover:bg-red-400" onClick={checkout}>
          Place Order
        </Button>
      </div>
    </div>
  );
}

export default Page;
