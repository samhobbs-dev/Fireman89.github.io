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

const cfbhDescription = 
`
Want to browse older college football seasons and logos at the same time? Now you can! 
This full stack application is run by Next.js & hosted by Vercel & Supabass, using data 
scraped from public sources via a Python script. 
You to select any season from 1897 to 2022, showing every team and conference with their logo at the time. You can then hover over the team's record and pull up all their games, 
opponents, and scores that season. This app was initially based in React & Spring and hosted on AWS,  
but it has since been migrated. All logos are owned by the schools and are used under Fair Use.
`
const cfbhLink = 'https://cfbhistory.net';
const cfbhProjectLink = 'https://github.com/Fireman89/cfb-history-next';

const merckDescription =
`
Working with Merck, a pharmaceutical company, I efficiently handled more than 40 technical 
support tickets and oversaw the management of certificates, users, and DNS records. I 
automated the transfer and archiving of over 800 Bitbucket repositories to GitHub, 
utilizing Python, batch scripts, and Bitbucket pipelines. Furthermore, I transferred DNS 
records to new IIS cloud servers, redirected them to a Cloudfront load balancer, and 
conducted spoof testing.
`

const merckYears = 'Aug \'23 - Pres'

const tmoDescription = 
`
Last year, T-Mobile commissioned us to help migrate their Digital Orders system from TIBCO 
to Spring. To help with this, I coordinated with other developers 
to ensure that API calls were consistent across both environments via Cucumber- & Java-based testing applications, 
Postman, and local development apps. The provided feedback sped up the migration process as the main development team 
could focus on the fixing inconsistencies between each. Additional contract work included a Python script allowing 
quick, customizable deletion of old GitLab branches and a Slack bot with similar functionality.
`
const tmoYears = 'Oct - Dec \'22'

const hclDescription =
`
As a developer for HCLTech, a global technology consulting company, I've  had the privilege to
help clients with their many diverse technological needs. As of now, I have worked with T-Mobile &
Merck. Outside of this, I led a 10-strong team in the development of an Angular- & Java-based full stack application
for a capstone project.
`
const hclYears = 'Jul \'22 - Pres';
const cfbhImage = 'https://portfolio-app.s3.us-east-2.amazonaws.com/CFB+History.png';

const EntryList: React.FC = () => {
    return(
        <Stack direction="column" padding={1} paddingLeft={2} paddingRight={2} spacing={1} sx={{ maxWidth: "900px", margin: "auto", textAlign: "left" }}>
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                FEATURED
            </Typography>
            <Stack direction="column" spacing={1}>
                <EntryHeader 
                    title="CFBHistory"
                    icon={cfbhIcon}
                    link={cfbhLink}
                    projectLink={cfbhProjectLink}
                />
                <Typography sx={{ fontSize: "16px" }}>
                    {cfbhDescription}
                </Typography>
                <br/>
                {/* <Grid container paddingBottom={1} spacing={1} justifyContent="center">
                    {[aws, react, spring, mysql].map(fwl => (
                        <Grid>
                        <Paper component={Box} display="flex" justifyContent="center" alignItems="center"
                            sx={{ height: "80px", width: "120px", backgroundColor: "#1A2027"}}>
                            <img src={fwl} alt="fwlogo" style={{ maxHeight: "40px", maxWidth: "100px" }}/>
                        </Paper>
                        </Grid>
                    ))}
                </Grid> */}
                <Box justifyContent="center" alignItems="center">
                    <a href={cfbhLink}>
                        <img src={cfbhImage} alt="blockImage" height="555"/>
                    </a>
                </Box>
            </Stack>
                        
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                EXPERIENCE
            </Typography>
            
            <EntryHeader
                title="HCLTech"
                years={hclYears}
            />        
            <Typography sx={{ fontSize: "16px" }}>
                {hclDescription}
            </Typography>

            <EntryHeader
                title="Merck"
                years={merckYears}
            />            
            <Typography sx={{ fontSize: "16px" }}>
                {merckDescription}
            </Typography>

            <EntryHeader
                title="T-Mobile"
                years={tmoYears}
            />            
            <Typography sx={{ fontSize: "16px" }}>
                {tmoDescription}
            </Typography>
            
            <br/>
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                EDUCATION
            </Typography>
            <EntryHeader
                title="Baylor University"
                years="Aug '18 - May '22"
            />
            <Typography sx={{ fontSize: "16px" }}>
                {"Bachelor of Science - Computer Science"}
            </Typography>

            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                SKILLS
            </Typography>
            <FrameworkGrid/>
            <Footer/>
        </Stack>
    );
}

export default EntryList;