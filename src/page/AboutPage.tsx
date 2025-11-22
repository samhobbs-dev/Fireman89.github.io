import { Typography } from "@mui/material";
import Footer from "../component/Footer";

const AboutPage: React.FC = () => {
  return (
    <>
  <Typography fontSize={"40px"} sx={{ textAlign: "center", fontFamily: "Courier New", whiteSpace: "nowrap"}}>
    About
  </Typography>
        <Typography>
        Hello, I am an impact-driven software engineer with a background in full stack applications and cloud computing. I am skilled with AWS, Java, React, Python, Spring, and more. I've worked with the consulting firm HCLTech and deployed my own websites, such as CFBHistory.net.

Working with HCLTech, I helped migrate T-Mobile's Digital Order system to Spring by using Postman and Cucumber for unit tests to ensure a one-to-one migration for each step in a processed order. With my second client, Merck, I migrated 800+ .NET applications from Bitbucket to GitHub and their CI/CD pipelines from Jenkins to GitHub actions. Mostly tackling this solo, I used this experience to help expedite this migration process with other team members.

With 3 years of experience delivering software solutions to global enterprise clients, I am actively pursuing new opportunities to grow my technical and communication skills in fast-paced, agile environments.
        </Typography>
        <Footer/>
        </>
    );
}
export default AboutPage;