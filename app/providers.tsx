// 'use client';

// import * as React from 'react';
// import { NextUIProvider } from '@nextui-org/system';

// export interface ProvidersProps {
//   children: React.ReactNode;
// }

// export function Providers({ children }: ProvidersProps) {
//   return <NextUIProvider>{children}</NextUIProvider>;
// }

'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css'; // Optionally include default styles for wallet UI

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Define the wallets you want to support
  const wallets = React.useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <NextUIProvider>
      {/* Connection provider to connect to Solana network */}
      <ConnectionProvider endpoint={clusterApiUrl('testnet')}>
        {/* Wallet provider to handle multiple wallets */}
        <WalletProvider wallets={wallets} autoConnect>
          {/* Modal provider to handle wallet selection UI */}
          <WalletModalProvider>
            {children}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </NextUIProvider>
  );
}
