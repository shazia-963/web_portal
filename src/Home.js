
import { Link } from "react-router-dom";

import "./Home.css";
import "./Home.js";
// import portal from "./Images/plan.png";
// import consult from "./Images/consult.png";
// import webportal from "./Images/web portal.png";
import React from "react";
import "./SignUp.js";


function Home() {

    return (
        <div className="page">

            <div className="Start" >
                <h5>Web Portal Development</h5>
                <div className="Links">
                    <Link to="/login"><h6>Login here</h6></Link>
                    <Link to="/signUp"><h6>SignUp here</h6></Link>
                </div>
            </div>

            <div  >
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('./Images/web portal.png')}  class="responsive" height={900} alt=""/>
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/consult.png')}  class="responsive"  width={1200} height={700}alt=""/>
                        </div>
                        <div class="carousel-item">
                            <img src={require('./Images/plan.png')}  class="responsive" height={500} width={1200} alt=""/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" bg-color="primary">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" bg-color="primary">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Home;
