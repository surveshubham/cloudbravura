import { gql } from "@apollo/client";
import React from "react";
import client from "../apolloClient";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import notfonud from "../public/notfound.png";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Index() {
  const [jobList, setJobList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalpage, settotalpage] = useState(0);
  const [skip, setskip] = useState(0);
  const [pageinfo, setpageinfo] = useState<any>([]);
  const [pagecounter, setpagecounter] = useState(1);

  let offset = 8;

  useEffect(() => {
    async function getJobs() {
      const { data: jobListings, error } = await client.query({
        query: gql`
          query MyQuery {
            jobListingsConnection(
              orderBy: createdAt_DESC,
              first: ${offset},
               skip: ${skip}
              stage: DRAFT
              where: {
                isActive: true
                documentInStages_every: { stage: DRAFT }
              }
            ) {
              aggregate {
                count
              }
              edges {
                node {
                  slug
                  jobTitle
                  projectLocations
                }
              }
              pageInfo {
                hasNextPage
                pageSize
                hasPreviousPage
              }
            }
          }
        `,
      });

      if (!error) {
        settotalpage(jobListings?.jobListingsConnection?.aggregate?.count);
        setpageinfo(jobListings?.jobListingsConnection?.pageInfo);
        setJobList(jobListings?.jobListingsConnection?.edges);
        setLoading(false);
      } else {
        toast.error("Something went wrong");
      }
    }

    getJobs();
  }, [offset, skip]);

  async function setskipnext() {
    if (pageinfo.hasNextPage) {
      setskip(skip + offset);
      setpagecounter(pagecounter + 1);
    } else {
      setskip(0);
    }
  }

  async function setskipprev() {
    if (pageinfo.hasPreviousPage) {
      setskip(skip - offset);
      setpagecounter(pagecounter - 1);
    } else {
      setskip(0);
    }
  }

  return (
    <div className=" relative ">
    

      <Head>
        <title>{'Cloud Bravura - Closed Jobs.'}</title>
        <link
          rel="canonical"
          href={`https://www.cloudbravura.com/closed-jobs`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Cloud Bravura - Closed Jobs."} />
        <meta property="og:description" content={"Here are our closed positions. To Excel your career today,apply form our available positions."} />
        {/* <meta property="og:image" content={"../public/ContentManagement.webp"} /> */}
        <meta
          property="og:url"
          content={`https://www.cloudbravura.com/closed-jobs`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Cloud Bravura - Closed Jobs."} />
        <meta property="twitter:description" content={'Here are our closed positions. To Excel your career today,apply form our available positions.'} />
        {/* <meta property="twitter:image" content={"../public/ContentManagement.webp"} /> */}
        <meta
          property="twitter:url"
          content={`https://www.cloudbravura.com/closed-jobs`}
        />
      </Head>
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 -z-10"
      >
        <div className="blur-[106px] min-h-screen bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] min-h-screen bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="min-h-screen pt-[5rem]">
        {loading ? (
          <MagnifyingGlass
            visible={true}
            height="150"
            width="150"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper mx-auto mt-48 "
            glassColor="#0050D1CC"
            color="#"
          />
        ) : (
          <>
            {jobList.length > 0 ? (
              <div className="">
                <div className="max-w-7xl mx-auto  w-11/12  ">
                  <div className="lg:text-left  text-center mt-16 ">
                    <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 lg:text-2xl text-accent">
                      Closed Positions
                    </h2>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="grid md:grid-cols-3 grid-cols-1 gap-6 py-8"
                  >
                    {/* Active Jobs */}
                    {jobList.map((job: any) => (
                      <div
                        key={job.node.jobTitle}
                        className="w-full flex-col cshadow rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 min-h-full bg-white shadow-neutral-700 shadow-sm "
                      >
                        <div className="bg-white/80 backdrop-blur-none  flex flex-col justify-between cursor-not-allowed">
                          <div className="bg-card   ">
                            <div className="block  border-solid ">
                              <p className="text-lg md:text-lg font-semibold text-accent py-4 bg-secondary text-white lg:pl-4 px-3 ">
                                {job.node.jobTitle}
                              </p>
                              <p className="mt-3 p-4 min-h-[100px] ">
                                <span className="font-bold text-[15px]">
                                  Location:
                                </span>{" "}
                                <span className="text-[14px]">
                                  {job.node.projectLocations}
                                </span>
                              </p>
                            </div>
                            <button className="px-3 py-4 cursor-not-allowed">
                              <span className=" group-hover:text-accent transition-colors duration-300 text-sky-500 p-2 lg:pl-4 text-[14px] mt-5">
                                View Details
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-col-2 place-items-center py-4">
                    <div className="flex space-x-1">
                      <button
                        className={`${
                          !pageinfo.hasPreviousPage && "hidden"
                        } show`}
                        onClick={() => {
                          setskipprev();
                        }}
                      >
                        <ChevronDoubleLeftIcon className="h-4 w-5 " />
                      </button>

                      <button
                        className={`${
                          pageinfo.hasPreviousPage && "hidden"
                        } show disabled:opacity-20`}
                        disabled
                      >
                        <ChevronDoubleLeftIcon className="h-4 w-5 " />
                      </button>
                      <span className="block font-bold">
                        {pagecounter}/{Math.ceil(totalpage / offset)}
                      </span>

                      <button
                        className={`${!pageinfo.hasNextPage && "hidden"} show `}
                        onClick={() => {
                          setskipnext();
                        }}
                      >
                        <ChevronDoubleRightIcon className="h-4 w-5  " />
                      </button>

                      <button
                        className={`${
                          pageinfo.hasNextPage && "hidden"
                        } show disabled:opacity-20`}
                        disabled
                      >
                        <ChevronDoubleRightIcon className="h-4 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-7xl mx-auto text-center text-xl mt-3 grid place-items-center ">
                <div className="py-20 ">
                  <div className="flex justify-center">
                    <Image
                      src={notfonud}
                      alt="There is nodata"
                      width={400}
                      height={400}
                    />
                  </div>

                  <div className="font-bold text-lg lg:text-2xl text:lg text-black">
                    <p className="p-2">
                      Currently there are no closed jobs available.
                    </p>
                    <p>Please come back later.</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
