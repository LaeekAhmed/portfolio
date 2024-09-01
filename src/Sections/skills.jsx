import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Python from "../assets/python.png";
import Elm from "../assets/elm.png";
import Haskell from "../assets/haskell.png";
import bash from "../assets/bash.png";
import C from "../assets/c.png";
import sql from "../assets/sqlite.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import docker from "../assets/docker.png";
import terraform from "../assets/terraform.png";
import postgres from "../assets/postgres.png";
import gcp from "../assets/gcp.png";
import kafka from "../assets/kafka.png";
import airflow from "../assets/Airflow.png";
import spark from "../assets/spark.png";
import dbt from "../assets/dbt.png";

const Skills = () => {
  return (
    <div className="py-40 w-full">
      <div
        name="skills"
        className="justify-center py-20 flex flex-col w-full h-full skills"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 head1">Skills</h1>
          <div className="text-white mx-auto mb-6">
            <p className="head1 text-3xl">Tools I've worked with</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-white">
            <div className="col-span-full">
              <p className="head1 text-3xl">Languages</p>
              <br />
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={JavaScript} alt="" />
              <p className="text-2xl my-3">Javascript</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={Python} alt="" />
              <p className="text-2xl my-3">Python</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={C} alt="" />
              <p className="text-2xl my-3">C++/C</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={HTML} alt="" />
              <p className="text-2xl my-3">HTML</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={CSS} alt="" />
              <p className="text-2xl my-3">CSS</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={bash} alt="" />
              <p className="text-2xl my-3">bash</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={Elm} alt="" />
              <p className="text-2xl my-3">Elm</p>
            </div>

            <div className="col-span-full">
              <p className="head1 text-3xl">Frameworks & Libraries</p>
              <br />
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={sql} alt="" />
              <p className="text-2xl my-3">SQLite</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={mongo} alt="" />
              <p className="text-2xl my-3">MongoDB Atlas</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={ReactImg} alt="" />
              <p className="text-2xl my-3">React</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={node} alt="" />
              <p className="text-2xl my-3">Nodejs-Express</p>
            </div>

            <div className="col-span-full">
              <p className="head1 text-3xl">General Tools</p>
              <br />
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={github} alt="" />
              <p className="text-2xl my-3">GitHub</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={docker} alt="" />
              <p className="text-2xl my-3">Docker</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={gcp} alt="" />
              <p className="text-2xl my-3">GCP</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={terraform} alt="" />
              <p className="text-2xl my-3">Terraform</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={postgres} alt="" />
              <p className="text-2xl my-3">Postgres</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={mongo} alt="" />
              <p className="text-2xl my-3">Mongo DB</p>
            </div>

            <div className="col-span-full">
              <p className="head1 text-3xl">Big Data Technologies</p>
              <br />
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={dbt} alt="" />
              <p className="text-2xl my-3">DBT Cloud</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={spark} alt="" />
              <p className="text-2xl my-3">Spark</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={airflow} alt="" />
              <p className="text-2xl my-3">Airflow</p>
            </div>

            <div className="bg-violet-900 rounded-lg p-5 langs">
              <img className="w-20 mx-auto" src={kafka} alt="" />
              <p className="text-2xl my-3">Kafka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
