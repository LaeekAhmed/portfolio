import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen flex items-center justify-center py-8 sm:py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 head1">
          About me
        </h1>

        <div className="m-auto flex flex-col justify-center h-full">
          <div className="p-4 sm:p-5 shadow-md border-2 border-gray-600 rounded-xl mx-auto relative bg-gray-800">
            <p className="text-sm sm:text-base leading-relaxed">
              I am a Computer Science student 💻 at McMaster University with
              overall 4 years of experience. My journey began with Python in
              high school, where I learned the basics of programming, logic,
              databases, and file systems. In my final year of high school 🎓, I
              collaborated with two teammates on our first project: a Graphical
              User Interface (GUI) database system - The Hospital Management
              System 🏥 built using Tkinter Python and SQLite, which I further
              improved in May 2022.
              <br />
              <br />
              Upon entering university, I expanded my knowledge to include
              multiple languages such as Haskell, C++/C, Java, and Elm. I delved
              into various topics 📝 including Data Structures and Algorithms,
              Discrete Mathematics, Object-Oriented Programming, Development
              Basics, Computer Architecture, Databases, and Software
              Development, among others.
              <br />
              <br />
              Alongside my academic pursuits, I ventured into web development,
              mastering tools like React.js, Node.js, Express, MongoDB, and
              HTML/CSS. I applied this knowledge to create multiple projects,
              each one allowing me to implement and reinforce newly acquired
              skills.
              <br />
              <br />
              Throughout my journey, I've had the opportunity to work with
              several teams to create various full-stack web applications. These
              collaborative experiences not only enhanced my technical skills
              but also improved my ability to work effectively in a team
              environment. We successfully deployed these applications, giving
              me valuable insights into the entire development lifecycle, from
              conception to staging and to production 🚀
              <br />
              <br />
              My current goal 🎯 is to gain more hands-on experience in the
              field by working for a company where I can apply and expand upon
              what I've learned. I'm excited to contribute my skills and
              continue growing as a software developer!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
