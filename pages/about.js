import React from "react";

function about() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                  <img
                    src="kk.jpg"
                    className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center mb-10">
                  <h2 className="font-medium title-font mt-4 text-white text-lg">
                    Mohammad Kaif
                  </h2>
                  
                  <p className="text-base text-gray-400">CEO & Founder</p>
                  <div className="w-12 h-1 bg-red-500 rounded mt-4 "></div>
                </div>
                <div className="flex flex-col items-center text-center justify-center mb-10">
                <h2 className="font-medium title-font mt-4 text-white text-lg">
                   Company <br/> Registration Number
                  </h2>
                  <p className="text-base text-gray-400">UDYAM-RJ-10-0027758</p>
                <div className="w-12 h-1 bg-red-500 rounded mt-4"></div>
                </div>
                <div className="flex flex-col items-center text-center justify-center mb-10">
                <h2 className="font-medium title-font mt-4 text-white text-lg">
                   Email
                  </h2>
                  <p className="text-base text-gray-400">atomProd.info@gmail.com</p>
                <div className="w-12 h-1 bg-red-500 rounded mt-4"></div>
                </div>
                <div className="flex flex-col items-center text-center justify-center mb-10">
                <h2 className="font-medium title-font mt-4 text-white text-lg">
                   Phone
                  </h2>
                  <p className="text-base text-gray-400">+91 8209292094</p>
                <div className="w-12 h-1 bg-red-500 rounded mt-4"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Welcome to AtomProd: Your Destination for Cutting-Edge Coding
                  Solutions!
                  <br />
                  At AtomProd, we are a premier coding company and coding
                  institute located in the vibrant city of Rawatbhata,
                  Rajasthan, India. With a passion for technology and a
                  commitment to excellence, we offer a wide range of coding
                  services and comprehensive training programs to empower
                  individuals and businesses in the digital age.
                  <br />
                  <br />
                  Our company is driven by a team of highly skilled and
                  experienced professionals who are dedicated to delivering
                  top-notch coding solutions. Whether you require web
                  development, mobile app development, software engineering, or
                  any other coding-related service, our talented team has the
                  expertise to meet your unique requirements.
                  <br />
                  <br />
                  As a leading coding institute, we understand the importance of
                  equipping individuals with the skills necessary to thrive in
                  today's competitive market. Our comprehensive training
                  programs cater to beginners, intermediate learners, and even
                  experienced professionals looking to upskill or transition
                  into the coding domain. With our industry-relevant curriculum
                  and hands-on training approach, we ensure that our students
                  gain practical knowledge and develop a strong foundation in
                  coding.
                  <br />
                  <br />
                  To further assist our clients and students, we provide ongoing
                  support and guidance throughout their coding journey. Our
                  experts are always available to answer questions, provide
                  technical assistance, and offer valuable insights to ensure
                  the success of your coding projects or learning endeavors.
                  <br />
                  <br />
                  To reach out to us, please feel free to contact us via email
                  at atomprod.info@gmail.com or give us a call at +91
                  8209292094. We value clear and prompt communication, and our
                  dedicated team will be delighted to assist you with any
                  inquiries or provide detailed information about our services
                  and training programs.
                  <br />
                  <br />
                  At AtomProd, we believe that coding is the language of the
                  future, and we are committed to empowering individuals and
                  businesses to thrive in the digital landscape. Join us on this
                  exciting coding journey and unlock endless possibilities for
                  innovation and growth!
                  <br />
                  <br />
                  Discover the power of coding with AtomProd today!.
                </p>
                <a
                  href="/contact"
                  className="text-red-400 inline-flex items-center"
                >
                  Contact
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
