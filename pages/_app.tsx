import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import resetCss from "src/styles/reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={resetCss} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
