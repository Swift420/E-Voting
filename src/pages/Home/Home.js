import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Products from './Products.js'
import Reports from './Reports'
import { Routes,Route} from 'react-router-dom'


const Home = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard, lname: Home},
    { name: "user", link: "/products", icon: AiOutlineUser , lname: Products},
    { name: "messages", link: "/", icon: FiMessageSquare, lname: Products},
    { name: "analytics", link: "/", icon: TbReportAnalytics,lname: Products, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder,lname: Products },
    { name: "Cart", link: "/", icon: FiShoppingCart,lname: Products },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true ,lname: Products},
    { name: "Setting", link: "/", icon: RiSettings4Line,lname: Products },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>

              {menu?.lname}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        <Routes>
        <Route  path="/"  element={<Reports />} />
        <Route  path="/products"  element={<Products />}/>
        <Route  path="/reports" element={<Reports />}/>

      </Routes>
      </div>
    </section>
  );
};

export default Home;