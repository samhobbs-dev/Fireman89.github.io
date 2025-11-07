import { Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const frameworkList = ['Spring', 'React', 'Node.js', 'Next.js', 'AngularJS', 'MySQL', 
    'AWS', 'Azure', 'EC2', 'S3', 'CodePipeline', 'Supabase', 'Vercel', 'Prisma', 'C/C++', 'Java SE', 
    'Python', 'HTML5', 'CSS', 'JavaScript', 'TypeScript', 
    'Cucumber', 'Docker', 'Scrum', 'Git', 'Kubernetes',
    'CI/CD', 'RESTful APIs', 'PostgreSQL', 'Jenkins',
    'C#', '.NET'
]

const FrameworkGrid: React.FC = () => {
    const frameworks = frameworkList.sort();
    return (
        <Grid container spacing={1} justifyContent={"center"}>
            {frameworks.map(f =>
                <Grid>
                    <Paper component={Stack} justifyContent="center" sx={{ textAlign: "center", height: "50px", width: "100px", fontSize: "15px", color: "lightblue", backgroundColor: "#1A2027"}}>
                        {f}
                    </Paper>
                </Grid>
            )}
        </Grid>
    );
}

export default FrameworkGrid;