
import React, { FC } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';


import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  

  return (
    <div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    
                    
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </div>
  )
}

export default App
