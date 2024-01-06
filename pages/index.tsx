import type { NextPage } from "next";
import Mainsection2 from "../components/Mainsection2";
import Services from "../components/Services";
import Title from "../components/reusable/Title";
import BG from "../components/reusable/BG";
import BGWave from "../components/reusable/BGWave";
import Head from "next/dist/shared/lib/head";
const Home: NextPage = () => {
  return (
    <>
     <Head>
        <title>{'Cloud Bravura -  Partnering fast paced businesses to scale through Integrated Cloud Solutions'}</title>
        <link
          rel="canonical"
          href={`https://www.cloudbravura.com/`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Cloud Bravura -  Partnering fast paced businesses to scale through Integrated Cloud Solutions"} />
        <meta property="og:description" content={"At CloudBravura, we believe in the power of great technical skill and brilliance. Bravura, meaning just that, inspires us to constantly push the limits of what&#x27;s possible in the cloud services industry. Our mission is to provide companies with the expertise and resources they need to implement cloud solutions like AWS, Google Cloud Platform, Azure, and Oracle. We also strive to attract and hire the best cloud talent out there, perpetually building a team of experts who can deliver"} />
        <meta property="og:image" content={"../public/logo.png"} />
        <meta
          property="og:url"
          content={`https://www.cloudbravura.com/`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Cloud Bravura -  Partnering fast paced businesses to scale through Integrated Cloud Solutions"} />
        <meta property="twitter:description" content={"At CloudBravura, we believe in the power of great technical skill and brilliance. Bravura, meaning just that, inspires us to constantly push the limits of what&#x27;s possible in the cloud services industry. Our mission is to provide companies with the expertise and resources they need to implement cloud solutions like AWS, Google Cloud Platform, Azure, and Oracle. We also strive to attract and hire the best cloud talent out there, perpetually building a team of experts who can deliver"} />
        <meta property="twitter:image" content={"../public/logo.png"} />
        <meta
          property="twitter:url"
          content={`https://www.cloudbravura.com/`}
        />
      </Head>
      {/* HERO */}
      <div className="w-[100%]  h-screen ">
        <div className="absolute w-[100%] h-screen top-0 left-0 bg-[#1f1f1fcc]">
          {" "}
        </div>
        <video
          className=" w-[100%] h-screen sm:h-[100%] object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute  w-[100%] h-screen top-0 flex flex-col justify-center items-center">
          <h1 className="md:text-5xl text-2xl font-bold tracking-tight sm:text-center lg:text-4xl  text-white  break-normal px-6">
            Partnering fast paced businesses to scale{" "}
            <span className="block lg:pt-2">
              through Integrated Cloud Solutions
            </span>
          </h1>
        </div>
      </div>
      {/* INTRO */}
      <div className="bg-gray-100 relative">
        <BG className="absolute top-0 left-0 w-full object-contain rotate-180 grayscale-[0.5] opacity-40" />
        <div className=" mx-auto container w-full flex justify-center items-center flex-col  text-center">
          <div className="max-w-7xl flex flex-col w-full mx-auto container items-center justify-center py-10">
            <Title title="Leading the way in Cloud Excellence" />

            <h2 className="max-w-5xl">
              {
                "At CloudBravura, we believe in the power of great technical skill and brilliance. Bravura, meaning just that, inspires us to constantly push the limits of what's possible in the cloud services industry. Our mission is to provide companies with the expertise and resources they need to implement cloud solutions like AWS, Google Cloud Platform, Azure, and Oracle. We also strive to attract and hire the best cloud talent out there, perpetually building a team of experts who can deliver outstanding results."
              }
            </h2>
          </div>
        </div>
        {/*  */}
        <div className="relative ">
          <BGWave className="absolute top-0 left-0 w-full opacity-10  fill-white" />
          <BGWave className="absolute bottom-0 right-0 w-full opacity-10  fill-white" />
          <Services />
        </div>
        <Mainsection2 />
      </div>
    </>
  );
};

export default Home;
