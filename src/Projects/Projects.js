import data from './data';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    let projects = data.projects;

    return (
        <div className="Projects">
            <div className="projects-container">
                {
                    projects.map((project) => (
                        <Link to={`/projects/${project.id}`} className="project-container" key={'project' + project.id}>
                            <div className="project-pic" id={'project-' + project.abbr}></div>
                            <div className="project-text-container">
                                <h2 className="project-title"> {project.name} </h2>
                                <h4 className="project-time"> {project.time} </h4>
                                <h3 className="project-intro"> {project.intro} </h3>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;