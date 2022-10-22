import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart, AiOutlineTeam } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import {FaHubspot } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Products from './Products.js'
import Overview from './Overview'
import { Routes,Route} from 'react-router-dom'
import Candidates from "./Candidates.js";
import CandidateDetails from "../Details/CandidateDetail/CandidateDetails.js";
import VoteCategory from "./VoteCategory.js";
import CandidateScreen from "./CandidateScreen.js";
import Report from "./Report.js";



const Home = () => {
  const menus = [
    { name: "Overview", link: "/", icon: MdOutlineDashboard, lname: Home},
    { name: "Candidates", link: "/candidate", icon: AiOutlineTeam , lname: Products},
    { name: "Vote", link: "/voteCategory", icon: TbReportAnalytics,lname: Products},
    { name: "Portfolio", link: "/products", icon: FaHubspot, lname: Products},
    { name: "Results", link: "/report", icon: FiFolder,lname: Products },
    // { name: "Results", link: "/", icon: FiShoppingCart,lname: Products },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true ,lname: Products},
    { name: "Login", link: "/", icon: AiOutlineUser,lname: Products , margin: true },
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

              
            </NavLink>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        <Routes>
        <Route  path="/"  element={<Overview />} />
        <Route  path="/voteCategory"  element={<VoteCategory/>}/>
        <Route  path="/candidate" element={<Candidates />}/>
        <Route  path="/candidate/:id" element={<CandidateDetails />}/>
        <Route  path="/voteCategory/:candidancy" element={<CandidateScreen/>}/>
        <Route  path="/report" element={<Report/>}/>

      </Routes>
      </div>
    </section>
  );
};

export default Home;