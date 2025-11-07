import { Box, Paper, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import EntryHeader from "./EntryHeader";
import cfbhIcon from '../image/cfbhicon.png'
import FrameworkGrid from "./FrameworkGrid";
import Footer from "./Footer";

import aws from "../image/aws.svg"
import mysql from "../image/mysql.svg"
import python from "../image/python.svg"
import react from "../image/react.svg"
import spring from "../image/spring.svg"
import { experienceData, projectData } from "../data/portfolioData";



const sectionTitleStyle = {
    color: "lightblue",
    fontSize: "24px",
    fontFamily: "Courier New",
    fontWeight: "bold",
    mb: 1.5,
  };
  
  const bodyTextStyle = {
    fontSize: "16px",
    lineHeight: 1.6,
  };

const EntryList: React.FC = () => {
    return(
        <Stack
        direction="column"
        spacing={4}
        sx={{
          maxWidth: "900px",
          margin: "auto",
          px: 2,
          textAlign: "left",
        }}
      >
        {/* FEATURED SECTION */}
        <Box>
          <Typography sx={sectionTitleStyle}>FEATURED</Typography>
          <Stack direction="column" spacing={2}>
            {projectData.map((project) => (
                <Box key={project.title}>
                    <EntryHeader
                    title={project.title}
                    icon={cfbhIcon}
                    link={project.link}
                    projectLink={project.projectLink}
                    />
                    <Typography sx={bodyTextStyle}>{project.description}</Typography>
        
                    <Box display="flex" justifyContent="center" alignItems="center" paddingTop={2}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Box
                        component="img"
                        src={project.image}
                        alt={`${project.title} preview`}
                        sx={{
                            width: "100%",
                            maxWidth: "800px",
                            borderRadius: 1,
                            boxShadow: 2,
                        }}
                        />
                    </a>
                    </Box>
                </Box>
            ))}
          </Stack>
        </Box>
  
        {/* EXPERIENCE SECTION */}
        <Box>
          <Typography sx={sectionTitleStyle}>EXPERIENCE</Typography>
          <Stack spacing={2}>
            {experienceData.map((job) => (
                <Box key={job.title}>
                    <EntryHeader title={job.title} years={job.years} />
                    <Typography sx={bodyTextStyle}>{job.description}</Typography>
                </Box>
            ))}
          </Stack>
        </Box>
  
        {/* EDUCATION SECTION */}
        <Box>
          <Typography sx={sectionTitleStyle}>EDUCATION</Typography>
          <EntryHeader title="Baylor University" years="Aug '18 - May '22" />
          <Typography sx={bodyTextStyle}>
            Bachelor of Science – Computer Science
          </Typography>
        </Box>
  
        {/* SKILLS SECTION */}
        <Box>
          <Typography sx={sectionTitleStyle}>SKILLS</Typography>
          <FrameworkGrid />
        </Box>
  
        <Footer />
      </Stack>
    );
}

export default EntryList;