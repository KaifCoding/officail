"use client";

import Router from "next/router";
import { useEffect, useState } from "react";


// Inside our function component

function add() {
  const [std, setStd] = useState([])
  const [student, setStudent] = useState({
    name: "",
    fname: "",
    enroll: "",
    per: "",
  });
  const [status, setStatus] = useState();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  }
  
  const createStudent = async (e) => {
    e.preventDefault();
    try {
      const createdStudent = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: student.name,
          fname: student.fname,
          enroll: student.enroll,
          per: student.per,
        }),
      }).then((res) => res.json());
      console.log("CREATED DOCUMENT");
      setStatus(true);
      setStudent({
        name: "",
        fname: "",
        enroll: "",
        per: "",
      });

      console.log(createdStudent);
    } catch (error) {
      console.log(error);
      setStatus(false);
    }
  };
  
 
  useEffect(() => {
 console.log("running");
 fetch('http://localhost:3000/api/getstudents').then((a)=>{
  return a.json()}).then((parsed)=>{
    console.log(parsed);
     setStd(parsed)
 })
  
    
  }, [])
  
    
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="container px-5 py-24 mx-auto mh-100 h-screen">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Add a student
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              please add a data
            </p>
          </div>

          <form onSubmit={createStudent}>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      value={student.name}
                      onChange={handleChange}
                      required
                      id="name"
                      name="name"
                      class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div class="relative">
                    <label for="per" class="leading-7 text-sm text-gray-400">
                      Course
                    </label>
                    <select
                      value={student.per}
                      onChange={handleChange}
                      required
                      id="per"
                      name="per"
                      class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="">Select</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Web Development - frontend">
                        Web Development - frontend
                      </option>
                      <option value="Web Development - fullstack">
                        Web Development - frontend
                      </option>
                      <option value="Web Development - NextJs">
                        Web Development - NextJs
                      </option>
                    </select>
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="enroll" class="leading-7 text-sm text-gray-400">
                      Enroll Number
                    </label>
                    <input
                      type="text"
                      value={student.enroll}
                      onChange={handleChange}
                      required
                      id="enroll"
                      name="enroll"
                      class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div class="relative">
                    <label for="fname" class="leading-7 text-sm text-gray-400">
                      Father name
                    </label>
                    <input
                      type="text"
                      value={student.fname}
                      onChange={handleChange}
                      required
                      id="fname"
                      name="fname"
                      class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {status === true && <p>Thank you for your message!</p>}
                {status === false && (
                  <p>
                    There was an error submitting your message. Please try
                    again.
                  </p>
                )}
                <div class="p-2 w-full">
                  <button
                    type="submit"
                    class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                  >submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-red-400 tracking-widest font-medium title-font mb-1">
              Students
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">
              list of Students
            </h1>
          </div>
          
          {std.map((students)=>{
            return <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-white text-lg title-font font-medium">{students.name}</h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base"> father name :- {students.fname}</p>
                    <p class="leading-relaxed text-base"> Course :- {students.per}</p>
                    <p class="leading-relaxed text-base"> Enroll Number :- {students.enroll}</p>
              </div>
            </div>
          </div>
          })}
          
        </div>
      </section>
    </>
  );
}

export default add;
