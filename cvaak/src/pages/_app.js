import store from "@/redux/store";
import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
