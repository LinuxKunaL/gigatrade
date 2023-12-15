import React from "react";
import { BsStars } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiUpload } from "react-icons/ti";

function AddNewNFT() {
  return (
    <div className="flex flex-col p-5 overflow-y-auto">
      <h1 className="text-white/90 font-semibold text-2xl mt-4">
        Create New NFT
      </h1>
      <div className="flex flex-row gap-2 items-center text-md mt-4 text-white/70">
        <BsStars />
        <p>once created a NFT we cannot change its details </p>
      </div>
      <div className=" h-full flex gap-8">
        <div
          id="image-box"
          className=" flex-auto mx-10 my-10 rounded-xl outline-dashed outline-pink-500/30 w-[35%] flex flex-col dark:bg-darkBlue-500 p-3 gap-3 items-center justify-center"
        >
          <TiUpload className="text-purple-500 text-2xl" />
          <b className="text-white/80">Upload File</b>
          <span className="text-white/70">
            Drag or choose your file to upload
          </span>
          <p className="text-white/50">PNG, GIF, WEBP, MP4 or MP3.Max 1Gb.</p>
          <button className="py-3 px-10 flex flex-row items-center gap-2 text-white/90 font-semibold text-md  bg-gradient-to-tr from-pink-500 to-purple-500 rounded-xl ">
            Create <FaArrowLeftLong className="-rotate-[-140deg]" />
          </button>
        </div>
        <div className="flex-auto">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Product Name *
              </label>
              <input
                className=" bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white/70"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Collection
              </label>
              <select
                className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white/70"
                name=""
                id=""
              >
                <option selected>Choose a Collection</option>
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Description *
              </label>
              <textarea
                rows={10}
                className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white/70"
                type="text"
                placeholder="Please describe your product"
              />
            </div>
            <div className="flex justify-between flex-row">
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-white/70 font-semibold">
                  Price *
                </label>
                <input
                  className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white/70"
                  type="text"
                  placeholder="Price"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-white/70 font-semibold">
                  Royalty
                </label>
                <input
                  className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white/70"
                  type="text"
                  placeholder="Royalty"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-white/70 font-semibold">
                  Size
                </label>
                <input
                  className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white/70"
                  type="text"
                  placeholder="Size"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Properties
              </label>
              <input
                className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white/70"
                type="text"
                placeholder="Properties"
              />
            </div>
            <div className="flex gap-5">
              <button
                type="submit"
                class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
              >
                Submit
              </button>
              <button
                type="submit"
                class="text-white bg-darkBlue-700 hover:bg-darkBlue-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-darkBlue-500 dark:hover:bg-darkBlue-600 dark:focus:ring-darkBlue-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewNFT;
