import React from "react"

export default function Contact() {
    return (
        <section className="">
            <div className=" flex items-center justify-center relative  ">
                <img
                    className="h-screen w-screen object-cover     "
                    src="src\assets\images\contactbg.png"
                    alt="Cupcakes image"
                />{" "}
                <div className=" max-w-2xl w-10/12 rounded-3xl font-roboto  p-10 bg-white  grid gap-8 absolute  ">
                    <h3 className="text-xl font-inter ">
                        Book a free consultation
                    </h3>
                    <div className="gap-4 grid   ">
                        <label htmlFor="Name">Name</label>
                        <input
                            className="rounded-full p-3 bg-gray-100 border  focus:outline-slate-300"
                            type="text"
                            placeholder="Enter your name"
                        />
                        <label htmlFor="Email">Email</label>
                        <input
                            className="rounded-full p-3 bg-gray-100 border focus:outline-slate-300"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <button
                            href="#"
                            className="bg-yellow-400  px-7 py-2 rounded-full font-inter hover:bg-yellow-500  duration-200 text-sm">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
