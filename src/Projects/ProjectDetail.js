import './ProjectDetail.css';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import data from './data';

const ProjectDetail = () => {

    const { id } = useParams();
    let project = data.projects.filter((pro) => (pro.id === id))[0];
    let skills = "";
    for (var i = 0; i < project.skills.length; i++) {
        skills += project.skills[i] + ", ";
    }
    skills = skills.substring(0, skills.length - 2);

    const opts = {
        height: '390',
        width: '640',
    };


    return (
        <div className="Project-Detail">
            <Link to="/projects" className="return-btn"><ion-icon name="arrow-back-circle"></ion-icon></Link>
            <div className="profile-detail-container">
                <div className="project-detail-image" id={'project-detail-' + project.abbr}></div>
                <div className="project-detail-info">
                    <a href={project.url} target="_blank" className="github-logo-container">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>

                    <div className="project-detail-name-container flexline">
                        <div className="project-detail-sub-container">
                            <h3 className="project-detail-intro"> {project.intro} </h3>
                            <h1 className="project-detail-name"> {project.name} </h1>
                        </div>


                    </div>

                    <ul>
                        <li><h3 className="project-time"> Date: <span>{project.time} </span></h3></li>
                        <li><h3 className="project-skills"> Skills: <span>{skills}</span> </h3></li>
                    </ul>
                </div>
            </div>

            {
                project.video &&
                <div className="video-container">
                    <h1 className="demo-title">Demo</h1>
                    <YouTube videoId={project.video} opts={opts} />
                </div>
            }

            <div className="project-detail-content-container">
                {
                    project.details.map((detail, index) => (
                        <div className="project-detail-content" key={project.id + 'detail' + index}>
                            {detail}<br></br><br></br>
                        </div>
                    ))

                }

                <a href={project.url} target="_blank" className="github-logo-container">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
            </div>

        </div>
    );
}

export default ProjectDetail;