import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
