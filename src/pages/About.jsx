import { Link } from 'react-router-dom';

function AboutPage() {
    return (
<div className="flex flex-col bg-neutral items-center justify-center min-h-screen px-4 pt-10 sm:pt-20">
<div className="w-full max-w-3xl p-8 mx-auto bg-accent-content rounded shadow-md">
    <h2 className="text-3xl font-bold mb-6 text-center text-secondary">Alexander Olson</h2>
                <p className="text-lg mb-5">
                    Motivated and detail-oriented Computer Science graduate with a strong foundation in software development, web technologies, and customer support. Seeking an entry-level developer position to leverage programming skills, problem-solving abilities, and a passion for creating impactful software solutions.                
                </p>
                <h3 className="text-xl font-bold mb-3 text-secondary">Education</h3>
                <p className="text-m mb-5">
                    <span className="font-semibold">Weber State University, Ogden, UT</span><br />
                    Bachelor of Science in Computer Science (Expected April 2024)<br />
                    Specialized in software development, algorithms, data structures, and web technologies.<br />
                    Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management.<br /><br />
                    
                    <span className="font-semibold">Associate Degrees & Certifications</span><br />
                    Associate of Applied Science in Computer Science, 3.85 GPA (April 2023)<br />
                    Certificate of Proficiency in Programming Essentials, 3.93 GPA (April 2023)               
                </p>
    <section>
        <h3 className="text-xl font-bold mb-3 text-secondary">Professional Experience</h3>
        <div className="mb-4">
            <h4 className="text-lg font-semibold">Presence, Salt Lake City, UT</h4>
            <p className="text-lg">Technical Support Services (Feb 2019 - Present)</p>
            <ul className="list-disc list-inside text-m">
                <li>Provided technical support to mental health professionals, ensuring uninterrupted therapy services.</li>
                <li>Managed an average of 100 support tickets weekly with a 95% customer satisfaction rate.</li>
                <li>Implemented process improvements, increasing department efficiency by 30%.</li>
                <li>Collaborated with product teams, contributing to product enhancements using JavaScript and Salesforce.</li>
            </ul>
        </div>

        <h3 className="text-xl font-bold mb-3 text-secondary">Skills</h3>
        <ul className="list-disc list-inside text-m">
            <li><strong>Programming Languages:</strong> Python, Java, JavaScript, HTML/CSS, SQL</li>
            <li><strong>Software & Tools:</strong> Salesforce, GitHub</li>
            <li><strong>Concepts:</strong> Data Structures, Algorithms, Web Development, Problem Solving</li>
            <li><strong>Systems:</strong> Linux</li>
            <li><strong>Databases:</strong> MySQL</li>
        </ul>

        <h3 className="text-xl font-bold mb-3 text-secondary">Soft Skills</h3>
        <ul className="list-disc list-inside text-m">
            <li>Effective Communication</li>
            <li>Team Collaboration</li>
            <li>Problem Solving</li>
            <li>Customer Service</li>
        </ul>
    </section>

    <div className="mt-6 text-center">
        <a href="./Alexander_Olson_Resume_06_28_23.docx" download="AlexanderOlson_Resume.docx" className="btn btn-primary px-4 py-2 text-white">
            Download A Copy
        </a>
    </div>
</div>
</div>
);
}


export default AboutPage;

