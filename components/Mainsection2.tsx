import { useRef, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import Loader from "./Loader";
import BG from "./reusable/BG";
import Title from "./reusable/Title";

export default function Mainsection2() {
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (query && query.submit === "true") {
      MySwal.fire({
        icon: "success",
        titleText: "Success",
        text: "Thank you for contacting us.We will get back as soon as possible.",
        timer: 3500,
        showConfirmButton: false,
      });
    }
  }, [query]);

  const [loading, setLoading] = useState(false);

  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const form = useRef<null | HTMLFormElement>(null);
  function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    if (typeof form !== null) {
      if (
        !contactFormData.firstName ||
        !contactFormData.lastName ||
        !contactFormData.email ||
        !contactFormData.message
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

      const res = fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactFormData),
      })
        .then(() => {
          setLoading(false);
          toast.success(
            "Your enquiry has been submitted successfully. We'll get back to you at our earliest.",
            { duration: 3000 }
          );
          setContactFormData({
            email: "",
            firstName: "",
            lastName: "",
            message: "",
            phone: "",
          });
        })
        .catch((e) => {
          setLoading(false);
          toast.error("Something went wrong. Please try again later.");
        });
    }
  }

  return (
    <div
      className=" relative bg-gradient-to-br from-primary/5 to-purple-50/10 pt-8"
      id="contact"
    >
      <BG className="absolute bottom-0 left-0 w-full object-contain grayscale-[0.5] opacity-40" />
      {loading && <Loader />}
      <Toaster />
      <div className="max-w-5xl mx-auto  text-center">
        <Title title="Let's connect" />
        <p className="pt-4">
          {
            "Whether you need assistance with cloud migration, infrastructure optimization, or application development, we're here to help you succeed in the cloud."
          }
        </p>
      </div>
    
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative bg-white/90 backdrop-blur-md rounded-md shadow-xl">
          {/* <h2 className="sr-only">Contact us</h2> */}

          <div className="">
            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <form
                encType="multipart/form-data"
                ref={form}
                name="Contact-Form"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <input type="hidden" name="form-name" value="Contact-Form" />
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      value={contactFormData.firstName}
                      onChange={(e) =>
                        setContactFormData((prev: any) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      value={contactFormData.lastName}
                      onChange={(e) =>
                        setContactFormData((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      value={contactFormData.email}
                      onChange={(e) =>
                        setContactFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full  text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <PhoneInput
                      onChange={(v, c, e, phone) => {
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
                      inputClass="!w-full py-6 !border-color-grey !bg-gray-100 !text-black"
                      containerClass="bg-red !text-black"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      value={contactFormData.message}
                      onChange={(e) =>
                        setContactFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md bg-gray-100"
                      aria-describedby="message-max"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                    className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary duration-200 transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
