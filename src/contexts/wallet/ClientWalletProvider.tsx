"use client";

import WalletProviderWrapper from './WalletProviderWrapper';

export function ClientWalletProvider({ children }: { children: React.ReactNode }) {
  return <WalletProviderWrapper>{children}</WalletProviderWrapper>;
}