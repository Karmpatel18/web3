
import React, { FC } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';


import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import RequestAirdrop from './components/RequestAirdrop';

function App() {
  

  return (
    <div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className="flex flex-col min-h-screen bg-white w-full  h-screen items-center font-mono">
                    <div className='w-full flex justify-between mt-12 max-w-2xl px-3 items-center py-3 bg-neutral-50 rounded-lg shadow-md shadow-neutral-200'>
                      <div className='text-3xl font-bold text-purple-900 tracking-tighter ml-1.5'>Solfaucet</div>
                      <div><WalletMultiButton /></div>
                    </div>
                    
                    <div className="flex w-full mt-36 justify-center">
                    <RequestAirdrop/>
                    </div>
                    </div>
                    
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </div>
  )
}

export default App
