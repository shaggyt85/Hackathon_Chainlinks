'use client'
import React from 'react'
import { daysLeft, startDays, endDays } from '../../utils/dayleft';
import { useThemeContext } from '../../Context/GetCampaigns';
import  folder  from '@/public/assets/folder.svg'
import Logo from '@/public/assets/Logo.jpg'
import Image from "next/image";

const FundCard = ({owner, target, endAt, startAt, votes, id}) => {
  const remainingDays = daysLeft(endAt);
  const formattedDate = startDays(startAt)
  const formattedEndDate = endDays(endAt)
  const {data} = useThemeContext()

const parsedData = data.map((item) => ({...item}));
const dataFirebase = (id, owner) => {
  return parsedData.find(item => item.address === owner && item.id === id);
};

const item = dataFirebase(id, owner);
if (item) {
  return (
    <div>
      <div className="sm:w-[288px] w-full rounded-[15px] bg-[#e2dfdfec] p-[20px] cursor-pointer">
            <img src={item.image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"  />
            <div className="flex flex-col p-4">
      <div className="flex flex-row items-center mb-[18px]">
        <Image src={folder} alt="tag" className="W-[17px] h-[17px] object-contain" />
        <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Campaign</p>
      </div>
      </div>
      <div className="block">
        <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">Titulo:{item.title}</h3>
        <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">Nombre:{item.name}</h3>
        <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">Description:{item.description}</p>
      </div>
      <div className="flex justify-between flex-wrap mt-[15px] gap-2">
        <div className="flex flex-col">
          <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">amountCollected</h4>
          <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of {target}</p>
        </div>
        {/* <div className="flex flex-col">
          <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
          <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left {target}</p>
        </div> */}
      </div>
      <div className="flex items-center mt-[20px] gap-[12px] ">
        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]"> 
          <Image src={Logo} alt="user" className="w-1/2 h-1/2 object-contain"  />
        </div>
        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{owner}</span></p>
      </div>
      <div className="flex items-center mt-[20px] gap-[12px] ">
        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">Votes <span className="text-[#b2b3bd]">{votes}</span></p>

      </div>
            {/* <p>ID: {id}</p> */}
                        
            {/* <p>Start At: {formattedDate} </p>
            <p>End At: {formattedEndDate} Days</p>
            <p>Finally: {remainingDays}</p> */}
            
          </div>
      {/* <p>ID: {id}</p>
      <p>Name: {item.name}</p>
      <p>Description: {item.description}</p>
      <p>Owner: {owner}</p>
      <p>Target: {target}</p>
      <p>Start At: {formattedDate} </p>
      <p>End At: {formattedEndDate} Days</p>
      <p>Finally: {remainingDays}</p>
      <p>Votes: {votes}</p> */}
    </div>
  );
}
}

export default FundCard