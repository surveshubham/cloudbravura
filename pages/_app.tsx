import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Figtree } from "@next/font/google";
import NProgress from "nprogress";
const font = Figtree({
  subsets: ["latin"],
});
import Loader from "../components/Loader";
import Router from "next/router";
import { useState } from "react";
NProgress.configure({ showSpinner: false });
import "nprogress/nprogress.css";
import Head from "next/head";
import ScrollToTop from "../components/ScrollToTop";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setloading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setloading(true);
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    setloading(false);
    NProgress.done();
  });

  return (
    <main className={font.className + " scroll-smooth"}>
      <Layout>
        <ScrollToTop>


          <Head>
            <title>{'Cloud Bravura - Partnering fast paced businesses to scale through Integrated Cloud Solutions.'}</title>
            <link
              rel="canonical"
              href={`https://www.cloudbravura.com/`}
            />
            <link rel="icon" href="/Favcloud.png" />
            {/* OG Tags */}
            <meta property="og:type" content="Home" />
            <meta property="og:title" content={"Cloud Bravura - Partnering fast paced businesses to scale through Integrated Cloud Solutions."} />
            <meta property="og:description" content={"At CloudBravura, we believe in the power of great technical skill and brilliance. Bravura, meaning just that, inspires us to constantly push the limits of what&#x27;s possible in the cloud services industry. Our mission is to provide companies with the expertise and resources they need to implement cloud solutions like AWS, Google Cloud Platform, Azure, and Oracle. We also strive to attract and hire the best cloud talent out there, perpetually building a team of experts who can deliver"} />
            <meta property="og:image" content={"../public/logo.png"} />
            <meta
              property="og:url"
              content={`https://www.cloudbravura.com/`}
            />
            {/*Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta property="twitter:title" content={"Cloud Bravura - Partnering fast paced businesses to scale through Integrated Cloud Solutions."} />
            <meta property="twitter:description" content={"At CloudBravura, we believe in the power of great technical skill and brilliance. Bravura, meaning just that, inspires us to constantly push the limits of what&#x27;s possible in the cloud services industry. Our mission is to provide companies with the expertise and resources they need to implement cloud solutions like AWS, Google Cloud Platform, Azure, and Oracle. We also strive to attract and hire the best cloud talent out there, perpetually building a team of experts who can deliver"} />
            <meta property="twitter:image" content={"../public/logo.png"} />
            <meta
              property="twitter:url"
              content={`https://www.cloudbravura.com/`}
            />
          </Head>
          {loading && <Loader />}
          <Component {...pageProps} />
        </ScrollToTop>
      </Layout>
    </main>
  );
}
