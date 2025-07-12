import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Internship";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Focus from "./components/Focus";
import SocialSidebar from "./components/SocialSidebar";
import ExperienceContainer from "./components/ExperienceContainer";
import Education from "./components/Education";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseSection from "./components/CourseSection";

const App = () => (
  <div className="min-vh-100">
    <Navbar />
    <SocialSidebar />
    <main className="py-5">
      <Profile />
      <Skills />
      <Education />
      {/* <Focus /> */}
      <ExperienceContainer />
      <Certifications />
      <CourseSection />
      <Projects />
    </main>
    <Footer />
  </div>
);

export default App;
