import React from 'react';
import '../../styles/MimenteContent.css';

const MimenteContent = () => {
    return (
        <div className='mimente-content-container'>
            <div className='processhighlights'>PROCESS HIGHLIGHTS</div>

            <div className='overview'>
                <div className='title'>Project Overview</div>
                <div className='table'>
                    <div className='row'>
                        <div className='column'>
                            <div className='section-title'>Timeline</div>
                            <div className='section-content'>Jan – May 2024</div>
                        </div>
                        <div className='column'>
                            <div className='section-title'>Disciplines</div>
                            <div className='section-content'>
                                Human-Centered Design<br />
                                User Research<br />
                                Service Design
                            </div>
                        </div>
                        <div className='column'>
                            <div className='section-title'>Responsibilities</div>
                            <div className='section-content'>
                                User Interviews<br />
                                Prototype Design<br />
                                Stakeholder Engagement
                            </div>
                        </div>
                        <div className='column'>
                            <div className='section-title'>Tools</div>
                            <div className='section-content'>
                                Figma<br />
                                Miro<br />
                                Adobe XD<br />
                                Google Forms<br />
                                Zoom
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='processoverview'>
                <div className='title'>PROCESS OVERVIEW</div>
                <div className='title-divider'></div>
                <p>
                    Mimente emerged from a deep dive into the mental health challenges faced by Latinx students in public schools. Through extensive research and community engagement, we identified a critical gap in culturally appropriate mental health resources and support systems.

                    <br/><br/><span className='highlight'>Research & Discovery:</span><br/>
                    We conducted <span className='highlight'>30+ interviews</span> with students, parents, teachers, and mental health professionals to understand the unique challenges faced by Latinx students. Key findings revealed cultural barriers to seeking help, language accessibility issues, and a need for community-based support systems. We used <span className='highlight'>empathy mapping</span> and <span className='highlight'>journey mapping</span> to visualize the student experience and identify intervention points.

                    <br/><br/><span className='highlight'>Design & Development:</span><br/>
                    The solution evolved through multiple iterations, incorporating feedback from our user community. We designed a <span className='highlight'>bilingual platform</span> that connects students with culturally competent counselors and peer support groups. The system includes a <span className='highlight'>mobile app</span> for students, a <span className='highlight'>web portal</span> for counselors, and a <span className='highlight'>resource hub</span> for parents and teachers.

                    <br/><br/><span className='highlight'>Implementation & Impact:</span><br/>
                    After piloting the program in three schools, we saw a <span className='highlight'>40% increase</span> in mental health service utilization among Latinx students. The platform facilitated over 200 student-counselor connections in its first semester, with 85% of users reporting improved access to culturally relevant support.
                </p>
            </div>

            <div className='reflection'>REFLECTION</div>
            <div className='reflection-divider'></div>
            <div className='experience'>
                <div className='experience_title'>The Experience</div>
                <div className='experience_content'>
                    <p>This project taught me the importance of cultural sensitivity in design. As someone from a different cultural background, I had to actively work to understand and respect the unique perspectives of the Latinx community. The most valuable lesson was learning to design with, rather than for, the community we were serving.</p>

                    <p>The process of building trust with the community was both challenging and rewarding. We spent weeks building relationships with school administrators, parents, and students before even beginning the design process. This groundwork proved crucial in creating a solution that truly met the needs of its users.</p>

                    <p>What stands out most is the impact of community-driven design. By involving stakeholders at every stage, we created a system that not only addressed immediate needs but also fostered a sustainable support network. The project reinforced my belief in the power of human-centered design to create meaningful change in people's lives.</p>
                </div>
            </div>
        </div>
    );
};

export default MimenteContent; 