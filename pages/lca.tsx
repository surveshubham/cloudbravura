import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import client from "../apolloClient";
import Accordion from "../components/reusable/Accordion";
import moment from "moment";
import Image from "next/image";
import notfonud from "../public/notfound.png";
import Head from "next/head";

const Lca = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedMonths, setLoadedMonths] = useState(1);
  const [showButton, setShowButton] = useState(true);
  const [totalCount, setTotalCount] = useState();
  const [totalGrouped, setTotalGrouped] = useState();


  const rfcFormat = (d: string) => {
    return d.slice(0, d.lastIndexOf(".")) + "+00:00";
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await client.query({
        query: gql`
          query JobListingCount {
            jobListingsConnection(where: { showLCADetails: true }) {
              aggregate {
                count
              }
            }
          }
        `,
      });
      setTotalCount(data?.jobListingsConnection?.aggregate?.count);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = moment();

      const endDate = rfcFormat(currentDate.endOf("month").toISOString());
      const startDate = rfcFormat(
        currentDate.subtract(3, "months").startOf("month").toISOString()
      );

      const { data: lcaListings } = await client.query({
        query: gql`
          query JobListings {
            jobListings(
              orderBy: updatedAt_DESC
              where: { showLCADetails: true ,
                updatedAt_gt:"${startDate}",
                updatedAt_lt:"${endDate}"}
                first:100
            ) {
              jobTitle
              slug
              lcaDetails {
                raw
              }
              createdAt
              updatedAt
            }
          }
        `,
      });

      setTotalGrouped(lcaListings.jobListings.length);
      // Group the data by month using Moment.js
      const groupedData = lcaListings.jobListings.reduce(
        (acc: any, item: any) => {
          const month = moment(item.updatedAt).format("MMMM YYYY");

          if (!acc[month]) {
            acc[month] = [];
          }

          acc[month].push(item);
          return acc;
        },
        {}
      );
      setData(groupedData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleLoadMore = async () => {
    const currentDate = moment();
    const endDate = rfcFormat(
      currentDate.subtract(loadedMonths, "months").endOf("month").toISOString()
    );
    const startDate = rfcFormat(
      currentDate
        .subtract(loadedMonths + 3, "months")
        .startOf("month")
        .toISOString()
    );

    const { data: lcaListings } = await client.query({
      query: gql`
        query JobListings {
          jobListings(
            orderBy: updatedAt_DESC
            where: { 
              showLCADetails: true ,
              updatedAt_gt:"${startDate}",
              updatedAt_lt:"${endDate}"}
          ) {

            jobTitle
            slug
            lcaDetails {
              raw
            }
            createdAt
            updatedAt
          }
        }
      `,
    });
    if (lcaListings.length > 0) {
      const newGroupedData = lcaListings.jobListings.reduce(
        (acc: any, item: any) => {
          const month = moment(item.updatedAt).format("MMMM YYYY");

          if (!acc[month]) {
            acc[month] = [];
          }

          acc[month].push(item);
          return acc;
        },
        {}
      );
      setTotalGrouped((prev) => prev + lcaListings.jobListings.length);
      setData((prevData) => ({
        ...prevData,
        ...newGroupedData,
      }));
      setLoadedMonths((prevLoadedMonths) => prevLoadedMonths + 3);
      setLoading(false);
    } else {
      const { data: lcaData } = await client.query({
        query: gql`
        query JobListings {
          jobListings(
            orderBy: updatedAt_DESC
            where: { 
              showLCADetails: true ,
              updatedAt_lt:"${startDate}"}
          ) {
            jobTitle
            slug
            lcaDetails {
              raw
            }
            createdAt
            updatedAt
          }
        }
      `,
      });

      const newGroupedData = lcaData.jobListings.reduce(
        (acc: any, item: any) => {
          const month = moment(item.updatedAt).format("MMMM YYYY");

          if (!acc[month]) {
            acc[month] = [];
          }

          acc[month].push(item);
          return acc;
        },
        {}
      );
      setTotalGrouped((prev) => prev + lcaData.jobListings.length);
      setData((prev) => ({ ...prev, ...newGroupedData }));
      setShowButton(false);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-11/12">
      <Head>
        <title>{'Cloud Bravura - Labor Condition Applications.'}</title>
        <link
          rel="canonical"
          href={`https://www.cloudbravura.com/lca`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Cloud Bravura - Labor Condition Applications."} />
        <meta property="og:description" content={"Labor Condition Applications (LCAs) are displayed below in accordance with U.S. Department of Labor regulations."} />
        <meta property="og:image" content={"../public/logo.png"} />
        <meta
          property="og:url"
          content={`https://www.cloudbravura.com/lca`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Cloud Bravura - Labor Condition Applications."} />
        <meta property="twitter:description" content={'Labor Condition Applications (LCAs) are displayed below in accordance with U.S. Department of Labor regulations.'} />
        <meta property="twitter:image" content={"../public/logo.png"} />
        <meta
          property="twitter:url"
          content={`https://www.cloudbravura.com/lca`}
        />
      </Head>
      <div className="min-h-screen mt-32 max-w-7xl mx-auto text-black">
        <div className="pb-8 border-b bg-secondary p-4 rounded-lg  border-2 text-white py-10 mb-6">
          <h2 className="text-xl md:text-3xl font-bold pb-4 px-5 md:px-4">
            Labor Condition Applications
          </h2>
          <h2 className="text-sm md:text-lg px-5 md:px-4">
            Labor Condition Applications (LCAs) are displayed below in
            accordance with U.S. Department of Labor regulations.
          </h2>
        </div>

        {loading ? (
          <div className="mx-auto max-w-5xl w-11/12 text-center ">
            {/* Loader */}
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper mx-auto mt-48 "
              glassColor="#0050D1CC"
              color="#"
            />
          </div>
        ) : (
          <>
            {Object.keys(data).length > 0 ? (
              <>
                {Object.keys(data).map((item: any) => (
                  <div key={item}>
                    <h2 className="text-center font-bold text-2xl pt-4">
                      {item}
                    </h2>
                    {/* @ts-ignore */}
                    {data[item].map((lca: any) => (
                      <div key={lca.slug} className="py-2">
                        <Accordion
                          title={lca.jobTitle}
                          content={lca?.lcaDetails?.raw?.children ?? []}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <div className="max-w-7xl mx-auto px-10 text-center text-2xl">
                <span></span>
              </div>
            )}
          </>
        )}
        {!totalCount == totalGrouped ? (
          ""
        ) : (
          <div className="w-fit mx-auto pt-4">
            <button
              className="px-4 py-1 bg-primary text-white rounded-xl"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          </div>
        )}
        {totalCount == totalGrouped && Object.keys(data).length > 0 ? (
          <h2 className="text-center pt-5 font-bold text-lg text-gray-600">
            You have reached the end!
          </h2>
        ) : (
          <>
            <div className="flex justify-center items-center">
              <Image
                src={notfonud}
                alt="There is nodata"
                width={400}
                height={400}
              />
            </div>
            <p className="text-center text-2xl">
              There are no Lca available as of now!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Lca;
