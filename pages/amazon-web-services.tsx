import Link from "next/link";
import Image from "next/image";
import Banner from "../components/reusable/Banner";
import aws from "../public/aws.jpg";
import Head from "next/head";

function Aws() {
  return (
    <div>
      <Head>
        <title>{'Cloud Bravura - Amazon Web Services.'}</title>
        <link
          rel="canonical"
          href={`https://www.cloudbravura.com/amazon-web-services`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Cloud Bravura - Amazon Web Services."} />
        <meta property="og:description" content={"At CloudBravura, we are committed to helping businesses of all sizes implement AWS solutions that meet their specific needs. Contact us today to learn more about how we can help you leverage the power of AWS for your business."} />
        <meta property="og:image" content={"../public/aws.jpg"} />
        <meta
          property="og:url"
          content={`https://www.cloudbravura.com/amazon-web-services`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Cloud Bravura - Amazon Web Services."} />
        <meta property="twitter:description" content={"At CloudBravura, we are committed to helping businesses of all sizes implement AWS solutions that meet their specific needs. Contact us today to learn more about how we can help you leverage the power of AWS for your business."} />
        <meta property="twitter:image" content={"../public/aws.jpg"} />
        <meta
          property="twitter:url"
          content={`https://www.cloudbravura.com/amazon-web-services`}
        />
      </Head>

       <Head>
        <title>{'Cloud Bravura -  Partnering fast paced businesses to scale through Integrated Cloud Solutions'}</title>
        <link
          rel="canonical"
          href={`https://www.cloudbravura.com/`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Cloud Bravura -  Partnering fast paced businesses to scale through Integrated Cloud Solutions"} />
        <meta property="og:description" content={"At CloudBravura, we are committed to helping businesses of all sizes implement AWS solutions that meet their specific needs. Contact us today to learn more about how we can help you leverage the power of AWS for your business."} />
        <meta property="og:image" content={"../public/logo.png"} />
        <meta
          property="og:url"
          content={`https://www.cloudbravura.com/`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Cloud Bravura -  Partnering fast paced businesses to scale through Integrated Cloud Solutions"} />
        <meta property="twitter:description" content={"At CloudBravura, we are committed to helping businesses of all sizes implement AWS solutions that meet their specific needs. Contact us today to learn more about how we can help you leverage the power of AWS for your business."} />
        <meta property="twitter:image" content={"../public/logo.png"} />
        <meta
          property="twitter:url"
          content={`https://www.cloudbravura.com/`}
        />
      </Head>
      <Banner title="Amazon Web Services" />
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
                  Amazon Web Services
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
              src={aws}
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
                    "Amazon Web Services (AWS) is one of the leading cloud computing platforms available today. AWS provides a broad range of cloud-based services, including computing power, database storage, and content delivery, to businesses of all sizes. With AWS, businesses can easily scale their IT resources up or down based on their needs, without having to invest in dedicated servers or infrastructure."
                  }
                </p>
                <p className="mt-4">
                  {
                    "At CloudBravura, we specialize in providing AWS solutions to businesses that want to take advantage of the benefits of cloud computing. Our team of cloud experts can help you evaluate your business requirements and design an AWS architecture that meets your specific needs. We can also help you migrate your existing infrastructure to AWS, ensuring a seamless transition with minimal disruption to your business operations."
                  }
                </p>
                <h4 className="font-bold mt-4">
                  With our customized AWS solutions, you can:
                </h4>
                <ul
                  role="list"
                  className="mt-8 space-y-8 text-gray-600 list-disc"
                >
                  <li className="flex gap-x-3">
                    <span>
                      <span className="font-semibold text-gray-900">
                        {"• Scale on-demand:"}
                      </span>
                      <span>
                        {
                          " With AWS, you can scale up or down based on your business needs, without having to worry about hardware or infrastructure limitations."
                        }
                      </span>
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <span>
                      <span className="font-semibold text-gray-900">
                        {"• Improve performance: "}
                      </span>
                      <span>
                        {
                          "AWS provides high-performance computing resources that can handle even the most demanding workloads."
                        }
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <span className="font-semibold text-gray-900">
                        {"• Increase security: "}
                      </span>
                      <span>
                        {
                          "AWS provides a wide range of security tools and services, including firewalls, encryption, and multi-factor authentication, to ensure your data is always secure."
                        }
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <span className="font-semibold text-gray-900">
                        {"• Reduce costs: "}
                      </span>
                      <span>
                        {
                          "With the right set-up and clean code, AWS can help you cut costs down since you only pay for the resources you use. It is however important that the code doesn't have any unnecessary computation to ensure that your costs are minimal - and with Cloud Bravura, you can be assured of the same."
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
              "At CloudBravura, we are committed to helping businesses of all sizes implement AWS solutions that meet their specific needs. Contact us today to learn more about how we can help you leverage the power of AWS for your business."
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

export default Aws;
