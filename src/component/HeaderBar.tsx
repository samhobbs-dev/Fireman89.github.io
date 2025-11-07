import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import linkedin from '../image/linkedin.png'
import githubIcon from '../image/github-mark-white.svg'

const HeaderBar: React.FC = () => {
    return (
        <div>
    <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ margin: "0 auto", width: "90%", justifyContent: "space-between" }}>
            {/* Left side: Name */}
            <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{ fontWeight: "bold", cursor: "pointer", color: "white", textDecoration: "none" }}
            >
                Sam Hobbs
            </Typography>

            {/* Right side: Links + Icons */}
            <Stack direction="row" spacing={3} alignItems="center">
            <Typography
                component="a"
                href="projects"
                sx={{ color: "white", textDecoration: "none" }}
            >
                Projects
            </Typography>
            <Typography
                component="a"
                href="about"
                sx={{ color: "white", textDecoration: "none" }}
            >
                About
            </Typography>
            <Typography
                component="a"
                href="photos"
                sx={{ color: "white", textDecoration: "none" }}
            >
                Photos
            </Typography>

            {/* Social Icons */}
            <IconButton
                href="https://www.linkedin.com/in/samuel-hobbs-bu/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white" }}
            >
                <img src={linkedin} alt="linkedin" width="30" height="30"/>
            </IconButton>
            <IconButton
                href="https://github.com/samhobbs-dev"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white" }}
            >
                <img src={githubIcon} alt="github" style={{ maxHeight: "30px" }}/>
            </IconButton>
            </Stack>
        </Toolbar>
        </AppBar>
        <Toolbar/>  {/* Spacer to push content below AppBar */}
        </div>
    );
}

export default HeaderBar;