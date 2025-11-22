import cfbhIcon from '../image/cfbhicon.png'

export const featuredProjectData = {
    title: 'CFBHistory.net',
    description: `
        Want to browse older college football seasons and logos at the same time? Now you can! 
        This full stack application is run by Next.js & hosted by Vercel & Supabase, using data 
        scraped from public sources via a Python script. 
        You to select any season from 1897 to 2024, showing every team and conference with their logo at the time. You can then hover over the team's record and pull up all their games, 
        opponents, and scores that season. This app was initially based in React & Spring and hosted on AWS,  
        but it has since been migrated. All logos are owned by the schools and are used under Fair Use.
        `,
    link: 'https://cfbhistory.net',
    projectLink: 'https://github.com/Fireman89/cfb-history-next',
    image: 'https://portfolio-app.s3.us-east-2.amazonaws.com/cfbh-fs9-shrunken-fs8.png',
}


export const projectData = [
    {
        title: 'CFBHistory.net',
        description: `
            Want to browse older college football seasons and logos at the same time? Now you can! 
            This full stack application is run by Next.js & hosted by Vercel & Supabase, using data 
            scraped from public sources via a Python script. 
            You to select any season from 1897 to 2024, showing every team and conference with their logo at the time. You can then hover over the team's record and pull up all their games, 
            opponents, and scores that season. This app was initially based in React & Spring and hosted on AWS,  
            but it has since been migrated. All logos are owned by the schools and are used under Fair Use.
            `,
        link: 'https://cfbhistory.net',
        projectLink: 'https://github.com/Fireman89/cfb-history-next',
        image: 'https://portfolio-app.s3.us-east-2.amazonaws.com/cfbh-fs9-shrunken-fs8.png',
        icon: cfbhIcon
    },
    {
        title: 'Commit Your Code Cohort Project',
        description: `
            In the summer of 2025, I had the privilege of working with 6? other teammates on a cohort project
            for Danny Thompson's Commit Your Code Discord group.
            My contributions were specifically implement billing and maintenance
ticketing while enforcing strict entity typing to make application more robust and help other developers
        `,
        projectLinks: [
            'https://github.com/dsd-cohort-003/SSCoworkingSpaceFE',
            'https://github.com/dsd-cohort-003/SSCoworkingSpaceBE'
        ]
    },
    {
        title: 'Apogee Senior Capstone',
        description: `
            For my final semester at Baylor University, I worked on a team of ten to build and deploy a capstone platform,
            where users could customize the site and their capstone projects. 
            As lead troubleshooter, my contributions were Resolved 80-90% of bugs as lead troubleshooter and implemented code coverage, functional testing, and unit testing,
ensuring smooth user experience and performance
        `,
        projectLink: 'https://github.com/samhobbs-dev/Apogee-Senior-Capstone',
    }
]

export const experienceData = [
    {
        title: 'HCLTech',
        description: `
            As a developer for HCLTech, a global technology consulting company, I've  had the privilege to
            help clients with their many diverse technological needs. As of now, I have worked with T-Mobile &
            Merck. Outside of this, I led a 10-strong team in the development of an Angular- & Java-based full stack application
            for a capstone project.
            `,
        years: 'Jul \'22 - Apr \'25',
    },
    {
        title: 'Merck',
        description: `
            Working with Merck, a pharmaceutical company, I efficiently handled more than 40 technical 
            support tickets and oversaw the management of certificates, users, and DNS records. I 
            automated the transfer and archiving of over 800 Bitbucket repositories to GitHub, 
            utilizing Python, batch scripts, and Bitbucket pipelines. Furthermore, I transferred DNS 
            records to new IIS cloud servers, redirected them to a Cloudfront load balancer, and 
            conducted spoof testing.
            `,
        years: 'Aug \'23 - Mar \'25',
    },
    {
        title: 'T-Mobile',
        description: `
            Last year, T-Mobile commissioned us to help migrate their Digital Orders system from TIBCO 
            to Spring. To help with this, I coordinated with other developers 
            to ensure that API calls were consistent across both environments via Cucumber- & Java-based testing applications, 
            Postman, and local development apps. The provided feedback sped up the migration process as the main development team 
            could focus on the fixing inconsistencies between each. Additional contract work included a Python script allowing 
            quick, customizable deletion of old GitLab branches and a Slack bot with similar functionality.
            `,
        years: 'Oct - Dec \'22',
    }
]
