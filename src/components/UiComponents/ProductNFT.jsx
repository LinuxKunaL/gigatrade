import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { getUserNamePicByEthAddress } from "../../apis/profile.apis";
import demoUserAvatar from "../../assets/images/user-demo-avatar.svg";

export function ProductNFT({ key, data, className, AuthorHide }) {
  const [NFTsCreatorDetails, setNFTsCreatorDetails] = useState({});
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await getUserNamePicByEthAddress(data.createdBy);
        setNFTsCreatorDetails(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [data.createdBy]);
  return (
    <Link
      to={"/nft/" + data.NFTid}
      key={key}
      className={`${className} border-[1px] border-gray-700/70 group transition-all hover:-translate-y-3 rounded-xl flex flex-col gap-2 flex-2 w-[15pc] bg-darkBlue-500 p-3`}
    >
      <div className={`${AuthorHide} flex gap-3 items-center`}>
        <img
          className="w-11 rounded-full bg-darkBlue-300 h-11"
          src={
            NFTsCreatorDetails ? NFTsCreatorDetails.userProfile : demoUserAvatar
          }
          alt="error in image"
        />
        <div className="flex flex-col">
          <span className="text-white/50 text-xs line-clamp-1 rounded-md  w-[6pc] h-[1pc]">
            Created by :
          </span>{" "}
          <Link
            to={`/author/${data.createdBy}`}
            className="text-white/90 rounded-md w-[9pc] h-[1.5pc] hover:text-pink-500 hover:scale-[99%] transition-all line-clamp-1 text-sm font-normal"
          >
            {NFTsCreatorDetails.userName
              ? NFTsCreatorDetails.userName
              : data.createdBy
              ? `${data.createdBy.slice(0, 5)}...${data.createdBy.slice(38)}`
              : null}
          </Link>
        </div>
      </div>
      <div
        className={`${className} border-[1px] relative z-30 hover:shadow-xl shadow-darkBlue-700 hover:-translate-y-1  border-gray-700/70 h-[17pc] bg-darkBlue-600/40 transition-all w-full overflow-hidden rounded-xl flex items-center justify-center`}
      >
        <img
          className="h-full cw-max !min-w-fit group-hover:scale-125 transition-all"
          src={data.image}
          alt=""
        />
        {/* <div className="bg-darkBlue-500 h-[2pc] -bottom-1 -right-1 w-[10pc] border-[1px] border-gray-700/70 rounded-tl-2xl absolute z-30">
          10:12:21
        </div> */}
      </div>
      <h2 className="text-white/90 text-base transition-all font-semibold hover:text-pink-500">
        {data.title}
      </h2>
      <div className="flex w-full xs:h-[2.4pc] justify-between items-center">
        <div className="flex justify-between flex-col w-full">
          <span className="text-white/50 text-xs">Current Price</span>
          <b className="flex text-sm text-white/90 items-center gap-1">
            <FaEthereum />
            {data.price}
          </b>
        </div>
        <div
          className="p-1 hover:bg-pink-600 font-semibold
          text-darkBlue-400 text-xs hover:text-white text-white/80 bg-white/840 bg-darkBlue-300 backdrop-blur-lg flex items-center justify-center  rounded-lg hover:scale-90 transition-all px-6 h-full "
        >
          Buy
        </div>
      </div>
    </Link>
  );
}
export function SkeletonProductNFT({ key }) {
  return (
    <div
      key={key}
      className="animate-pulse rounded-xl flex flex-col gap-2 flex-2 w-[15pc] bg-darkBlue-500 p-3 xs:flex-1"
    >
      <div className="flex gap-3 items-center">
        <img
          className="w-11 rounded-full bg-darkBlue-300 h-11"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          alt="error in image"
        />
        <div className="flex gap-1 flex-col">
          <span className="text-white/50 text-xs line-clamp-1 rounded-md bg-darkBlue-300 w-[4.6pc] h-[1pc]   " />
          <h2 className="text-white/90 w-[8pc] h-[1.5pc] rounded-md bg-darkBlue-300 line-clamp-1 text-sm font-normal" />
        </div>
      </div>
      <div className="h-[12pc] transition-all relative w-full overflow-hidden rounded-xl flex items-center justify-center">
        <img
          className="h-full w-full group-hover:scale-125 transition-all rounded-md bg-darkBlue-300"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          alt="error in image"
        />
      </div>
      <h2 className="text-white/90 transition-all  rounded-md bg-darkBlue-300 w-[13pc] h-[1.5pc] line-clamp-1 font-semibold hover:text-pink-500" />
      <div className="flex w-full xs:h-[2.4pc] justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <span className="text-white/50 text-xs rounded-md bg-darkBlue-300 w-[4pc] h-[1pc]" />
          <b className="flex text-sm text-white/90 items-center gap-1 rounded-md bg-darkBlue-300 line-clamp-1 w-[5pc] h-[1.4pc]" />
        </div>
        {/* <div className="w-[5pc] rounded-md bg-darkBlue-300  px-4 h-full " /> */}
      </div>
    </div>
  );
}
