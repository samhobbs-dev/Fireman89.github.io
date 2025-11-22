import { Box, Stack } from "@mui/material";
import githubIcon from '../image/github-mark-white.svg'

interface Props {
    title: string;
    icon?: string;
    link?: string;
    projectLink?: string;
    projectLinks?: string[];
    years?: string;
}

const EntryHeader: React.FC<Props> = ({ title, icon, link, projectLink, projectLinks, years }) => {
    return (
        <Stack direction="row" spacing={1} sx={{ height: "45px", alignItems: "center" }}>
            {icon ?
                <Box sx={{ display: "flex"}}>
                    <img src={icon} alt="icon" style={{ maxHeight: "40px" }}/> 
                </Box> : ''
            }
            <Box sx={{ height: "32px", fontSize: "20px", display: "flex", alignItems: "center" }}>
                {link ? 
                <a href={link} style={{color: "white"}} target="_blank" rel="noopener noreferrer">
                    {title}
                </a> : title}
            </Box>            
            <hr style={{ flexGrow: 1, justifyContent: "center", height: "1px", backgroundColor: "white", display: "flex" }}/>              
                 
            {projectLink ? 
                (<Box sx={{ display: "flex" }}>
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="github" style={{ maxHeight: "30px" }}/>
                </a>          
                </Box>) : ''
            }                       
            {projectLinks ? 
                (projectLinks.map((pl) =>
                (<Box sx={{ display: "flex" }}>
                    <a href={pl} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="github" style={{ maxHeight: "30px" }}/>
                </a>          
                </Box>))) : ''
            }                    
            {years ?
                (
                <Box sx={{ height: "26px", fontSize: "18px", display: "flex", alignItems: "center"}}>    
                    {years}   
                </Box>
                ) : ''
            }
        </Stack>
    );
}

export default EntryHeader;