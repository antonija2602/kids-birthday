import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";

export default function Navbar(props) {
    const { toggleSideMenu } = props;
    return (
        <section className="bg-stone-700 h-20 flex items-center justify-between fixed inset-0 xl:px-20 z-30 ">
            {/* hamburger menu */}
            <button
                onClick={toggleSideMenu}
                className="md:hidden  ml-6 ">
                <RxHamburgerMenu className="text-yellow-400 text-3xl" />
            </button>

            {/* logo */}
            <FaCakeCandles className="hidden text-yellow-300  text-4xl lg:flex ml-16" />

            {/* menu */}
            <div className="md:flex ml-16 gap-16 xl:gap-28 text-yellow-200 font-bold  hidden lg:ml-0  ">
                <a
                    href="#"
                    className="hover:text-yellow-400 focus:text-orange-300">
                    Home
                </a>
                <a
                    href="#"
                    className="hover:text-yellow-400 focus:text-orange-300">
                    About
                </a>
                <a
                    href="#"
                    className="hover:text-yellow-400 focus:text-orange-300">
                    Contact
                </a>
            </div>

            {/* phone number - call button */}
            <button className="bg-yellow-200 flex items-center px-8 py-3  rounded-full mr-6 md:mr-12 hover:bg-yellow-300  ">
                <FaPhoneAlt /> +1 (234) 567-8910
            </button>
        </section>
    );
}
