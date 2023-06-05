import React from 'react'
import FundCard from '../FundCard'
import Image from 'next/image'
import loader from '@/public/assets/loader.svg'

const UserDisplayCampaigns = ({title, isLoading, userCampaigns}) => {
  return (
    <div>
        <h1 className="font-epilogue font-semibold text-[18px] text-left">{title}</h1>
        <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (<Image
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px]  object-contain"
          />)}
        {!isLoading && userCampaigns.length === 0 && (<p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">You have not created any campaigns yet</p>)}
        {!isLoading && userCampaigns.length > 0 && userCampaigns.map((campaign, i) => <FundCard key={i}{...campaign} />)}
        </div>
    </div>
  )
}

export default UserDisplayCampaigns