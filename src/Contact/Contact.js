import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-link-container">
                    <a href="https://github.com/schen-Oli" className="github" target="_blank"><ion-icon name="logo-github"></ion-icon></a>  
                </div>

                <div className="contact-link-container">
                    <a href="https://linkedin.com/in/oli-schen" className="linkedin" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                </div>

                <div className="contact-link-container">
                    <a href="mailto:olichen97@gmail.com" className="email"><ion-icon name="mail-outline"></ion-icon></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;