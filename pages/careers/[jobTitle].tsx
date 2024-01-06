// @ts-ignore
import { RichText } from "@graphcms/rich-text-react-renderer";
import { gql } from "@apollo/client";
import React from "react";
import client from "../../apolloClient";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "../../components/reusable/Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import upload from "../../public/upload.png";
import Image from "next/image";
import Loader from "../../components/Loader";

function JobDetails(jobDetails: any) {
  const jobDet = jobDetails.data;
  const [Loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const fileTypes = [
    ".msword",
    ".pdf",
    ".rtf",
    ".vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

  interface formTypes {
    fullName: string;
    email: string;
    phone: string;
    message: string;
    file: File | null;
  }

  const [contactFormData, setContactFormData] = useState<formTypes>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  async function handleSubmit() {
    setLoading(true);
    if (typeof form !== null) {
      if (
        !contactFormData.email ||
        !contactFormData.fullName ||
        !contactFormData.message ||
        !contactFormData.phone ||
        !contactFormData.file
      ) {
        setLoading(false);
        toast.error("Please provide all the details!");
        return;
      }

      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          contactFormData.email.toString()
        )
      ) {
        setLoading(false);
        toast.error("Please provide a valid email id.");
        return;
      }
      // Type Check
      const fileType =
        contactFormData.file.type === "audio/x-wav"
          ? ".wav"
          : `.${contactFormData.file.type.replace(/(.*)\//g, "")}`;
      if (!fileTypes.includes(fileType)) {
        setLoading(false);
        toast.error(
          `Invalid File Type. Please attach a .pdf, .doc or a .rtf file.`
        );
        return;
      }
      if (contactFormData?.file?.size > 5000000) {
        setLoading(false);
        toast.error(`File should not be greater than 5MB`);
        return;
      }

      const form = new FormData();

      form.set("fileUpload", contactFormData.file);

      try {
        const req = await fetch(
          `${process.env.NEXT_PUBLIC_HYGRAPH_URI}/upload`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
            },
            body: form,
          }
        );

        const res = await req.json();

        // Adding a new job application, referencing the ID.

        const { data: hygraphRec } = await client.mutate({
          mutation: gql`
            mutation (
              $jobTitle: String
              $fullName: String
              $email: String
              $phone: String
              $description: String
              $cvId: ID
            ) {
              createJobApplication(
                data: {
                  jobTitle: $jobTitle
                  fullName: $fullName
                  email: $email
                  phone: $phone
                  description: $description
                  cv: { connect: { id: $cvId } }
                }
              ) {
                id
                fullName
                email
                phone
                cv {
                  url
                }
              }
            }
          `,
          variables: {
            jobTitle: `${jobDet.jobTitle}`,
            fullName: `${contactFormData.fullName}`,
            email: `${contactFormData.email}`,
            phone: `${contactFormData.phone}`,
            cvId: `${res.id}`,
            description : `${contactFormData.message}`
          },
        });

        // Passing the data, including the CV URL given by hygraph, to our email API.

        fetch("/api/jobApp", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: jobDet.jobTitle,
            email: contactFormData.email,
            name: contactFormData.fullName,
            phone: contactFormData.phone,
            desc: contactFormData.message,
            cvUrl: hygraphRec.createJobApplication.cv.url,
          }),
        });

        setLoading(false);
        toast.success(
          "Your application has been received. We will get back to you as soon as we can.",
          { duration: 5000 }
        );
        setContactFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          file: null,
        });
        setIsOpen(false);
      } catch (err) {
        setLoading(false);
        toast.error("Something went wrong. Please try again later.");
        
      }
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Modal setOpen={setIsOpen} open={isOpen}>
        <div className="mt-5 text-black ">
          <h4 className="text-xl font-bold text-center">
            <span className="block">You are applying for the position of:</span>
            <span className="block">
              {" "}
              <span className="text-darkBlue mt-4"> {jobDet.jobTitle}</span>
            </span>
          </h4>
          <form
            encType="multipart/form-data"
            ref={form}
            name="Job_Application"
            className="mt-8 grid grid-cols-1 gap-y-6"
          >
            <input
              type="hidden"
              name="form-name"
              value="Job_Application"
              className="bg-slate-400"
            />
            <div>
              <input
                type="text"
                className="hidden bg-slate-400"
                name="Position"
                value={jobDet.jobTitle}
              />
              <label className="block text-md font-medium text-gray-900">
                Full name
              </label>
              <label htmlFor="full-name" className="sr-only">
                Full name
              </label>
              <input
                value={contactFormData.fullName}
                onChange={(e) =>
                  setContactFormData((prev: any) => ({
                    ...prev,
                    fullName: e.target.value,
                  }))
                }
                type="text"
                name="Full-Name"
                id="full-name"
                autoComplete="name"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500  border-gray-300 rounded-md  border-2 bg-slate-100"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-md font-medium text-gray-900">
                Email
              </label>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                value={contactFormData.email}
                onChange={(e) =>
                  setContactFormData((prev: any) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500  border-gray-300 rounded-md  border-2 bg-slate-100"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-md font-medium text-gray-900">
                Phone
              </label>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <PhoneInput
                onChange={(v: any, c: any, e: any, phone: any) => {
                  setContactFormData({
                    ...contactFormData,
                    phone: phone,
                  });
                }}
                inputProps={{
                  name: "phone",
                }}
                value={contactFormData.phone}
                country={"us"}
                inputClass="!w-full py-6 !border-color-grey !bg-slate-100 !text-black "
                containerClass="bg-red !text-black"
                placeholder="phoneno"
              />
            </div>
            <div>
              <label className="block text-md font-medium text-gray-900">
                Description
              </label>
              <label htmlFor="message" className="sr-only">
                A brief regarding your background and work experience.
              </label>
              <textarea
                value={contactFormData.message}
                onChange={(e) =>
                  setContactFormData((prev: any) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                id="message"
                name="Message"
                rows={4}
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500  rounded-md  border-2 bg-slate-100"
                placeholder="A brief regarding your background and work experience."
              />
            </div>

            <div className="text-left w-full shadow-sm  bg-slate-100 placeholder-gray-500  border-gray-300 rounded-md  border-2">
              <label htmlFor="CV">
                <span className="placeholder-gray-500 px-2 text-center rounded-md flex items-center justify-between py-3 bg-slate-100">
                  <div className="flex items-center gap-2 cursor-pointer">
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

                    <span>
                      {" "}
                      {contactFormData.file == undefined
                        ? "Attach your CV"
                        : contactFormData.file?.name}
                    </span>
                  </div>
                  {contactFormData.file?.name ? (
                    <strong className="text-xl cursor-pointer alert-del">
                      <Image
                        src={upload}
                        height={20}
                        width={20}
                        alt="Upload Svg Logo"
                        title="Upload your CV"
                      />
                    </strong>
                  ) : (
                    ""
                  )}
                </span>
              </label>

              <input
                id="CV"
                name="CV"
                className="hidden"
                // value={contactFormData.file?.name || ""}
                type="file"
                onChange={(e) =>
                  setContactFormData((prev: any) => ({
                    ...prev,
                    // @ts-ignore
                    file: e.target.files[0],
                  }))
                }
              />
            </div>
            <span className="text-gray-500">
              * Please attach .pdf, or .doc file only
              <p className="text-gray-500">* Upload upto 5 mb</p>
            </span>

            <div className="text-center">
              <button
                className="py-2.5 px-5  bg-sky-500 text-white font-bold hover:bg-darkBlue duration-300 border-solid border-1 border-black rounded-xl"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Toaster />
      <Head>
        <title>Cloud Bravura</title>
      </Head>
      <div className="max-w-7xl mx-auto py-5">
        {Loading && <Loader />}
        <div className="w-full  h-full  mt-28 ">
          <div className="max-w-7xl w-11/12 mx-auto py-12 px-10  bg-secondary border-2  rounded-xl grid md:grid-cols-2 gap-5">
            <div className="items-center gap-4 ">
              <h1 className="text-4xl font-extrabold text-white">
                {jobDet.jobTitle}
              </h1>
              <h1 className="text-sm font-bold text-white pt-3">
                {" " + jobDet.projectLocations}
              </h1>
            </div>

            <div className=" items-center md:text-right gap-4 md:mt-10">
              <h3 className="  text-white ">
                <span
                  onClick={() => setIsOpen(true)}
                  className="text-black py-2.5 px-3 font-bold border-solid border-2 bg-white hover:text-black hover:bg-white/80 border-sky-primary rounded-xl cursor-pointer  hover:text-darkBlue hover:border-b-darkBlue duration-300 transition-colors"
                >
                  Apply now
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full  h-full ">
          <div className="max-w-7xl w-11/12 mx-auto py-12 px-10 ">
            {/* About Company */}

            {jobDet.aboutTheCompany && (
              <div className="space-y-4 pb-10">
                <div className=" items-center gap-4">
                  <h2 className=" text-2xl !text-black">
                    <span className="font-bold"> About the Company </span>{" "}
                  </h2>
                  <span className=" text-md prose prose-teal ">
                    {jobDet.aboutTheCompany}
                  </span>
                </div>
              </div>
            )}

            {/* Job Description */}
            {jobDet.description && (
              <div className="space-y-4 w-full  -order-1 ">
                <div className="flex items-center gap-4">
                  <h2 className="font-bold text-xl !text-black pb-1">
                    Description
                  </h2>
                </div>
                <span className=" text-md prose prose-teal ">
                  <RichText content={jobDet.description.raw.children} />
                </span>
              </div>
            )}

            <div className="grid gap-10 lg:grid-cols-2 pt-10">
              {/* Job Responsibilities */}
              {jobDet.jobResponsibilities && (
                <div className="space-y-4 w-full ">
                  <div className="flex items-center gap-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-6 w-6"
                    >
                      <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"></path>
                    </svg>
                    <h2 className="font-bold text-xl !text-black">
                      Job Responsibilities
                    </h2>
                  </div>
                  <div className="prose ">
                    <RichText
                      content={jobDet.jobResponsibilities.raw.children}
                    />
                  </div>
                </div>
              )}

              {/* Education */}
              <div className="space-y-10 ">
                {jobDet.education && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="h-6 w-6"
                      >
                        <path d="M337.8 5.4c-10.8-7.2-24.8-7.2-35.6 0l-139 92.7L37.6 126C15.6 130.9 0 150.3 0 172.8V464c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V172.8c0-22.5-15.6-42-37.6-46.9L476.8 98.1l-139-92.7zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256v-96zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64zm-88-160c0 48.6-39.4 88-88 88s-88-39.4-88-88 39.4-88 88-88 88 39.4 88 88zm-88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16z"></path>
                      </svg>
                      <h2 className="font-bold text-xl !text-black">
                        Education
                      </h2>
                    </div>
                    <div className="prose prose-teal">
                      <div className="prose prose-teal">{jobDet.education}</div>
                    </div>
                  </div>
                )}

                {/* Skills & Experience */}
                {jobDet.skillsExperience && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <svg className="h-6 w-6" viewBox="0 0 16 16">
                        <path d="M1 0L0 1l2.2 3.081a1 1 0 00.815.419h.07a1 1 0 01.708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 000 13a3 3 0 105.878-.851l2.654-2.617.968.968-.305.914a1 1 0 00.242 1.023l3.27 3.27a.997.997 0 001.414 0l1.586-1.586a.997.997 0 000-1.414l-3.27-3.27a1 1 0 00-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0016 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 00-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 01-.293-.707v-.071a1 1 0 00-.419-.814L1 0zm9.646 10.646a.5.5 0 01.708 0l2.914 2.915a.5.5 0 01-.707.707l-2.915-2.914a.5.5 0 010-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path>
                      </svg>
                      <h2 className="font-bold text-xl !text-black">
                        Skills & Experience
                      </h2>
                    </div>
                    <div className="prose prose-teal">
                      <RichText
                        content={jobDet.skillsExperience?.raw?.children}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const { data: jobDetails } = await client.query({
    query: gql`
    query JobListings {
      jobListings(where: {isActive: true, slug: "${params?.jobTitle}"}) {
        jobTitle
        slug
        aboutTheCompany
        description {
          raw
          text
        }
        projectLocations
        education
        jobResponsibilities {
          raw
          text
        }
        skillsExperience{
          raw
          text
        }
        createdAt
      }
    }
    
        `,
  });

  if (!jobDetails.jobListings.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: jobDetails.jobListings[0],
    },
  };
}
export default JobDetails;
