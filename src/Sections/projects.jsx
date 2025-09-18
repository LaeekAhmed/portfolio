import React from "react";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "TTC delay Analytics 🚌",
      description:
        "Analyzed TTC bus, subway & streetcar delay data to identify delay hotspots, root causes, and find valuable insights by creating an ETL pipeline and displaying them in a dashboard",
      repoLink:
        "https://github.com/LaeekAhmed/TTC-delay-analytics?tab=readme-ov-file#ttc-delay-analytics",
    },
    {
      title: "Notespot 📚",
      description:
        "An over engineered full-stack file sharing platform and an API server, designed for users to upload, download, and publicly share files of various formats (PDFs, docs, images and more). Built with a focus on learning scalable cloud infrastructure and modern backend development practices",
      liveLink: "https://notespot.ca/",
      repoLink: "https://github.com/LaeekAhmed/Notespot",
    },
    {
      title: "Flypedia ✈️",
      description:
        "Website built using React and Next.js to view and search for flights and flight details. Integrated real-time flight details from the Airlabs API to provide comprehensive information on 3000+ flights",
      liveLink: "https://flypedia2.vercel.app/",
      repoLink: "https://github.com/LaeekAhmed/flypedia",
    },
    {
      title: "Auto-ML Platform ⚙️",
      description:
        "Collaborated in an agile team of 12 to architect and develop a platform to automate machine learning model generation using Google Cloud services.",
      repoLink: "https://github.com/DSC-McMaster-U/Auto-ML",
    },
    {
      title: "NYC taxi data Analytics 🚕",
      description:
        "Data engineering project analyzing NYC Yellow and Green Taxi Trip Records to identify key trends, routes, and patterns. Utilized ELT (Extract, Load, Transform) processes to extract meaningful insights and display them in an interactive dashboard.",
      repoLink:
        "https://github.com/LaeekAhmed/NYC-Taxi-Data-Analytics?tab=readme-ov-file#nyc-taxi-data-analytics",
    },
    {
      title: "DBMS for Hospital 🏥",
      description:
        "Database management for a hospital with various features to work with records of patients and employees. Can be used to perform tasks like booking appointments, registering employees, creating bills etc.",
      repoLink: "https://github.com/LaeekAhmed/Hosp-mng-sys",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full min-h-screen flex items-center justify-center py-8 sm:py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 head1">
          Projects
        </h1>

        <div className="m-auto flex flex-col justify-center h-full">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 shadow-md border-2 border-gray-600 rounded-xl flex flex-col justify-between items-start mx-auto relative h-full w-full min-h-[280px] bg-gray-800"
              >
                <div className="w-full flex flex-col mobile-space-y-2">
                  <span className="mobile-text-lg sm:text-xl font-bold text-gray-300 tracking-wider mb-1 sm:mb-2 block pr-12 sm:pr-16">
                    {project.title}
                  </span>
                  <hr className="border-gray-500 mb-2 w-full" />
                </div>
                <p className="mobile-text-base text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-3 mt-auto">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded transition-colors duration-300 text-xs"
                    >
                      <FaExternalLinkAlt className="mr-1.5" /> Visit
                    </a>
                  )}
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-1.5 px-3 rounded transition-colors duration-300 text-xs"
                  >
                    <FaGithub className="mr-1.5" /> Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
