import { useState } from "react";

const renderFieldRequired = () => {
  return <div>This field is required.</div>;
};

export default function ContactMe(props) {
  const [formState, setFormState] = useState({});
  const setActivePage = props.setActivePage;
  const setName = (e) => {
    setFormState((existingValues) => ({
      ...existingValues,
      name: e.target.value,
    }));
  };

  const setEmail = (e) => {
    setFormState((existingValues) => ({
      ...existingValues,
      email: e.target.value,
    }));
  };

  const setMessage = (e) => {
    setFormState((existingValues) => ({
      ...existingValues,
      message: e.target.value,
    }));
  };

  const validateForm = () => {
    if (
      formState.name &&
      formState.name !== "" &&
      formState.email &&
      formState.email !== "" &&
      formState.message &&
      formState.message !== ""
    ) {
      setActivePage("contact-success");
    }
  };

  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 tracking-wide">
              CONTACT ME
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to email me at{" "}
              <a href="mailto:tricianghiem@gmail.com">
                <b>tricianghiem@gmail.com</b>
              </a>{" "}
              or fill out the form below.
            </p>
          </div>
          <form className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={
                      formState.name === ""
                        ? "w-full bg-gray-100 rounded border border-red-500 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        : "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    }
                    required
                    onChange={setName}
                  />
                  {formState.name === "" ? renderFieldRequired() : <></>}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={
                      formState.email === ""
                        ? "w-full bg-gray-100 rounded border border-red-500 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        : "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    }
                    required
                    onChange={setEmail}
                  />
                  {formState.email === "" ? renderFieldRequired() : <></>}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={
                      formState.message === ""
                        ? "w-full bg-gray-100 rounded border border-red-500 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        : "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    }
                    required
                    onChange={setMessage}
                  ></textarea>
                  {formState.message === "" ? renderFieldRequired() : <></>}
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-green-900 border-0 py-2 px-8 focus:outline-none hover:bg-neutral-700 rounded text-sm"
                  onClick={() => validateForm()}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
