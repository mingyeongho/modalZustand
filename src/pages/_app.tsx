import ModalContext from "@/context/ModalContext";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>모달 zustand</title>
      </Head>
      <Component {...pageProps} />
      <ModalContext />
    </>
  );
}
