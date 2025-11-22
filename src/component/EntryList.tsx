import { Box, Stack, Typography } from "@mui/material";
import EntryHeader from "./EntryHeader";
import cfbhIcon from '../image/cfbhicon.png'
import FrameworkGrid from "./FrameworkGrid";
import Footer from "./Footer";

import { experienceData, featuredProjectData } from "../data/portfolioData";



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
          {featuredProjectData && (
              <Box key={featuredProjectData.title}>
                  <EntryHeader
                      title={featuredProjectData.title}
                      icon={cfbhIcon}
                      link={featuredProjectData.link}
                      projectLink={featuredProjectData.projectLink}
                  />
                  <Typography sx={bodyTextStyle}>{featuredProjectData.description}</Typography>

                  <Box display="flex" justifyContent="center" alignItems="center" paddingTop={2}>
                      <a href={featuredProjectData.link} target="_blank" rel="noopener noreferrer">
                          <Box
                              component="img"
                              src={featuredProjectData.image}
                              alt={`${featuredProjectData.title} preview`}
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
          )}
            <Box width='95%' textAlign="right">
              <Typography
                component="a"
                href="projects"
                color={"#39ff14"}>
                  See more projects &gt;&gt;
              </Typography>
            </Box>
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