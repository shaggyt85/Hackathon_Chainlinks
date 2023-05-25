"use client";
import Link from "next/link";
import Image from "next/image";
import { Web3Button } from "..";
import { useState } from "react";
import Logo from "../../../public/assets/Logo.jpg";
import menu from "../../../public/assets/menu.svg";
import search from "../../../public/assets/search.svg";
import { useRouter } from "next/navigation";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Campaigns",
    route: "/pages/campañas",
  },
  {
    label: "About",
    route: "/pages/nosotros",
  },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick () {
    const router = useRouter();
    router.push("/pages/nosotros");
  }

  
  return (
    <nav className="flex items-center justify-between w-full h-[70px] py-4 bg-white shadow-md ">
      <div className="flex flex-row py-2 pl-4 pr-2 h-[52px] items-center">
        {/* logo  */}
        <Link href="/">
          <Image
            className="object-contain rounded-[100px]"
            src={Logo}
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      {/* search bar   */}
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#e5e5ee] items-center rounded-[100px]">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />
        <div className="w-[72px] h-full rounded-[20px] bg-[#E8831D] flex justify-center items-center cursor-pointer">
          <Image
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>
      {/* links  */}
      <div>
        <ul className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex items-center space-x-4">
            <Web3Button
          handleClick={handleClick}
        />
          
      </div>

      
      {/* Mobile Menu */}
      <div className="flex flex-row py-2 pl-4 pr-2 h-[52px] items-center">
        <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
          <Image src={menu} alt="menu" width={30} height={30} />
          {showMenu && (
            <div>
            <ul
              className={`absolute top-[70px] right-0 left-0 bg-[#e5e5ee]  shadow-secondary py-4 cursor-pointer z-20 ${
                !showMenu ? "-translate-y-[100vh]" : "translate-y-0"
              } transition-all duration-700`}
            >
              {links.map((link) => (
                <li
                  key={link.label}
                  className="flex align-center justify-center  py-4 px-8"
                >
                  <Link
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                    href={link.route}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <Web3Button />
            </ul>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
