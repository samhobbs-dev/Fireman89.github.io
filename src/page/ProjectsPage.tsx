import { Typography } from "@mui/material";
import EntryListProjects from "../component/EntryListProjects";

const ProjectsPage: React.FC = () => {
  return (
      <>
        <Typography fontSize={"40px"} sx={{ textAlign: "center", fontFamily: "Courier New", whiteSpace: "nowrap"}}>
          Projects
        </Typography>
          <EntryListProjects/>
      </>
  );
};
export default ProjectsPage;