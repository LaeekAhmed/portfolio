import React, {useState} from "react";
import ibmLogo from "../assets/ibm.png";
import mcmasterLogo from "../assets/mcmaster.png";
import gdscLogo from "../assets/gdsc.png";
import {IoAddCircleOutline} from "react-icons/io5";

export default function Experience() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({title: "", description: ""});

  const experiences = [
    {
      title: "Software Engineering Intern 🐝",
      company: "IBM Canada",
      location: "Markham, ON",
      date: "Jan 2024 – Present",
      description:
        "Working on IBM Skills Network, a large-scale content syndication and learning management system deployed across 4 continents and several data centers, with millions of users worldwide.",
      logo: ibmLogo,
      website: "https://www.ibm.com/ca-en",
    },
    {
      title: "Open Source Team Developer 👨‍💻",
      company: "Google Developer Student Clubs - McMaster University",
      location: "Remote",
      date: "Sept 2023 – Mar 2024",
      description:
        "Worked on GDSC's AutoML (Automated machine learning) project, an automated machine learning model generator built using Google Cloud Services.",
      logo: gdscLogo,
      website: "https://gdsc.community.dev/mcmaster-university/",
    },
    {
      title: "Teaching Assistant 🧑‍🏫",
      company: "Dept. of Computing & Software - McMaster Engineering",
      location: "Hamilton, ON",
      date: "June 2023 – Dec 2023",
      description:
        "Designed and conducted weekly tutorials on C, bash, LaTeX, and git, supervising over 60 students from 2 different classes.",
      logo: mcmasterLogo,
      website: "https://www.eng.mcmaster.ca/cas",
    },
  ];

  const handleAddCompany = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New Job Opportunity: ${formData.title}`
    );
    const body = encodeURIComponent(
      `I just visited your portfolio and would like to discuss an exciting opportunity!\n\n` +
        `Role: ${formData.title}\n\n` +
        `About the position: ${formData.description}\n\n` +
        `I'd love to connect and explore how your skills align with this role. Looking forward to hearing from you!`
    );
    window.location.href = `mailto:laeek385@gmail.com?subject=${subject}&body=${body}`;
    setShowForm(false);
    setFormData({title: "", description: ""});
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({title: "", description: ""});
  };

  return (
    <div
      name="experience"
      className="w-full min-h-screen flex items-center justify-center py-8 sm:py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 head1">
          Experience
        </h1>

        <div className="m-auto flex flex-col justify-center h-full">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 shadow-md border-2 border-gray-600 rounded-xl flex flex-col justify-between items-start mx-auto relative h-full w-full min-h-[280px]"
              >
                <div className="w-full flex flex-col mobile-space-y-2">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="absolute top-2 right-2 w-10 h-10 sm:w-12 sm:h-12 object-contain bg-white p-1 rounded"
                  />
                  <span className="mobile-text-lg sm:text-xl font-bold text-gray-300 tracking-wider mb-1 sm:mb-2 block pr-12 sm:pr-16">
                    {exp.title}
                  </span>
                  <span className="mobile-text-base sm:text-sm font-semibold text-gray-400 mb-1 block">
                    {exp.company}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 mb-2 block">
                    {exp.location} | {exp.date}
                  </span>
                  <hr className="border-gray-500 mb-2 w-full" />
                </div>
                <p className="mobile-text-base text-sm">{exp.description}</p>
              </div>
            ))}

            {/* New card for adding a company */}
            <div className="p-[3px] rounded-xl bg-gradient-to-r from-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-gradient-x">
              <div className="p-6 sm:p-7 bg-gray-800 rounded-lg flex flex-col justify-center items-center mx-auto relative h-full w-full min-h-[280px]">
                {!showForm ? (
                  <>
                    <button
                      onClick={handleAddCompany}
                      className="text-gray-400 hover:text-gray-200 transition-colors duration-300 group"
                    >
                      <IoAddCircleOutline className="w-16 h-16 animate-[pulse_2s_ease-in-out_infinite] group-hover:animate-none group-hover:scale-110 transition-transform duration-300 text-gray-300" />
                    </button>
                    <p className="text-xl font-semibold mt-4 text-center">
                      Maybe your company next?
                    </p>
                    <p className="text-gray-400 mt-2 text-center">
                      Click to add your company to my list!
                    </p>
                  </>
                ) : (
                  <form onSubmit={handleSubmit} className="w-full">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Job Title"
                      className="w-full p-2 mb-4 bg-gray-700 rounded"
                      required
                    />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Job Description"
                      className="w-full p-2 bg-gray-700 rounded resize-none"
                      rows="4"
                      maxLength="400"
                      required
                    />
                    <p className="text-sm text-gray-400 mb-5">
                      {formData.description.length}/400 characters
                    </p>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="w-1/2 p-2 bg-gray-600 hover:bg-gray-700 rounded mr-2 text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-1/2 p-2 bg-blue-600 hover:bg-blue-700 rounded ml-2 text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
