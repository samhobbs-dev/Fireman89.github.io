import { Box, Stack, Typography } from "@mui/material";
import EntryHeader from "./EntryHeader";
import Footer from "./Footer";

import { projectData } from "../data/portfolioData";

const bodyTextStyle = {
    fontSize: "16px",
    lineHeight: 1.6,
  };

const EntryListProjects: React.FC = () => {
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
          <Stack direction="column" spacing={2}>
            {projectData.map((project) => (
                <Box key={project.title}>
                    <EntryHeader
                    title={project.title}
                    icon={project.icon}
                    link={project.link}
                    projectLink={project.projectLink}
                    projectLinks={project.projectLinks}
                    />
                    <Typography sx={bodyTextStyle}>{project.description}</Typography>
        
                    <Box display="flex" justifyContent="center" alignItems="center" paddingTop={2}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Box
                        component="img"
                        src={project.image}
                        alt={` `}
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
        <Footer />
      </Stack>
    );
}

export default EntryListProjects;