import './ProjectDetail.css';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import data from './data';

const ProjectDetail = () => {

    const { id } = useParams();
    let project = data.projects.filter((pro) => (pro.id === id))[0];
    let skills = "";
    for (var i = 0; i < project.skills.length; i++) {
        skills += project.skills[i] + ", ";
    }
    skills = skills.substring(0, skills.length - 2);

    return (
        <div className="Project-Detail">
            <Link to="/projects" className="return-btn"><ion-icon name="arrow-back-circle"></ion-icon></Link>
            <div className="profile-detail-container">
                <div className="project-detail-image" id={'project-detail-' + project.abbr}></div>
                <div className="project-detail-info">

                    <div className="project-detail-name-container flexline">
                        <div className="project-detail-sub-container">
                            <h3 className="project-detail-intro"> {project.intro} </h3>
                            <h1 className="project-detail-name"> {project.name} </h1>
                        </div>

                        <a href="https://github.com/schen-Oli" className="project-github" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                    </div>

                    <ul>
                        <li><h3 className="project-time"> Date: <span>{project.time} </span></h3></li>
                        <li><h3 className="project-skills"> Skills: <span>{skills}</span> </h3></li>
                    </ul>
                    <h4 className="project-detail-detail"> {project.details} </h4>

                </div>
            </div>
           
        </div>
    );
}

export default ProjectDetail;