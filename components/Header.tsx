"use client";
import Image from "next/image";
import React, { useState } from "react";
import drzLogo from "@/public/Daraz.svg";
import { CgProfile } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Header() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <div className="bg-main flex p-2 justify-center items-center gap-8">
      <div className="flex">
        <div className="w-max h-full p-4 pr-1">
          <h1 className="text-red-600 font-[800] text-2xl">|</h1>
        </div>
        <div className="w-max p-4 pl-0">
          <h1 className="text-white font-bold text-2xl">THE COMMERCE</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative h-12 w-1/2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search in The Commerce"
          className="w-full h-full p-2 pr-14 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="absolute top-[4px] right-[4px] bg-red-600 text-white h-10 w-10 grid place-items-center rounded-lg"
        >
          <FaSearch />
        </button>
      </form>
      <div className="flex gap-4">
        <a
          href="#"
          className="flex justify-center items-center gap-1 text-white"
        >
          <CgProfile size={30} />
          Login
        </a>
        <a
          href="#"
          className="flex justify-center items-center gap-1 text-white"
        >
          Sign Up
        </a>
        <div
          className="flex justify-center items-center gap-1 text-white"
        >
          <TbWorld size={30} />
          <select className="text-white bg-transparent outline-none" name="lan" id="lan">
            <option className="bg-main" value="en">EN</option>
            <option className="bg-main" value="bn">BN</option>
          <FaAngleDown />
          </select>
        </div>
        <Link
          href="/cart"
          className="flex justify-center items-center gap-1 text-white"
        >
          <IoCartOutline size={30} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
