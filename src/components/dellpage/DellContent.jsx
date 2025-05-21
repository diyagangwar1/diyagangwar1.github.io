import React from 'react';
import '../../styles/DellContent.css';

const DellContent = () => {
    return (
        <div className='dell-content-container'>

            <div className='processhighlights'>PROCESS HIGHLIGHTS</div>

            <div className='overview'>
                <div className='title'>Internship overview</div>
                <div className='table'>
                    <div className='row'>
                        <div className='column'>
                            <div className='section-title'>Timeline</div>
                            <div className='section-content'>May – Aug 2024</div>
                        </div>
                        <div className='column'>
                            <div className='section-title'>Disciplines</div>
                            <div className='section-content'>
                                AI Infrastructure<br />
                                Compliance Automation<br />
                                Human-Centered Design
                            </div>
                        </div>
                        <div className='column'>
                            <div className='section-title'>Responsibilities</div>
                            <div className='section-content'>
                                Stakeholder Research<br />
                                LLM Architecture & Prototyping<br />
                                Internal Deployment
                            </div>
                        </div>
                        <div className='column'>
                            <div className='section-title'>Tools</div>
                            <div className='section-content'>
                                Hugging Face<br />
                                Qdrant<br />
                                MongoDB<br />
                                Docker<br />
                                LLaMa.cpp
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='processoverview'>
                <div className='title'>PROCESS OVERVIEW</div>
                <div className='title-divider'></div>
                <p>
                    During my summer internship at Dell's Infrastructure Solutions Group, I spearheaded a project to reimagine security compliance workflows across 39 internal storage teams. The initiative focused on leveraging AI to reduce manual handoffs and streamline compliance processes that were causing delays and inconsistencies.
                    
                    <br/><br/><span className='highlight'>Key Technical Execution:</span><br/>
                    I designed and deployed an AI-powered chatbot using <span className='highlight'>Mistral AI</span> and <span className='highlight'>Hugging Face's local LLMs</span>, optimizing inference efficiency with <span className='highlight'>LLaMa C++</span> for low-latency performance. To unify fragmented documentation, I implemented a <span className='highlight'>Qdrant vector database</span> for semantic search, enabling engineers to retrieve compliance guidelines using natural language queries. The system integrated with <span className='highlight'>MongoDB</span> to dynamically centralize documentation updates.
                    
                    <br/><br/><span className='highlight'>Human-Centered Design Approach:</span><br/>
                    Through empathy mapping and stakeholder interviews, I identified pain points in legacy workflows, including redundant approvals and inconsistent documentation access. This research directly informed the chatbot's architecture - I added a context-aware validation layer to reduce false positives in compliance checks by 22%.
                    
                    <br/><br/><span className='highlight'>Deployment & Impact:</span><br/>
                    After iterative testing, the solution reduced average issue resolution time from 48 hours to 6 hours by automating 85% of routine compliance validations. By standardizing workflows across all teams, we eliminated 15-20% of redundant tasks (~200 engineering hours saved monthly).
                </p>
            </div>

            <div className='reflection'>REFLECTION</div>
            <div className='reflection-divider'></div>

            <div className='experience_title'>The Experience</div>
            <div className='experience_content'>
                <p>This internship marked the first time I applied human-centered design techniques within a technical engineering context—and it fundamentally shaped how I now approach problem solving in tech. Although our team was initially assigned a different project, our manager encouraged us to explore open-ended problems we felt passionate about. After talking to dozens of engineers, we uncovered a recurring issue: security compliance workflows were fragmented, tedious, and slowing everyone down.</p>

                <p>That discovery led us to re-scope our summer toward building an internal AI assistant. I dove into full-stack development to bring the solution to life—from designing the system architecture and backend API integrations, to building out a custom vector search stack using Qdrant and MongoDB, and running local inference with Hugging Face + LLaMa.cpp. I also implemented a secure frontend interface and developed a scalable deployment pipeline using Docker and Azure.</p>

                <p>Throughout the process, I learned how to own a product from insight to deployment. I ran stakeholder interviews, tested iteratively with live teams, and presented to senior leadership for feedback and buy-in. This project taught me not only how to build an AI tool that works—but how to build one that people actually use. It was a summer of creative freedom, deep learning, and real-world impact.</p>
            </div>
        </div>
    )
}

export default DellContent;