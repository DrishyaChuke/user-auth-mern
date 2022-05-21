import React from 'react';

const About = () => {
    return (
        <div>
            <section id="about" className="pb-5">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                        <img src="/assets/cv.jpg" alt="cv" className='w-75 border border-dark rounded-end'/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bolder mb-0 text-dark">About Me</h3>
                            <hr className="text-primary"/>
                            <p className="lead text-dark">My name is Drishya Lal Chuke. I am a <strong>Web Designer</strong> and <strong>Web Developer</strong>.I'm a team-player, creative thinker, inquisitive, dedicated towards my goals and have a great enthusiasm for the profession. I’m honest regarding my ability to code and I’m problem solver so I get the work done.Still learning to be a better developer.</p>
                            <div className='buttons d-flex justify-content-center'>
                                <button class="btn btn-outline-dark me-4 px-4 py-2 rounded-pill">Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
