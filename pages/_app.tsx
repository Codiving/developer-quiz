import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Footer, Header } from "src/layout";
import resetCss from "src/styles/reset";
import ThemeProvider from "styles/src/context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Global styles={resetCss} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
