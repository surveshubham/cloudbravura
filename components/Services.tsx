import React, { useEffect, useState } from "react";
import Image from "next/image";
import BGWave from "./reusable/BGWave";
import Link from "next/link";
import gcloud from "../public/Logos2.png";
import oracle from "../public/Logos4.png";
import microsoft from "../public/Logos3.png";
import Aws from "../public/aws.png";
import Title from "./reusable/Title";

export const services = [
  {
    src: gcloud,
    route: "/google-cloud-platform",
    alt: "Google Cloud Logo",
    title: "Google Cloud Platform",
    content:
      "Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, Google Drive, and YouTube.",
  },
  {
    src: oracle,
    route: "/oracle-cloud",
    alt: "Oracle Logo",
    title: "Oracle Cloud",
    content:
      "Oracle Cloud is a cloud computing service offered by Oracle Corporation providing servers, storage, network, applications and services through a global network of Oracle Corporation managed data centers. The company allows these services to be provisioned on demand over the Internet.",
  },
  {
    src: microsoft,
    route: "/microsoft-azure",
    alt: "Microsoft Logo",
    title: "Microsoft Azure",
    content:
      "Microsoft Azure, is a cloud computing platform operated by Microsoft for application management via Microsoft-managed data centers. The Azure cloud platform is more than 200 products and cloud services designed to build, run and manage applications across multiple clouds, on-premises and at the edge, with the tools and frameworks of your choice.",
  },
  {
    src: Aws,
    route: "/amazon-web-services",
    alt: "AWS Logo",
    title: "Amazon Web Services",
    content:
      "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.These cloud computing web services provide distributed computing processing capacity and software tools via AWS server farms.",
  },
];
const Services = () => {
  const [active, setActive] = useState<any>(0);

  return (
    <div className="py-8 max-w-7xl mx-auto relative" id="services">
      <Title title="Services & Solutions" />

      <h2 className=" text-center mx-auto">
        We take pride in providing high-quality solutions to both job seekers
        and companies in the cloud computing industry by leveraging the latest
        cloud technologies and delivering successful projects for clients.
        <span className="block py-3">
          Our resources are not limited to, but well-versed in the following
          cloud platforms:
          {services.map((serv, idx) => (
            <section key={serv.title} className="rounded-md drop-shadow-md">
              <div className="rounded-md mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1  lg:grid-cols-2 lg:bg-gray-200 gap-6 rounded-md`}
                >
                  <div
                    className={`rounded-md relative z-10 ${
                      idx % 2 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="rounded-md relative lg:h-full grid place-items-center">
                      <Image
                        height={150}
                        width={280}
                        src={serv.src}
                        alt={serv.alt}
                      />
                    </div>
                  </div>
                  <div className="rounded-md relative flex items-center bg-secondary text-white backdrop-blur-xl ">
                    <svg
                      className={`absolute rounded-none inset-y-0 hidden h-full w-48  transform text-gray-200 lg:block 
                      ${
                        !(idx % 2)
                          ? "left-0 -translate-x-1/2"
                          : "right-0 translate-x-1/2"
                      }
                      `}
                      fill="currentColor"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <polygon points="50,0 100,0 50,100 0,0" />
                    </svg>
                    {/* <span
                      className={`hidden lg:absolute lg:inset-y-0 ${
                        !(idx % 2) ? "lg:-left-16" : "lg:-right-16"
                      } lg:block lg:w-16 lg:bg-secondary/5`}
                    /> */}
                    <div
                      className={`p-8 sm:p-16 lg:p-24 text-center ${
                        idx % 2 ? "lg:text-left" : "lg:text-right"
                      }`}
                    >
                      <h2 className="text-2xl font-bold sm:text-3xl">
                        {serv.title}
                      </h2>
                      <p className="mt-4 ">{serv.content}</p>
                      <Link
                        href={serv.route}
                        className="mt-8 inline-block duration-300 transition-colors rounded border border-indigo-600 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </span>
      </h2>
    </div>
  );
};

export default Services;
