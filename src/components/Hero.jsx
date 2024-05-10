import React from "react";

export default function Hero() {
    return (
        <section>
            <div className="grid items-center  relative">
                <img
                    className="h-screen w-screen object-cover     "
                    src="./images/herobg.jpeg"
                    alt="A boy with a hat image"
                />
                <div className="grid gap-5 p-10 rounded-r-3xl   w-11/12 md:w-4/5 xl:w-2/4 font-roboto bg-white absolute bottom-14 ">
                    <h1 className="text-yellow-400  text-7xl md:text-8xl  font-lobster ">
                        Birthday
                    </h1>
                    <h3 className="text-3xl md:text-6xl   ">party</h3>

                    <p className=" text-pretty  ">
                        ​Create an unforgettable birthday celebration for your
                        child, one that's filled with joy, excitement, and
                        cherished memories. Envision a day when your little
                        one's eyes light up with happiness, where their laughter
                        fills the air, and where they feel loved and special in
                        every possible way.
                    </p>
                    <div className="py-4">
                        <button
                            href="#"
                            className="bg-yellow-400  px-7 py-2 rounded-full font-inter hover:bg-slate-500 hover:text-slate-100  duration-200 text-sm">
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
