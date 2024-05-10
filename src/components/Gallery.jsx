import React from "react"

export default function Gallery() {
    return (
        <section className="grid py-12 gap-14 justify-items-center ">
            <h1 className="text-center  font-lobster text-2xl md:text-5xl   ">
                Gallery
            </h1>

            <div className=" grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 container lg:w-9/12  px-5 -z-10 ">
                <div className="flex relative ">
                    <img
                        alt="gallery"
                        className="inset-0 w-full h-full object-cover object-center"
                        src="src\assets\images\gallery1.jpg"
                    />
                </div>
                <div className="flex relative ">
                    <img
                        alt="gallery"
                        className=" inset-0 w-full h-full object-cover object-center"
                        src="src\assets\images\gallery2.jpeg"
                    />
                </div>
                <div className="flex relative">
                    <img
                        alt="gallery"
                        className=" inset-0 w-full h-full object-cover object-center"
                        src="src\assets\images\gallery3.jpeg"
                    />
                </div>
                <div className="flex relative">
                    <img
                        alt="gallery"
                        className=" inset-0 w-full h-full object-cover object-center"
                        src="src\assets\images\gallery4.jpeg"
                    />
                </div>
                <div className="flex relative">
                    <img
                        alt="gallery"
                        className=" inset-0 w-full h-full object-cover object-center"
                        src="src\assets\images\gallery5.jpeg"
                    />
                </div>
                <div className="flex relative">
                    <img
                        alt="gallery"
                        className=" inset-0 w-full h-full object-cover object-center"
                        src="src\assets\images\gallery6.jpg"
                    />
                </div>
            </div>
            <button className="bg-yellow-400  px-7 py-2 rounded-full font-inter hover:bg-slate-500 hover:text-slate-100  duration-200 text-sm">
                VIEW MORE
            </button>
        </section>
    )
}
