import React from "react";
import About from "./About";
import CV from "./CV";

export default function Home(){
    return(
        <div>
            <div class="card bg-dark text-white border-0 rounded-0">
                <img class="card-img" src="./frontPic1.jpg"  alt="Responsive image"></img>
                <div class="card-img-overlay w-25 mx-auto d-block position-sticky  sticky-bottom d-none d-md-block" >
                    <img src="./me2.png" id="headshot" class="img-fluid rounded-circle" alt="Responsive image"></img>
                </div>
            </div>

            <div class="container-fluid ">
                <div class="row justify-content-center">
                    <div class="col-sm p-0  d-flex">
                        <div class="col-md-8 col-9 mx-auto align-self-center py-3">
                            <h1> Hello There! </h1>
                            <p> 
                                My name is <code class="highlighter-rouge">Niklas Haim</code>,
                                i'm 22 years old and you have reach a website all about me.
                            </p>
                            <p>
                                I am currently studying Software Engineering at the University of Southern Denmark. <br></br>
                                I am doing my bachelors right now, and I am going directly to my masters afterwards.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm p-0 ">
                        <img class="img-fluid w-100" src="./me3.png"  alt="Responsive image"></img>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}