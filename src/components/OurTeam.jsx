import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurTeam() {
    return (
        // <!-- component -->
        <section className="bg-orange-50 py-12 grid justify-center ">
            <div className="max-w-7xl mx-auto px-8">
                <div className=" text-center mb-12">
                    <h2 className="text-2xl md:text-5xl  font-lobster ">
                        Our Team
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* card */}
                    <div className=" max-w-sm bg-white rounded-lg shadow-sm">
                        <div className="flex flex-col items-center p-10">
                            <img
                                className="w-44 h-44 mb-5 rounded-full shadow-lg object-cover object-right "
                                src="./images/natashaivanova.jpg"
                                alt="Natasha Ivanova image"
                            />
                            <h5 className="mt-1 mb-4 text-2xl font-bold text-yellow-500 ">
                                Natasha Ivanova
                            </h5>
                            <span className="text-md text-gray-500 italic ">
                                Company Founder
                            </span>
                            <div className="flex mt-4 md:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-6xl  text-center rounded-lg hover:opacity-65 duration-200 ">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className=" max-w-sm bg-white rounded-lg shadow-sm">
                        <div className="flex flex-col items-center p-10">
                            <img
                                className="w-44 h-44 mb-5 rounded-full  shadow-lg object-cover object-left"
                                src="./images/mikeperry.jpg"
                                alt="Mike Perry image"
                            />
                            <h5 className="m-1 mb-4 text-2xl font-bold text-yellow-500 ">
                                Mike Perry
                            </h5>
                            <span className="text-md text-gray-500 italic ">
                                Animator
                            </span>
                            <div className="flex mt-4 md:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-6xl text-center rounded-lg hover:opacity-65 duration-200 ">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className=" max-w-sm bg-white rounded-lg shadow-sm">
                        <div className="flex flex-col items-center p-10">
                            <img
                                className="w-44 h-44  mb-5 rounded-full  shadow-lg object-cover"
                                src="./images/nicolestone.jpg"
                                alt="Nicole Stone image"
                            />
                            <h5 className="m-1 mb-4 text-2xl font-bold text-yellow-500 ">
                                Nicole Stone
                            </h5>
                            <span className="text-md text-gray-500 italic ">
                                Confectioner
                            </span>
                            <div className="flex mt-4 md:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-6xl text-center rounded-lg hover:opacity-65 duration-200 ">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className=" max-w-sm bg-white rounded-lg shadow-sm">
                        <div className="flex flex-col items-center p-10">
                            <img
                                className="w-44 h-44  mb-5 rounded-full  shadow-lg object-cover object-right"
                                src="./images/stevehudson.jpg"
                                alt="Steve Hudson image"
                            />
                            <h5 className="m-1 mb-4 text-2xl font-bold text-yellow-500 ">
                                Steve Hudson
                            </h5>
                            <span className="text-md text-gray-500 italic ">
                                Screenwriter
                            </span>
                            <div className="flex mt-4 md:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-6xl text-center rounded-lg hover:opacity-65 duration-200 ">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className=" max-w-sm bg-white rounded-lg shadow-sm">
                        <div className="flex flex-col items-center p-10">
                            <img
                                className="w-44 h-44  mb-5 rounded-full shadow-lg object-cover object-right "
                                src="./images/marylarson.jpg"
                                alt="Mary Larson image"
                            />
                            <h5 className="m-1 mb-4 text-2xl font-bold text-yellow-500 ">
                                Mary Larson
                            </h5>
                            <span className="text-md text-gray-500 italic ">
                                Painter
                            </span>
                            <div className="flex mt-4 md:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-6xl  text-center rounded-lg hover:opacity-65  duration-200 ">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className=" max-w-sm bg-white rounded-lg shadow-sm">
                        <div className="flex flex-col items-center p-10">
                            <span className="text-sm text-gray-500  ">
                                While we may not have been the first to enter
                                the kids' birthday party market, we're proud to
                                lead the way by offering an instant online
                                booking system. With us, organizing the perfect
                                birthday celebration is just a few clicks away!
                            </span>
                        </div>
                        <div className="flex justify-center pb-6">
                            <a
                                href="#"
                                className="">
                                <FaArrowRightLong className="text-4xl hover:opacity-65 duration-200" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
