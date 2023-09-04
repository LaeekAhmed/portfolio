import React, { useState } from "react";
import portfolio from "../assets/portfolio.png";
import hospital from "../assets/hospital.jpg";
import vector from "../assets/vector.png";
import notes from "../assets/Notes.png";
import Expire from "../Expire";
import { Carousel } from 'flowbite-react';

export default function Projects() {
  let [link, setLink] = useState("https://flypedia2.vercel.app/");

  let [itr, setItr] = useState(Number(0)); // iterator for list of project links (items)
  const [nav, setNav] = useState(false);

  const chng_link = () => {
    setNav(!nav);

    let items = [
      "https://flypedia2.vercel.app/",
      "https://note-spot-eight.vercel.app/",
      "https://cs1xd3.online/ShowModulePublish?modulePublishId=8a5076e8-edea-422d-991b-f8a2044161e7"];

    let newItr = itr;
    if (newItr == items.length) newItr = 0;
    let newLink = link;

    newLink = items[newItr];
    newItr++;

    setLink(newLink);
    setItr(newItr);
    //console.log(itr, link);
  };

  return (
    <div name="projects" className="w-full text-white pt-12">
      <h1 className="text-4xl font-bold p-8 head1">Projects;</h1>

      <div className="m-auto flex flex-col flex-wrap justify-center h-full">

        <div className="p-10 grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          <div
            className="p-5 shadow-md border-2 border-gray-300 group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="text-lg p-1">
              <span className="text-2xl font-bold text-white tracking-wider">
                Note-Spot 📂
              </span>

              <br/><br />

              <div>
              Note sharing Web-App which allows users to share, download and upload notes (pdfs, docs, images etc)
                <br />
                <div className="flex">
                  <a target="_blank" rel="noopener noreferrer" href="https://note-spot-eight.vercel.app/" className="flex items-center">
                    <button className="flex rounded-lg p-1 px-2 m-2 bg-white text-black font-bold text-lg">
                      Open 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>

                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/LaeekAhmed/NoteSpot" className="flex items-center">
                    <button className="flex rounded-lg p-1 px-2 m-2 bg-white text-black font-bold text-lg">
                      Repo 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>
                  
                </div>
              </div>
              Live demo below! ⬇️
            </div>
          </div>

          <div
            className="p-5 shadow-md border-2 border-gray-300 group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="text-lg p-1">
              <span className="text-2xl font-bold text-white tracking-wider">
                Flypedia ✈️
              </span>

              <br/><br />

              <div>
                Website built using React and Next.js to view and search for flights and flight details.
                Integrated real-time flight details from the Airlabs API to provide comprehensive information on 3000+ flights
                <br />

                <div className="flex">
                  <a target="_blank" rel="noopener noreferrer" href="https://flypedia2.vercel.app/" className="flex items-center">
                    <button className="flex rounded-lg p-1 px-2 m-2 bg-white text-black font-bold text-lg">
                      Open 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>

                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/LaeekAhmed/flypedia" className="flex items-center">
                    <button className="flex rounded-lg p-1 px-2 m-2 bg-white text-black font-bold text-lg">
                      Repo 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>
                  
                </div>
              </div>
              Live demo below! ⬇️
            </div>
          </div>

          <div
            className="p-5 shadow-md border-2 border-gray-300 group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="text-lg p-1">
              <span className="text-2xl font-bold text-white tracking-wider">
                TTC delay Analytics 🚌
              </span>

              <br/><br />

              <div>
                Analyzing TTC bus, subway & streetcar delay data to identify delay hotspots, root causes, and find valuable insights by creating an ETL pipeline and a dashboard
                <br />

                <div className="flex">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/LaeekAhmed/ttc_delay_analytics" className="flex items-center">
                    <button className="flex rounded-lg p-1 px-2 m-2 bg-white text-black font-bold text-lg">
                      Repo 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div
            className="p-5 shadow-md border-2 border-gray-300 group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="text-lg p-1">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vector Calculator 📈
              </span>

              <br/><br />

              <div>
              calculator built to perform operations like addition, subtraction, scaling, transformations, and
              magnitude calculation on Vectors with graphical visualization.
                <br />

                <div className="flex">
                  <a target="_blank" rel="noopener noreferrer" href="https://cs1xd3.online/ShowModulePublish?modulePublishId=8a5076e8-edea-422d-991b-f8a2044161e7" className="flex items-center">
                    <button className="flex rounded-lg p-1 px-2 m-2 bg-white text-black font-bold text-lg">
                      Open 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>

                  <a target="_blank" rel="noopener noreferrer" href="https://cs1xd3.online/ShowModulePublish?modulePublishId=c9e5f087-eddf-4e3d-b1e0-7ef9ea97fba4" className="flex items-center">
                    <button className="flex rounded-lg p-1 px-2 m-2 bg-white text-black font-bold text-lg">
                      Repo 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>
                  
                </div>

              </div>
              Live demo below! ⬇️
            </div>
          </div>

          <div
            className="p-5 shadow-md border-2 border-gray-300 group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="text-lg p-1">
              <span className="text-2xl font-bold text-white tracking-wider">
                NYC taxi data Analytics 🚕
              </span>

              <br/><br />

              <div>
              Data engineering project analyzing nyc taxi data by builiding a batch pipeline based on the ELT process.
                <br />

                <div className="flex">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/LaeekAhmed/NYC_taxi_data_analytics" className="flex items-center">
                    <button className="flex rounded-lg p-1 px-2 m-2 bg-white text-black font-bold text-lg">
                      Repo 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>
                </div>
                
              </div>
            </div>
          </div>

          <div
            className="p-5 shadow-md border-2 border-gray-300 group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="text-lg p-1">
              <span className="text-2xl font-bold text-white tracking-wider">
                DBMS for Hospital 🏥
              </span>

              <br/><br />

              <div>
              Data-base management for a hospital with various features to work with records of patients and employees.
              Can be used to perform taks like booking appointments, registering employees, creating bills etc.
                <br />

                <div className="flex">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/LaeekAhmed/Hosp-mng-sys" className="flex items-center">
                    <button className="flex rounded-lg p-1 px-2 m-2 bg-white text-black font-bold text-lg">
                      Repo 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="">
        <iframe
          className="animate m-5 mt-10 rounded-2xl mx-auto"
          id="proj"
          src={link}
          width="85%"
          height={600}
        />

        <button
          onClick={chng_link}
          className="bg-violet-800 p-5 text-3xl rounded-3xl flex my-10 mx-auto link1"
        >
          {/* {!nav ? "Next ➡️" : "Back ⬅️"} */}
          Next ➡️
        </button>
        {/* {nav ? <Expire delay="5000">The next project may take a few seconds to load. My sincere apologies.</Expire> : <></>} */}
      </div>

    </div>
  );
}
