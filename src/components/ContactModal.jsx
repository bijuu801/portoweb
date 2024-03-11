import githubIcon from '../assets/github.svg'
import linkedInIcon from '../assets/linkedin.svg'

const ContactModal = ({ name, github, linkedin, imageUrl }) => {
    return (
        <div className='flex flex-col items-center p-2 rounded-lg '>
            <div className="bg-[#f0f4f8] sticky top-10 z-50 rounded-lg p-8 mt-16">
                <h1 className="text-2xl font-bold" style={{ fontFamily: 'CaslonCP' }}>{name}</h1>
                <img src={imageUrl} alt="profile" className="w-36 h-36 rounded-full mt-4 mb-6 ml-2 mr-2" />
                <div className="flex flex-row justify-center space-x-4">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                        <img src={githubIcon} alt="GitHub" className="w-8 h-8" /> {/* Adjust the path as necessary */}
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                        <img src={linkedInIcon} alt="LinkedIn" className="w-7 h-8" /> {/* Adjust the path as necessary */}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactModal;