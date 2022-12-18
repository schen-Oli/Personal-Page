import data from "./data";
import './Education.css';

const Education = () => {

    let educations = data.education;
    let tests = data.scores;
    let skills = data.skills;

    return (
        <div className="Education">
            <h1 id="edu-first-title">Education</h1>
            <div className="educations-container">
                {educations.map((education) => (
                    <div className="school-container" key={'school' + education.id}>
                        <div className="basic-info-container">
                            <div className="logo" id={education.abbr}></div>
                            <div className="school-info">
                                <div className="school-name">
                                    <h3> {education.school} </h3>
                                </div>
                                <div className="major">
                                    <h4>{education.major}</h4>
                                </div>
                                <div className="school-time">
                                    <h4>{education.time}</h4>
                                </div>
                                <div className="gpa">
                                    <h4>GPA: {education.gpa}</h4>
                                </div>
                            </div>
                        </div>

                        <h4 className="courses-container">
                            <ul>
                            {education.courses.map((course) => (
                                <li key={course}>{course}</li>
                            ))}
                            </ul>
                        </h4>
                    </div>

                ))}
            </div>
            <hr></hr>

            <h1>Skills</h1>
            <div className="skill-container">
                <h3>Programming Languages:</h3>
                <h4>{skills.Languages}</h4>
                <h3>Frameworks:</h3>
                <h4>{skills.Frameworks}</h4>
                <h3>Tools:</h3>
                <h4> {skills.Tools}</h4>
            </div>
            <hr></hr>

            <h1>Test Scores</h1>
            <div className="tests-container">
                {
                    tests.map((test) => (
                        <div className="test-container" key={'test' + test.id}>
                            <h3 className="test-name"> {test.name} </h3>
                            <h4 className="test-date"> {test.date} </h4>
                            <h4 className="test-total"> {test.total} </h4>
                            {
                                test.components.map((component) => (
                                    <h4 key={component}> {component} </h4>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Education;