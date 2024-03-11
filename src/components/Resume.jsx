import React, { useEffect, useState, useRef } from 'react';



const Resume = () => {
    return (
        <div className="flex flex-col bg-neutral items-center justify-start px-4 pt-10 sm:pt-20">
            <div className="w-full max-w-3xl p-8 mx-auto bg-accent-content rounded shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-secondary"></h2>
                <p className="text-lg mb-5">
                    Motivated and detail-oriented Computer Science graduate with a strong foundation in software development, web technologies, and customer support. Seeking an entry-level developer position to leverage programming skills, problem-solving abilities, and a passion for creating impactful software solutions.
                </p>
                <h3 className="text-xl font-bold mb-3 text-secondary">Education</h3>
                <p className="text-m mb-5">
                    <span className="font-semibold">Weber State University, Ogden, UT</span><br />
                    Bachelor of Science in Computer Science (Expected April 2024)<br />
                    Coursework focused on software development, implementation of web design and systems administration.<br />
                    Additional coursework completed at the University of Utah centered on strategic implementation of written, verbal and visual communication.<br /><br />

                    <span className="font-semibold">Associate Degrees & Certifications</span><br />
                    Associate of Applied Science in Computer Science, 3.85 GPA (April 2023)<br />
                    Certificate of Proficiency in Programming Essentials, 3.93 GPA (April 2023)
                </p>
                <section>
                    <h3 className="text-xl font-bold mb-3 text-secondary">Professional Experience</h3>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">PRESENCE - SALT LAKE CITY, UT</h4>
                        <p className="text-lg">Technical Support Services (Feb 2019 - Present)</p>
                        <ul className="list-disc list-inside text-m">
                            <li>Assisting mental health professionals with troubleshooting technical issues and ensuring informative instruction to allow for uninterrupted therapy services.</li>
                            <li>Managed an average of 100 support tickets weekly with a 95% customer satisfaction rate.</li>
                            <li>Implemented process improvements, increasing department efficiency by 30%.</li>
                            <li>Successfully pushing for implementation changes within our department to improve troubleshooting process and efficiency. This includes cross-communication with the product department which requires understanding of JavaScript, Salesforce, and networking to implement changes.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">SALT LAKE COUNTY ELECTIONS DIVISION - SALT LAKE CITY, UT</h4>
                        <p className="text-lg">Elections Clerk (June 2018 - Nov 2018)</p>
                        <ul className="list-disc list-inside text-m">
                            <li>Updating and maintaining voter records in a database that stored all registered voters in Salt Lake County.</li>
                            <li>As part of a 6 person team, scanning and sorting voter ballots while under strict legal scrutiny and time constraints.</li>
                            <li>As part of a 2 person team, adjudicating voter ballots while under legal scrutiny to evaluate voter intent.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">VOX NUTRITION - WEST JORDAN, UT</h4>
                        <p className="text-lg">Printing Operator and Digital Designer (Nov 2015 - Jan 2016)</p>
                        <ul className="list-disc list-inside text-m">
                            <li>Operating several models of specialty printers that created labeling for various bottle and containers.</li>
                            <li>Utilizing Adobe Illustrator to create and manage visual templates at the discretion of 3rd party companies for use in nutritional supplement production.</li>
                        </ul>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-secondary">Community Engagement</h3>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">ML RECORDING</h4>
                        <h3 className="text-md font-semibold">in association with the Utah Arts Alliance (UAA)</h3>
                        <p className="text-lg">Volunteer Mixing Engineer and Event Coordinator</p>
                        <ul className="list-disc list-inside text-m">
                            <li>Curating and planning several local music events with an average of 200+ patrons.</li>
                        </ul>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-secondary">Skills</h3>
                    <ul className="list-disc list-inside text-m">
                        <li><strong>Programming Languages:</strong> Bash, C++, Git, HTML/CSS, Java, Javascript, Max/MSP, MIPS, Pure Data, Python, SQL </li>
                        <li><strong>Software & Tools:</strong> Adobe Illustrator, Ableton Live</li>
                        <li><strong>Concepts:</strong> Data Structures, Algorithms, Web Development, Problem Solving</li>
                        <li><strong>Systems:</strong> ClickUp, Jira, Salesforce, Linux </li>
                        <li><strong>Databases:</strong> MySQL, MongoDB, NoSQL, SQLite </li>
                    </ul>
                </section>

                <div className="mt-6 text-center">
                    <a href="./Alexander_Olson_Resume_06_28_23.docx" download="AlexanderOlson_Resume.docx" className="btn btn-primary px-4 py-2 text-white">
                        Download A Copy
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Resume;

