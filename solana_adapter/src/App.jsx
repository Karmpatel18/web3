
import React, { FC } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';


import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Input from './components/Input';

function App() {
  

  return (
    <div>
      <ConnectionProvider endpoint={"https://rough-proportionate-shadow.solana-devnet.quiknode.pro/4bf584907bb8f4013c042f72aa6a4e319a5e05b8/"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className="flex flex-col w-full justify-center h-screen items-center">
                    <WalletMultiButton />
                    <Input/>
                    </div>
                    
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </div>
  )
}

export default App
