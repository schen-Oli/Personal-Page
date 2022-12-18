import data from './data';
import './Experiences.css';

const Experiences = () => {

    return (
        <div className="Experiences">
            <h1> Internships </h1>
            <div className="internships-container">
                {
                    data.sde_internships.map((internship) => (
                        <div className="internship-container" key={'sde-internship' + internship.id}>
                            <div className="info">
                                <div className="flexline">
                                    <div>
                                        <h2 className='company-name'> {internship.company}</h2>
                                        <h3 className="role">{internship.title}</h3>
                                        <h4 className="internship-location">{internship.location}</h4>
                                        <h4 className="internship-time">{internship.time}</h4>
                                    </div>

                                    <div className="company-logo" id={internship.abbr}></div>
                                </div>

                                <h4 className="internship-detail">
                                    <ul>
                                        {internship.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                </h4>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h1> Volunteer </h1>
        </div>
    );
}

export default Experiences;