import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./../styles/globals.scss";
import "./../styles/theme.scss";

import type { AppProps } from "next/app";
const theme = extendTheme({
  colors: {
    brown: {
      50: "#ffc7ac",
      100: "#B794F4",
      500: "#a26040",
      // ...
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
