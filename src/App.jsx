import React from "react";
import "./portfolio.css"; // Tailwind + custom CSS
import logo from "./assets/ic_logo.jpeg";

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white font-sans">

      {/* HEADER SECTION (full-width background) */}
      <header className="w-full bg-gray-900 py-8">
        {/* Centered container */}
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-orange-500">Saurabh Jurri</span>
            <span className="block text-xl sm:text-2xl">
              Android Developer
            </span>
          </h1>

          <img
            src={logo}
            alt="Profile"
            className="mx-auto mt-8 rounded-lg w-48 h-auto"
          />

          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://stackoverflow.com/users/5564845/saurabh"
              className="text-orange-500 font-semibold hover:underline"
            >
              Stackoverflow
            </a>
            <a
              href="https://github.com/pintu236/"
              className="text-orange-500 font-semibold hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/sourabh-jurri-891a98b7/"
              className="text-orange-500 font-semibold hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION (full-width background) */}
      <section className="w-full bg-black py-12">
        <div className="max-w-8xl mx-auto px-4">
          {/* Heading centered at the top */}



          {/* Two-column layout on medium+ screens */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT COLUMN: About Me Text */}
            <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="mb-8 text-gray-200 leading-7 text-left">
                Results-driven Android Developer with 5+ years of experience in
                Java, Kotlin, Android SDK, and UI/UX design. Dedicated to creating
                user-friendly and visually appealing Android apps. Seeking to
                leverage my skills as a Computer Engineer in a dynamic work
                environment that fosters growth and success. Actively exploring
                backend development to transition into a full-stack mobile
                developer role.
              </p>
            </div>

            {/* RIGHT COLUMN: Skill Bars */}

            <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
              {/* Android */}
              <div>
                <label className="block mb-1 font-semibold">Android</label>
                <div className="relative bg-gray-700 h-2 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                    style={{ width: "100%" }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full top-1/2 -translate-y-1/2"
                    style={{ left: "100%" }}
                  />
                </div>
              </div>

              {/* Flutter */}
              <div>
                <label className="block mb-1 font-semibold">Flutter</label>
                <div className="relative bg-gray-700 h-2 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                    style={{ width: "70%" }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full top-1/2 -translate-y-1/2"
                    style={{ left: "70%" }}
                  />
                </div>
              </div>

              {/* Java */}
              <div>
                <label className="block mb-1 font-semibold">Java</label>
                <div className="relative bg-gray-700 h-2 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                    style={{ width: "70%" }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full top-1/2 -translate-y-1/2"
                    style={{ left: "70%" }}
                  />
                </div>
              </div>

              {/* Kotlin */}
              <div>
                <label className="block mb-1 font-semibold">Kotlin</label>
                <div className="relative bg-gray-700 h-2 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                    style={{ width: "80%" }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full top-1/2 -translate-y-1/2"
                    style={{ left: "80%" }}
                  />
                </div>
              </div>

              {/* Spring Boot */}
              <div>
                <label className="block mb-1 font-semibold">Spring Boot</label>
                <div className="relative bg-gray-700 h-2 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                    style={{ width: "60%" }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full top-1/2 -translate-y-1/2"
                    style={{ left: "60%" }}
                  />
                </div>
              </div>

              {/* Angular */}
              <div>
                <label className="block mb-1 font-semibold">Angular</label>
                <div className="relative bg-gray-700 h-2 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                    style={{ width: "60%" }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full top-1/2 -translate-y-1/2"
                    style={{ left: "60%" }}
                  />
                </div>
              </div>

              {/* React */}
              <div>
                <label className="block mb-1 font-semibold">React</label>
                <div className="relative bg-gray-700 h-2 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                    style={{ width: "60%" }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full top-1/2 -translate-y-1/2"
                    style={{ left: "60%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* PROJECTS SECTION (optional) */}
      {/*
      <section className="w-full bg-black py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-4 text-center">
                <img
                  src="https://via.placeholder.com/350x200"
                  alt="Project"
                  className="w-full rounded mb-4"
                />
                <h4 className="text-orange-500 font-semibold mb-2">
                  Project Title {i + 1}
                </h4>
                <p>Brief description of the project...</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA / CONTACT SECTION (full-width background) */}
      <section className="w-full py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-500">
            Let’s Create Together
          </h2>
          <p className="mb-6">
            Have a project in mind or just want to hire? Let’s work together to
            create something amazing!
          </p>
          <a
            href="mailto:pintu.jurri@gmail.com"
            className="inline-block bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600"
          >
            Email : pintu.jurri@gmail.com
          </a>
        </div>
      </section>

      {/* FOOTER SECTION (full-width background) */}
      <footer className="w-full bg-gray-900 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="m-0">
            &copy; {new Date().getFullYear()} <strong>Saurabh Jurri</strong>.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
