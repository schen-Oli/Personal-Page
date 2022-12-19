import { useParams } from "react-router-dom";
import data from './data';

const ProjectDetail = () => {
    const { id } = useParams();
    let project = data.projects.filter((pro)=>(pro.id === id))[0];

    console.log(project);
    return ( 
        <div className="Project-Detail">
            now show details of { id }
        </div>
     );
}
 
export default ProjectDetail;