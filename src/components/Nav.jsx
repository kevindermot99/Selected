import defaultPfp from "../assets/images/default-pfp.jpg"
import { RiUser6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Notification from "./Notification";
import { TbSunMoon } from "react-icons/tb";
import { LuLibrary } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { BsArrowsFullscreen } from "react-icons/bs";

function Nav() {



    return (

        <header className="font-montserrat w-ful max-sm:sticky top-0 bg-gray-900 z-20 relative pl-5 pr-5 max-sm:px-5">
            {/* <Headroom pinStart={0}> */}
            <nav className="flex justify-between items-center py-3 sticky top-0 z-index-10 px-3">
                


                <form className='relative w-full max-w-[450px]'>
                    <input className="search transition bg-gray-900  text-sm ring-1 ring-gray-800 placeholder:text-gray-600 text-primary  " type="search" placeholder="Find a Book.." />
                    <button type="submit" className="absolute top-0 bottom-0 m-auto right-1 transition hover:bg-gray-800 h-[85%] w-[40px] rounded-lg flex justify-center items-center">
                        <RiSearch2Line className="text-primary text-lg" />
                    </button>
                </form>

                <div className="flex w-fit justify-end items-center min-w-[170px]  ">

                    <a href="#" className="group navbar-link p-2">
                        <TbSunMoon className="text-2xl cursor-pointer relative transition text-primary group-hover:text-main-color" />
                    </a>

                    <a href="#" className="group navbar-link p-2 ml-2">
                        <LuLibrary className="text-2xl cursor-pointer relative transition text-primary group-hover:text-main-color" />
                        {/* <Notification label={9} /> */}
                    </a>
                    <a href="#" className="group navbar-link rounded-full ml-3 flex items-center justify-center relative">
                        <img src={defaultPfp} className=" h-8 rounded-full " />
                        <p className=" text-sm font-semibold absolute w-fit whitespace-nowrap bg-white py-2 px-3 right-0 -bottom-[140%] rounded-m ring-1 ring-gray-200 rounded-lg tranition hidden group-hover:block">Clare thomson</p>
                    </a>

                </div>

            </nav>
            {/* </Headroom> */}
        </header>

    )
}

export default Nav