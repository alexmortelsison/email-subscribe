import React from "react";
import image from "../assets/image.jpg";

const Card = () => {
  return (
    <div className="bg-zinc-700 h-screen flex items-center justify-center">
      <div className="p-2 mx-6 rounded-2xl bg-zinc-800">
        <div className="flex flex-col md:flex-row">
          <img
            src={image}
            alt=""
            className="rounded-xl h-80 md:h-64 md:rounded-l-64 md:rounded-r-none transform hover:scale-105 duration-200"
          ></img>
          <div className="p-6 md:p-12">
            <h2 className="text-white font-serif text-center md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs text-xs text-white my-4 leading-5 tracking-wide text-center md:text-left">
              Eat better and exercise better. Sign up for the Diet & Fitness
              newsletter.
            </p>
            <div className="flex flex-col mt-5 md:flex-row space-y-4 md:space-x-3 md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="px-2 py-4 rounded-md focus:outline-none bg-zinx-800 border-zinc-600 placeholder:text-center md:placeholder:text-left"
              ></input>
              <button className="py-4 px-5 rounded-md bg-lime-500 hover:bg-lime-700 hover:text-white duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
