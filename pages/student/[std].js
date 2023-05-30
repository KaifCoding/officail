import Link from "next/link";





export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/getstudents");
  
  const rawdata = await res.json();
 
  
 
  const paths = rawdata.map((curElem) => {
    return {
      params: {
        std: curElem.enroll.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
 
export const getStaticProps = async (context) => {
  const enroll = context.params.std;
  const res = await fetch(`http://localhost:3000/api/getstudent?number=${enroll}`);
  const std = await res.json();

  return {
    props: {
      result:std,
    },
  };
};





function student(result) {

 const data = result.result[0]



const load = "loding...."
  return (
    <section class="text-gray-400 bg-gray-900 body-font ">
      <div class="container px-5 py-24 mx-auto flex flex-wrap justify-center align-center h-full">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-red-400 tracking-widest font-medium title-font mb-1">
            Students
          </h2><div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="fill-green-400"><path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path></svg>
          <h1 class="green sm:text-3xl text-2xl font-medium title-font text-white">
            Verified
          </h1></div>
        </div>

        
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">
                    {load && data.name}
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    father name :- {load && data.fname}
                  </p>
                  <p class="leading-relaxed text-base"> Course :- {load && data.per}</p>
                  <p class="leading-relaxed text-base">
                    {" "}
                    Enroll Number :- {load && data.enroll}
                  </p>
                </div>
              </div>
            </div>
          
      </div>
      <Link
               href='/check'   
          class=" w-fit flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                  >back</Link>
    </section>
  );
}

export default student;
