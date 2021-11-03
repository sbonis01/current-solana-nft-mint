import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";
import { AppProps } from "next/app";
// import $ from "jquery";

require("../styles/globals.css");
require("../styles/solana.css");

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

const WalletConnectionProvider = dynamic<{ children: ReactNode }>(
  () =>
    import("../components/walletConnectionProvider").then(
      ({ WalletConnectionProvider }) => WalletConnectionProvider
    ),
  {
    ssr: false,
  }
);

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <WalletConnectionProvider>
      <WalletModalProvider>
        <Component {...pageProps} />
      </WalletModalProvider>
    </WalletConnectionProvider>
  );
};

export default MyApp;
