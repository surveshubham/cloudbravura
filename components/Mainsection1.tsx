import React, { useEffect } from "react";
import Image from "next/image";
import gcloud from "../public/Logos2.png";
import oracle from "../public/Logos4.png";
import microsoft from "../public/Logos3.png";
import Aws from "../public/Logos1.png";
import enterView from "enter-view";

const Mainsection1 = () => {
  useEffect(() => {
    enterView({
      selector: "img",
      enter: function (el: any) {
        el.classList.add("entered");
      },
    });
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto text-center mt-6">
        <h3 className="text-black font-bold text-2xl md:text-4xl  pt-6">
          Services and Solutions
        </h3>
        <div className="grid lg:grid-cols-2  text-black ">
          <div className="lg:ml-20 relative lg:mt-[6rem] p-5">
            <div
              aria-hidden="true"
              className=" absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-10 dark:opacity-20 "
            >
              <div className="blur-[106px] min-h-screen bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700 overflow-clip"></div>
              <div className="blur-[106px] min-h-screen bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600 overflow-clip"></div>
            </div>

            <Image
              src={Aws}
              alt={"Aws logo"}
              height={40}
              width={400}
              className=" lg:shadow-lg lg:top-[25%] lg:left-[20%] md:top-[20%] md:left-[25%] rounded-lg sticky top-[15%] left-[17%]   lg:py-20 lg:px-32 px-20 lg:bg-white/20  "
            ></Image>
          </div>
          <div className=" p-5  lg:pt-[10rem] text-center lg:min-h-screen ">
            <h1 className="font-bold text-2xl">Amazon AWS</h1>
            <p className="py-3 text-sm md:text-lg">
              {" "}
              Amazon Web Services, Inc. is a subsidiary of Amazon that provides
              on-demand cloud computing platforms and APIs to individuals,
              companies, and governments, on a metered pay-as-you-go basis.
              These cloud computing web services provide distributed computing
              processing capacity and software tools via AWS server farms.
            </p>
          </div>
        </div>

        <div className="grid  lg:grid-cols-2  text-black ">
          <div className="lg:ml-20 relative lg:mt-[6rem] p-6 md:pt-10 ">
            <div
              aria-hidden="true"
              className=" absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-10 dark:opacity-20 "
            >
              <div className="blur-[106px] min-h-screen bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700 overflow-clip"></div>
              <div className="blur-[106px] min-h-screen bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600 overflow-clip"></div>
            </div>
            <Image
              src={microsoft}
              alt={"Microsoft logo"}
              height={40}
              width={400}
              className="lg:shadow-lg lg:top-[25%] lg:left-[20%] md:top-[20%] md:left-[25%] rounded-lg sticky top-[15%] left-[17%]   lg:py-32 p-5  lg:bg-white/20"
            ></Image>
          </div>
          <div className=" p-5  lg:pt-[16rem]  text-center lg:min-h-screen">
            <h1 className="font-bold text-2xl">Microsoft Azure</h1>
            <p className="py-3 text-sm md:text-lg">
              {" "}
              Microsoft Azure, is a cloud computing platform operated by
              Microsoft for application management via Microsoft-managed data
              centers. The Azure cloud platform is more than 200 products and
              cloud services designed to build, run and manage applications
              across multiple clouds, on-premises and at the edge, with the
              tools and frameworks of your choice.
            </p>
          </div>
        </div>

        <div className="grid  lg:grid-cols-2  text-black ">
          <div className="lg:ml-20 relative lg:mt-[5rem] p-6 md:pt-10">
            <div
              aria-hidden="true"
              className=" absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-10 dark:opacity-20 "
            >
              <div className="blur-[106px] min-h-screen bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700 overflow-clip"></div>
              <div className="blur-[106px] min-h-screen bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600 overflow-clip"></div>
            </div>
            <Image
              src={oracle}
              alt={"Oracle Logo"}
              height={40}
              width={400}
              className=" lg:shadow-lg lg:top-[25%] lg:left-[20%] md:top-[20%] md:left-[25%] rounded-lg sticky top-[15%] left-[17%]   lg:py-32  p-5   lg:bg-white/20"
            ></Image>
          </div>
          <div className=" p-5  lg:pt-[16rem]  text-center lg:min-h-screen">
            <h1 className="font-bold text-2xl">Oracle Cloud</h1>
            <p className="py-3 text-sm md:text-lg">
              {" "}
              Oracle Cloud is a cloud computing service offered by Oracle
              Corporation providing servers, storage, network, applications and
              services through a global network of Oracle Corporation managed
              data centers. The company allows these services to be provisioned
              on demand over the Internet.
            </p>
          </div>
        </div>

        <div className="grid  lg:grid-cols-2  text-black ">
          <div className="lg:ml-20 relative lg:mt-[5rem] p-6 md:pt-10">
            <div
              aria-hidden="true"
              className=" absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-10 dark:opacity-20 "
            >
              <div className="blur-[106px] min-h-screen bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700 overflow-clip"></div>
              <div className="blur-[106px] min-h-screen bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600 overflow-clip"></div>
            </div>

            <Image
              src={gcloud}
              alt={"Google Cloud logo"}
              height={40}
              width={400}
              className=" lg:shadow-lg lg:top-[25%] lg:left-[20%] md:top-[20%] md:left-[25%] rounded-lg sticky top-[15%] left-[17%]   lg:py-24 p-5   lg:bg-white/20"
            ></Image>
          </div>
          <div className=" p-5  lg:pt-[16rem]  text-center lg:min-h-screen">
            <h1 className="font-bold text-2xl">Google Cloud Platform</h1>
            <p className="py-3 text-sm md:text-lg">
              {" "}
              Google Cloud Platform, offered by Google, is a suite of cloud
              computing services that runs on the same infrastructure that
              Google uses internally for its end-user products, such as Google
              Search, Gmail, Google Drive, and YouTube.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainsection1;
