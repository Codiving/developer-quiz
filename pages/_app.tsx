import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Footer, Header } from "src/layout";
import resetCss from "src/styles/reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={resetCss} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
