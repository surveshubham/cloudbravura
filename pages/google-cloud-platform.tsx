import Link from "next/link";
import Image from "next/image";
import Banner from "../components/reusable/Banner";
import gcp from "../public/gcp.webp";
import Head from "next/head";

function GCP() {
  return (
    <div>
      <Head>
        <title>{'Cloud Bravura - Google Cloud Platform.'}</title>
        <link
          rel="canonical"
          href={`https://www.cloudbravura.com/google-cloud-platform`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Cloud Bravura - Google Cloud Platform."} />
        <meta property="og:description" content={"Whether you're looking to migrate your existing infrastructure to GCP, build new applications on the platform, or simply optimize your GCP environment, we can provide the expertise and support you need. With CloudBravura, you can be confident that you're getting the most out of Google Cloud Platform."} />
        <meta property="og:image" content={"../public/gcp.webp"} />
        <meta
          property="og:url"
          content={`https://www.cloudbravura.com/google-cloud-platform`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Cloud Bravura - Google Cloud Platform."} />
        <meta property="twitter:description" content={"Whether you're looking to migrate your existing infrastructure to GCP, build new applications on the platform, or simply optimize your GCP environment, we can provide the expertise and support you need. With CloudBravura, you can be confident that you're getting the most out of Google Cloud Platform."} />
        <meta property="twitter:image" content={"../public/gcp.webp"} />
        <meta
          property="twitter:url"
          content={`https://www.cloudbravura.com/google-cloud-platform`}
        />
      </Head>
      <Banner title="Google Cloud Platform" />
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
                  Google Cloud Platform
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
              src={gcp}
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
                    "Google Cloud Platform is a suite of cloud computing services offered by Google that helps organizations of all sizes to accelerate their business growth, innovate faster, and scale their operations. With its powerful tools and features, GCP enables businesses to store and manage data, build and deploy applications, and run virtual machines and containers, all in a highly secure and reliable environment."
                  }
                </p>
                <p className="mt-2">
                  {
                    "At its core, GCP offers a range of services, including computing, storage, networking, big data, machine learning, and more. This makes it a versatile platform that can be customized to meet the specific needs of any business."
                  }
                </p>
                <h4 className="font-bold mt-4 text-secondary tracking-wide uppercase text-sm">
                  Our Expertise
                </h4>
                <p className="mt-2">
                  {
                    "At CloudBravura, we understand that implementing GCP can be a daunting task, especially for those who lack the expertise or resources to do it effectively. That's where our team of skilled professionals come in. We can help you navigate the complexities of GCP and tailor a solution that fits your specific business needs, enabling you to take full advantage of the benefits of cloud computing. "
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto text-white text-center py-10">
          <p className="mt-6 md:text-xl leading-8 w-11/12 mx-auto">
            {
              "Whether you're looking to migrate your existing infrastructure to GCP, build new applications on the platform, or simply optimize your GCP environment, we can provide the expertise and support you need. With CloudBravura, you can be confident that you're getting the most out of Google Cloud Platform."
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

export default GCP;
