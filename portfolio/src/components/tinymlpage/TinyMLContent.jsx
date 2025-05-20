import React from 'react';
import '../../styles/TinyMLContent.css';

const TinyMLContent = () => {
    return (
        <div className='tinyml-content-container'>
            <div className='processhighlights'>PROCESS HIGHLIGHTS</div>

            <div className='overview'>
                <div className='title'>Research Overview</div>
                <div className='table'>
                    <div className='row'>
                        <div className='column'>
                            <div className='section-title'>Timeline</div>
                            <div className='section-content'>Aug 2023 – Present</div>
                        </div>
                        <div className='column'>
                            <div className='section-title'>Disciplines</div>
                            <div className='section-content'>
                                Embedded Systems<br />
                                Machine Learning<br />
                                Sustainable Computing
                            </div>
                        </div>
                        <div className='column'>
                            <div className='section-title'>Responsibilities</div>
                            <div className='section-content'>
                                System Architecture<br />
                                Model Optimization<br />
                                Hardware Integration
                            </div>
                        </div>
                        <div className='column'>
                            <div className='section-title'>Tools</div>
                            <div className='section-content'>
                                TensorFlow Lite<br />
                                ESP32<br />
                                Arduino<br />
                                Python<br />
                                C++
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='processoverview'>
                <div className='title'>PROCESS OVERVIEW</div>
                <div className='title-divider'></div>
                <p>
                    This research project explores the intersection of sustainable computing and edge AI, focusing on developing reliable face detection systems for solar-powered IoT devices. The challenge lies in maintaining model accuracy while operating under intermittent power conditions typical of energy-harvesting systems.

                    <br/><br/><span className='highlight'>Technical Innovation:</span><br/>
                    We developed a novel approach to handle power interruptions by implementing a <span className='highlight'>checkpointing system</span> that preserves model state during power cycles. The system uses <span className='highlight'>TensorFlow Lite</span> for model optimization and custom <span className='highlight'>C++ firmware</span> for efficient power management. We achieved a 40% reduction in energy consumption while maintaining 95% of the original model's accuracy.

                    <br/><br/><span className='highlight'>Hardware Implementation:</span><br/>
                    The system runs on an <span className='highlight'>ESP32 microcontroller</span> with a custom power management circuit that includes supercapacitors for energy buffering. We designed a modular architecture that separates the ML pipeline into distinct stages, allowing for graceful degradation during power interruptions.

                    <br/><br/><span className='highlight'>Impact & Applications:</span><br/>
                    This work has significant implications for sustainable IoT applications, particularly in remote monitoring and environmental sensing. The system can operate indefinitely on solar power, making it ideal for applications in resource-constrained environments where reliable power sources are unavailable.
                </p>
            </div>

            <div className='reflection'>REFLECTION</div>
            <div className='reflection-divider'></div>
            <div className='experience'>
                <div className='experience_title'>The Experience</div>
                <div className='experience_content'>
                    <p>This research project has been a fascinating journey into the world of embedded systems and sustainable computing. Starting with a background in software development, I had to quickly adapt to the challenges of hardware integration and low-level programming. The most rewarding aspect has been seeing theoretical concepts come to life in a physical system that can operate independently of traditional power sources.</p>

                    <p>The project required a deep understanding of both machine learning and embedded systems. I spent countless hours optimizing the model for the ESP32's limited resources, learning to balance accuracy with energy efficiency. The breakthrough came when we developed the checkpointing system, which allowed us to maintain model state across power cycles without significant performance degradation.</p>

                    <p>What I've learned extends far beyond technical skills. This project taught me the importance of interdisciplinary thinking—combining knowledge from computer architecture, machine learning, and power electronics to create a system greater than the sum of its parts. It's been particularly rewarding to work on technology that could enable sustainable computing solutions in developing regions and remote environments.</p>
                </div>
            </div>
        </div>
    );
};

export default TinyMLContent; 