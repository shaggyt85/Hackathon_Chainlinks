'use client'
import React, {useState} from 'react'
import { daysLeft, startDays, endDays } from '@/app/utils/dayleft';
import { useThemeContext } from '@/app/Context/GetCampaigns';
import  folder  from '@/public/assets/folder.svg'
import Logo from '@/public/assets/Logo.jpg'
import Image from "next/image";
import { CountBox } from '.';
import { CustomButton } from '.';

const CampaignDetails = ({owner, target, endAt, startAt, votes, id, params}) => {
  const [isLoading, setIsloading] = useState(false)
  const remainingDays = daysLeft(endAt);
  const formattedDate = startDays(startAt)
  const formattedEndDate = endDays(endAt)
  const {data} = useThemeContext()
    
  const idUrl = +params.id
  const parsedData = data.map((item) => ({...item}))
  const dataFirebase = (id, idUrl ) => {
      return parsedData.find(item => item.id === id && item.id === idUrl)
  } ; 
    
    const item = dataFirebase(id, idUrl);
if (item) {
  return (
    <div className='flex 1 h-full w-full justify-center items-center p-4'>
      <div >
      {isLoading && "Loading..."}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            src={item.image}
            alt="campaign"
            className="w-full h-[510px] object-cover rounded-xl"
          />
           <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{
                // width: `${calculateBarPercentage(
                //   item.target
                //   // state.amountCollected
                // )}`
                maxWidth: "100%",
              }}
            ></div> 
          </div> 
        </div>
        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Day Start" value={formattedDate} />
          <CountBox title="Day End" value={formattedEndDate} />
          <CountBox title="Finaliza" value={remainingDays} />
          <CountBox
            title={`Raised of ${target}`}
            value={target}
          />
          <CountBox title="Total Backers" 
          // value={isDonators.length}
           />
        </div>
      </div>
      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] uppercase ">
              Creator
            </h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <Image
                  src={Logo}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain rounded-full"
                />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px]  break-all">
                  {owner}
                </h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] ">
                  Votes: {votes}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px]   uppercase ">
              Story
            </h4>
            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px]  leading-[26px] text-justify">
                {item.description}
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px]   uppercase ">
              Donators
            </h4>
            <div className="mt-[20px] flex flex-col gap-4">
              {/* {isDonators.length > 0 ? (
                isDonators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex justify-between items-center gap-4"
                  >
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-all">{index + 1}. {item.donator}</p>
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-all">
                      {item.donation}</p>
                  </div>
                ))
              ) : ( */}
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                  No Donators yet. be the first one!
                </p>
              {/* )} */}
            </div>
          </div>
        </div>
        <div className=" flex-1">
          <h4 className="font-epilogue font-semibold text-[18px]   uppercase ">
            Fund
          </h4>
          <div className="mt-[20px] flex flex-col p-4  rounded-[10px]">
            <p className="font-epilogue font-medium text-[20px] leading-[30px] text-center ">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue  text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                // value={isAmount}
                // onChange={(e) => setIsAmount(e.target.value)}
              />
              <div className="my-[20px] p-4 rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] ">
                  Back it because you believe in it.
                </h4>
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] ">
                  Support the project for no reward, just because it speaks to
                  you
                </p>
              </div>
              <CustomButton
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                // handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <div className="sm:w-[288px] w-full rounded-[15px] bg-[#e2dfdfec] p-[20px] cursor-pointer">
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
        </div> */}
        {/* <div className="flex flex-col">
          <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
          <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left {target}</p>
        </div> */}
      {/* </div>
      <div className="flex items-center mt-[20px] gap-[12px] ">
        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]"> 
          <Image src={Logo} alt="user" className="w-1/2 h-1/2 object-contain"  />
        </div>
        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{owner}</span></p>
      </div>
      <div className="flex items-center mt-[20px] gap-[12px] ">
        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">Votes <span className="text-[#b2b3bd]">{votes}</span></p>

      </div> */}
            {/* <p>ID: {id}</p> */}
                        
            {/* <p>Start At: {formattedDate} </p>
            <p>End At: {formattedEndDate} Days</p>
            <p>Finally: {remainingDays}</p> */}
            
          {/* </div> */}
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

export default CampaignDetails