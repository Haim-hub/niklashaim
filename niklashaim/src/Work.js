import React from "react";
import MyTimeline from "./MyTimeline";


export default function Work(){
    return(
        <div id="Work">
             {/* I Have Worked With */}
            <div class="container-fluid bg-gradient-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-9 mx-auto d-block py-5">
                            <h2 class="text-center">  My Work </h2>
                            <h5 class="text-center"> I proud enongh to show of these </h5>
                        </div>
                    </div>

                    <div class="row justify-content-md-center pb-5">
                    <div class="col-md-4 col-12 py-3 py-md-0">
                            <div class="card h-100" >
                                <img class="card-img-top" src="./yourProject.png" alt="Card image cap"></img>
                                <div class="card-body">
                                    <h4 class="text-center pt-3">You can have your project made</h4>
                                    <p class="pt-1 w-75 mx-auto mb-0">
                                        Is there a website that you want made?
                                    </p>
                                    <p class="w-75 mt-0 mx-auto ">
                                        I will gladly help you with realising your dream.
                                        So feel free to contact me and I will get to working
                                    </p>
                                    <div class="w-75 mx-auto d-flex flex-wrap text-light mt-5">
                                        <p class="text-center rounded bg-primary px-3 me-3">
                                            What
                                        </p>
                                        <p class="text-center rounded bg-primary px-3 me-3">
                                            Ever
                                        </p>
                                        <p class="text-center rounded bg-primary px-3 me-3">
                                            Fits
                                        </p>
                                        <p class="text-center rounded bg-primary px-3 me-3">
                                            Your
                                        </p>
                                        <p class="text-center rounded bg-primary px-3 me-3">
                                            Needs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-12 py-3 py-md-0">
                            <div class="card h-100">
                                <img class="card-img-top" src="./niklashaim.png" alt="Card image cap"></img>
                                <div class="card-body">
                                    <h4 class="text-center pt-3"> niklas.haim.dk</h4>
                                    <p class="pt-1 w-75 mx-auto ">
                                        This is the website you are currently on. I was made for two reasons: 
                                        I wanted to have a website that could work as a CV, and I wanted to try and learn React, while practicing some other skills aswell.
                                    </p>
                                    <div class="w-75 mx-auto d-flex flex-wrap text-light mt-5">
                                        <p class="text-center rounded bg-primary px-3 me-3">
                                            React
                                        </p>
                                        <p class="text-center rounded bg-primary px-3 me-3">
                                            Bootstrap
                                        </p>
                                        <p class="text-center rounded bg-primary px-3 me-3">
                                            Docker
                                        </p>
                                        <p class="text-center rounded bg-primary px-3 me-3">
                                            Google Cloud
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>



            
        </div>
    )
}