import "../styles/globals.css";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import DashLayout from "../components/DashLayout";
function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  if(["/dashboard"].includes(appProps.router.pathname)){
    return (
      <DashLayout>
        <Component {...pageProps} />
      </DashLayout>
    );
  }else{
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
};

export default MyApp;
