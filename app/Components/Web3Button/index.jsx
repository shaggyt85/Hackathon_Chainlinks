'use client'
import React, { useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';


const Web3Button = () => {
  const router = useRouter();
  const { isConnected } = useAccount();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  useEffect(() => {
    if (isConnected) {
      setIsLoggedIn(true);
      router.push('/pages/perfil');
    }
     else {
    setIsLoggedIn(false);
  } },  [isConnected])

  

  return (
    <>
    <div>
      {isLoggedIn ? (<ConnectButton variant='primary' label='sign out' chainStatus="icon" />) : (<ConnectButton variant='primary' label='sign in' chainStatus="icon" />)}
    </div>
    </>
  )
}

export default Web3Button