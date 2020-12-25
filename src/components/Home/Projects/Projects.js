import React from 'react';
import img1 from '../../../images/do-photo-retouch-and-restoration-heartly.jpg';
import img2 from '../../../images/do-high-level-beauty-retouch-and-jewelry-retouch.jpg';
import img3 from '../../../images/do-premium-photo-editing-and-product-infographic.jpg';
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" className="text-center">
            <h1 className="text-light">MY PROJECTS</h1>
            <p className="span mb-5"></p>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style={{width: "19rem"}}>
                        <img style={{height: "200px"}} src={img1} class="card-img-top img-fluid" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Retouching & Enhancement</h5>
                            <p class="card-text text-secondary">I'm here to provide you with the world-class results, which I can achieve with the quality business.</p>
                            <a href="https://www.fiverr.com/sajibshan555/do-photo-retouch-and-restoration-heartly?fbclid=IwAR2mvoxR-q3d2289NNgJA3WHE_3oYHw1PCFwFl3w4RhNVrZVo_nUltAd6wk" target="_blank" class="btn btn-success w-50 btn-lg">Link</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style={{width: "19rem"}}>
                        <img style={{height: "200px"}} src={img2} class="card-img-top img-fluid" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Beauty & Jewelry Retouch</h5>
                            <p class="card-text text-secondary">Don’t hide your best memories on the shelf of your cabinet, Get Professional Photo Editing</p>
                            <a href="https://www.fiverr.com/sajibshan555/do-high-level-beauty-retouch-and-jewelry-retouch?fbclid=IwAR0bbr2LOAfn5Oqh2FGlfcCFxbhZHOMqsnmf7bcfGwhwWJE2WLMtDsDQg1E" target="_blank" class="btn btn-success w-50 btn-lg">Link</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div class="card" style={{width: "19rem"}}>
                        <img style={{height: "200px"}} src={img3} class="card-img-top img-fluid" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Photo Editing & Infographic</h5>
                            <p class="card-text text-secondary">Image Background will be edited or changed, graphic elements will be included to make Infographic designs.</p>
                            <a href="https://www.fiverr.com/sajibshan555/do-premium-photo-editing-and-product-infographic?fbclid=IwAR3qVu2WToncXiBhZ5pAWWCYbC1aZF8ylWF4-FacZBJcsmYdLS1tfoc5K3s" target="_blank" class="btn btn-success w-50 btn-lg">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;