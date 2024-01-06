import { gql } from "@apollo/client";
import React from "react";
import client from "../../apolloClient";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { MagnifyingGlass } from "react-loader-spinner";
import Image from "next/image";
import Head from "next/head";
import notfound from "../../public/notfound.png";
import Tilt from "react-parallax-tilt";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/outline";
export default function Index({ jobListings }: any) {
  const [jobList, setJobList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalpage, settotalpage] = useState(0);
  const [skip, setskip] = useState(0);
  const [pageinfo, setpageinfo] = useState<any>([]);
  const [pagecounter, setpagecounter] = useState(1);

  let offset = 6;

  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (query && query.submit === "true") {
      MySwal.fire({
        icon: "success",
        titleText: "Success",
        text: "Thank you for submitting your application. Our team will review the same and get back to you as soon as possible.",
        timer: 3500,
        showConfirmButton: false,
      });
    }
  }, [query]);
  useEffect(() => {
    async function getJobs() {
      const { data: jobListings, error } = await client.query({
        query: gql`
          query MyQuery {
            jobListingsConnection(
              stage: PUBLISHED,
              first: ${offset},
              skip: ${skip},
              where: { isActive: true }
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
        ;
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

  // useEffect(() => {
  //   async function getJobs() {
  //     const { data: jobListings, error } = await client.query({
  //       query: gql`
  //         query JobListings {
  //           jobListings(where: { isActive: true }) {
  //             slug
  //             jobTitle
  //             projectLocations
  //             aboutTheCompany
  //           }
  //         }
  //       `,
  //     });

  //     if (!error) {
  //       setJobList(jobListings.jobListings);
  //       setLoading(false);
  //     } else {
  //       alert(error);
  //     }
  //   }

  //   getJobs();
  // }, []);

  return (
    // <div className="bg-secondary/20">
    <div className="relative">
      <Head>
        <title>Cloud Bravura - Careers.</title>
      </Head>
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] min-h-screen bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] min-h-screen bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <div className=" min-h-screen ">
        <div className="relative max-w-7xl mx-auto  pt-[5rem]">
          <div className="lg:text-left lg:ml-8 text-center mt-20 ">
            <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 lg:text-2xl text-accent">
              Open Positions
            </h2>
          </div>

          {loading ? (
            <div className="mx-auto max-w-5xl w-11/12 text-center">
              {/* Loader */}
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
            </div>
          ) : (
            <>
              {jobList.length > 0 ? (
                <div>
                  <div className="mt-7 w-[95%] grid gap-7 md:grid-cols-3  place-items-center max-w-7xl mx-auto !text-black ">
                    {/* Active Jobs */}
                    {jobList.map((job: any) => (
                      <>
                        <div
                          key={job.node.jobTitle}
                          className="w-full flex-col cshadow rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 min-h-full bg-white shadow-neutral-700 shadow-sm "
                        >
                          <div className="bg-white/80 backdrop-blur-none  flex flex-col justify-between ">
                            <div className="bg-card   ">
                              <Link href={"/careers/" + job.node.slug}>
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
                                <button className=" px-3 py-4">
                                  <span className=" group-hover:text-accent transition-colors duration-300 text-sky-500 p-2 lg:pl-4 text-[14px] mt-5">
                                    View Details
                                  </span>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="grid grid-col-2 place-items-center py-8">
                    <div className="flex space-x-1">
                      <button
                        className={`${
                          !pageinfo.hasPreviousPage && "hidden"
                        } show`}
                        onClick={() => {
                          setskipprev();
                        }}
                      >
                        <ChevronDoubleLeftIcon className="h-4 w-5 text-black " />
                      </button>

                      <button
                        className={`${
                          pageinfo.hasPreviousPage && "hidden"
                        } show disabled:opacity-20`}
                        disabled
                      >
                        <ChevronDoubleLeftIcon className="h-4 w-5 text-black " />
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
                        <ChevronDoubleRightIcon className="h-4 w-5  text-black " />
                      </button>

                      <button
                        className={`${
                          pageinfo.hasNextPage && "hidden"
                        } show disabled:opacity-20`}
                        disabled
                      >
                        <ChevronDoubleRightIcon className="h-4 w-5  text-black " />
                      </button>
                    </div>
                  </div>

                  <div className="pb-10 px-5">
                    <h2 className="pb-4">
                      For listings that are no longer active{" "}
                      <Link href={"/closed-jobs"}>
                        <span className="text-blue-600 cursor-pointer font-bold">
                          click here.
                        </span>
                      </Link>
                    </h2>
                    <h2 className="text-sm">
                      We are an equal opportunity employers and will consider
                      all applications without regard to race, genetic
                      information, sex, age, color, religion, national origin,
                      veteran status, disability or any other characteristic
                      protected by law. For information on H-1B nonimmigrants
                      working at various US locations see{" "}
                      <Link href={"/lca"} className="text-blue-600">
                        Labor Condition Applications
                      </Link>
                      (“LCAs”) page.
                    </h2>
                  </div>
                </div>
              ) : (
                <div className="max-w-7xl mx-auto w-11/12 text-center text-xl mt-3 grid place-items-center ">
                  <div>
                    <Image
                      src={notfound}
                      alt={"Not found"}
                      height={40}
                      width={500}
                      className=""
                    ></Image>
                    <div className="font-bold lg:text-2xl text:lg   text-black">
                      <h4>Currently there are no jobs available.</h4>
                      <p>Please come back later.</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <form
        name="Job_Application"
        action="/careers?submit=true"
        encType="multipart/form-data"
        data-netlify="true"
        method="POST"
        className="mt-8 grid-cols-1 gap-y-6 hidden"
      >
        <input type="hidden" name="form-name" value="Job_Application" />
        <div>
          <input type="text" className="hidden" name="Position" value={""} />
          <label htmlFor="full-name" className="sr-only">
            Full name
          </label>
          <input
            type="text"
            name="Full-Name"
            id="full-name"
            autoComplete="name"
            className="block w-full  py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md  border-2"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="Email"
            type="email"
            autoComplete="email"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md  border-2"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="text"
            name="Phone"
            id="phone"
            autoComplete="tel"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md  border-2"
            placeholder="Phone"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            A brief regarding your background and work experience.
          </label>
          <textarea
            id="message"
            name="Message"
            rows={4}
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary rounded-md  border-2"
            placeholder="Message"
          />
        </div>
        <div className="text-left ">
          <label htmlFor="CV">
            <span className="bg-white px-2 py-2 text-center rounded-md">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                  />
                </svg>
                <span> Attach your CV</span>
              </div>
            </span>
          </label>
          <input id="CV" className="hidden" name="CV" type="file" />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
