import "regenerator-runtime/runtime";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vocalization.Pro</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
