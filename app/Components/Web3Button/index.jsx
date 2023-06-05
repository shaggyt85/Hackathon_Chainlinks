'use client'
import React, { useEffect } from 'react'
// import { useRouter } from 'next/navigation';
import { ConnectWallet } from '@thirdweb-dev/react'
import { useStateContext } from '@/app/Context/Thirdweb';


const Web3Button = () => {
  // const router = useRouter();
  const {address} = useStateContext()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
      
  useEffect(() => {
    if (!address) {
      setIsLoggedIn(false)
      // router.push('/');
    }else{
      setIsLoggedIn(true);
    // router.push('/pages/perfil');
    }
  }), [address]


  return (
    <>
    <div>
      {isLoggedIn ? (<ConnectWallet  />) : (<ConnectWallet  />)}
    </div>
    </>
  )
}

export default Web3Button