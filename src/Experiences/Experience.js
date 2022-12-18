import data from './data';
import './Experiences.css';

const Experiences = () => {

    let volunteers = data.volunteer;
    let otherInternships = data.other_internships;

    let openIhfPage = () => {
        window.open(volunteers[0].url, '_blank');
    }
    return (
        <div className="Experiences">
            <h1 id='firstExperiencesH1'> Internships </h1>
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

                                <div className="internship-detail">
                                    <h4>
                                        <ul>
                                            {internship.details.map((detail) => (
                                                <li key={detail}>{detail}</li>
                                            ))}
                                        </ul>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h1> Volunteer </h1>
            <div className="volunteers-container">
                {
                    volunteers.map((volunteer) => (
                        <div className="volunteer-container flexline" key={'volunteer' + volunteer.id} onClick={openIhfPage}>
                            <div className="company-logo" id="ihf"></div>
                            <div className="volunteer-details">
                                <h2 className="volunteer-company">{volunteer.company}</h2>
                                <h3 className="volunteer-role">{volunteer.role}</h3>
                                <div className="flexline">
                                    <h4 className="volunteer-loc">{volunteer.location}</h4>
                                    <h4 className="volunteer-time">{volunteer.time}</h4>
                                </div>
                                <h4 className="volunteer-details">{volunteer.details}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h1> Other Experiences </h1>
            <div className="others-container">
            {
                    otherInternships.map((internship) => (
                        <div className="internship-container" key={'other-internship' + internship.id}>
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

                                <div className="internship-detail">
                                    <h4>
                                        <ul>
                                            {internship.details.map((detail) => (
                                                <li key={detail}>{detail}</li>
                                            ))}
                                        </ul>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Experiences;