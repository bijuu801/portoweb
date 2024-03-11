import { Link } from 'react-router-dom';
import PageWrap from '../components/PageWrap';
import Resume from '../components/Resume';
import ContactModal from '../components/ContactModal';
import profilePic from '../assets/profilepic.jpg'
import ResumeMarkers from '../components/ResumeMarkers';

function AboutPage() {
    return (
        <PageWrap
            centerColumnContent={
                <Resume />
            }
            rightColumnContent={
                <ContactModal
                    name="Alexander Olson"
                    imageUrl={profilePic}
                    github={"https://github.com/bijuu801"}
                    linkedin={"https://www.linkedin.com/in/alexander-olson-120542162/"}
                />
            }
            leftColumnContent={
                <ResumeMarkers />
            }
            />
);
}


export default AboutPage;

