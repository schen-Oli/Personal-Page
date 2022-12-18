import data from './data';

const Experiences = () => {

    return ( 
        <div className="experiences">
            {
                data.sde_internships.map((internship) => (
                    <div className="internship" key = {'sde-internship' + internship.id}>
                        <h2>{internship.company}</h2>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Experiences;