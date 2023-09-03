import React, { useState } from "react";
import portfolio from "../assets/portfolio.png";
import hospital from "../assets/hospital.jpg";
import vector from "../assets/vector.png";
import notes from "../assets/Notes.png";
import Expire from "../Expire";
import { Carousel } from 'flowbite-react';

export default function Experience() {

  return (
    <div name="experience" className="w-full text-white pt-12">
      <h1 className="text-4xl font-bold p-8 head1">Experience ;</h1>

      <div className="m-auto flex flex-col flex-wrap justify-center h-full">

        <div className="p-10 grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          <div
            className="p-5 shadow-md border-2 border-gray-300 group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="text-lg p-1">
              <span className="text-2xl font-bold text-white tracking-wider">
                Teaching Assistant 👨‍🏫<br />McMaster University
              </span>

              <br/><br />

              <div>
              conducted weekly tutorials on C, bash, LaTeX, and git, supervising over 60 students from two different classes.
              </div>

            </div>
          </div>

          <div
            className="p-5 shadow-md border-2 border-gray-300 group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="text-lg p-1">
              <span className="text-2xl font-bold text-white tracking-wider">
                Web Developer 🌎<br />McMaster MSA (Club)
              </span>

              <br/><br />

              <div>
               Contributed to the development of an interactive application leveraging React.js and Express.js with TypeScript for the club’s monthly game tournaments.
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
