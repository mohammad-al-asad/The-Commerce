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

function Header() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <div className="bg-main flex p-2 justify-center items-center gap-8">
      <div className="w-28">
      <Image priority src={drzLogo} alt="daraz-logo" />
      </div>
      <form onSubmit={handleSubmit} className="relative h-12 w-1/2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search in Daraz"
          className="w-full h-full p-2 pr-14 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="absolute top-[4px] right-[4px] bg-[#ea581a4f] text-main h-10 w-10 grid place-items-center rounded-lg"
        >
          <FaSearch />
        </button>
      </form>
      <div className="flex gap-4">
        <a
          href=""
          className="flex justify-center items-center gap-1 text-white"
        >
          <CgProfile size={30} />
          Login
        </a>
        <a
          href=""
          className="flex justify-center items-center gap-1 text-white"
        >
          Sign Up
        </a>
        <a
          href=""
          className="flex justify-center items-center gap-1 text-white"
        >
          <TbWorld size={30} />
          EN
          <FaAngleDown />
        </a>
        <a
          onClick={()=>router.push(`/cart`)}
          className="flex justify-center items-center gap-1 text-white"
        >
          <IoCartOutline size={30} />
        </a>
      </div>
    </div>
  );
}

export default Header;
