import Link from "next/link";
import Image from "next/image";
import Banner from "../components/reusable/Banner";
import oracle from "../public/oracle.jpg";
import Head from "next/head";

function Oracle() {
  return (
    <div>
     <Head>
        <title>{'Cloud Bravura - Oracle Cloud'}</title>
        <link
          rel="canonical"
          href={`https://www.cloudbravura.com/oracle-cloud`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Cloud Bravura - Oracle Cloud"} />
        <meta property="og:description" content={"With CloudBravura's help, you can take advantage of all that Oracle Cloud has to offer and stay ahead of the competition in today's rapidly evolving business landscape."} />
        <meta property="og:image" content={"../public/oracle.jpg"} />
        <meta
          property="og:url"
          content={`https://www.cloudbravura.com/oracle-cloud`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Cloud Bravura - Oracle Cloud"} />
        <meta property="twitter:description" content={'With CloudBravura`s help, you can take advantage of all that Oracle Cloud has to offer and stay ahead of the competition in todays rapidly evolving business landscape.'} />
        <meta property="twitter:image" content={"../public/oracle.jpg"} />
        <meta
          property="twitter:url"
          content={`https://www.cloudbravura.com/oracle-cloud`}
        />
      </Head>
      <Banner title="Oracle Cloud" />
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 md:gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Oracle Cloud
                </h1>
                {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                  {
                    "As technology evolves, the need for more efficient and secure data management systems has become essential for businesses worldwide. One of the most revolutionary technologies of the modern era has been cloud computing. The cloud provides a scalable and cost-effective way of storing and processing data that has completely transformed the way businesses operate."
                  }
                </p> */}
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-14 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              src={oracle}
              alt="AWS"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
            {/* <img
                className=""
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt=""
              /> */}
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  {
                    "Oracle Cloud is a powerful and versatile cloud computing platform that offers a wide range of services to help businesses run their operations more efficiently and effectively. With its advanced security features, scalability, and flexibility, Oracle Cloud is an ideal choice for companies of all sizes that are looking to harness the power of the cloud to drive growth and innovation."
                  }
                </p>
                <p className="mt-4">
                  {
                    "At CloudBravura, we specialize in providing expert resources for implementing Oracle Cloud solutions. Our team of experienced professionals can help you design, deploy, and manage your Oracle Cloud environment to meet your specific business needs. Whether you're looking to migrate your existing infrastructure to the cloud, or you need help building a new cloud-based solution from scratch, we have the skills and expertise to help you succeed."
                  }
                </p>
                <h4 className="font-bold mt-4">{"Our services include:"}</h4>
                <ul
                  role="list"
                  className="mt-8 space-y-8 text-gray-600 list-disc"
                >
                  <li className="flex gap-x-3">
                    <span>
                      <span className="font-semibold text-gray-900">
                        {"• Architecture and design: "}
                      </span>
                      <span>
                        {
                          " We'll work with you to design a scalable, secure, and reliable Oracle Cloud environment that meets your unique business requirements."
                        }
                      </span>
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <span>
                      <span className="font-semibold text-gray-900">
                        {"• Implementation and deployment: "}
                      </span>
                      <span>
                        {
                          "Our team will handle all aspects of the implementation and deployment process, from setting up your cloud infrastructure to configuring your applications and data."
                        }
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <span className="font-semibold text-gray-900">
                        {"• Cloud management and support: "}
                      </span>
                      <span>
                        {
                          "We'll provide ongoing management and support for your Oracle Cloud environment to ensure that it continues to operate smoothly and efficiently over time."
                        }
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <span className="font-semibold text-gray-900">
                        {"• Training and education: "}
                      </span>
                      <span>
                        {
                          "We'll provide your team with the training and education they need to fully leverage the power of Oracle Cloud and get the most out of your investment."
                        }
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto text-white text-center py-10">
          <p className="mt-6 md:text-xl leading-8 w-11/12 mx-auto">
            {
              "With CloudBravura's help, you can take advantage of all that Oracle Cloud has to offer and stay ahead of the competition in today's rapidly evolving business landscape."
            }
          </p>
          <Link
            href={"/#contact"}
            className="mt-8 inline-block duration-300 transition-colors rounded border border-indigo-600 bg-white text-black hover:text-white px-5 py-2 text-sm font-medium hover:bg-black  focus:outline-none focus:ring active:text-indigo-500"
          >
            {"Let's Connect"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Oracle;
