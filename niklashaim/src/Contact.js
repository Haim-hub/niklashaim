import React from "react";

export default function Contact(){
    return(
        <div id="Contact">
            <div class="container-fluid bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-9 mx-auto d-block py-5">
                            <h4 class="text-center"> Feel free to contact me </h4>
                            <h6 class="text-center"> Or just follow and see what i'm up to </h6>
                        </div>
                    </div>

                    <div class="row pb-5">
                        <div class="col-md-1 col-3 mx-auto d-flex">
                            <a href="mailto:niklas@haim.dk" target="_blank" rel="noreferrer">
                                <img class="img-fluid w-100" src="./mail.png"  alt="Responsive image"></img>
                            </a>
                        </div>

                        <div class="col-md-1 col-3 mx-auto d-flex">
                            <a href="https://www.linkedin.com/in/niklas-haim-917b3a224" target="_blank" rel="noreferrer">
                                <img class="img-fluid w-100" src="./linkedin.png"  alt="Responsive image"></img>
                            </a>
                        </div>
                        <div class="col-md-1 col-3 mx-auto d-flex">
                            <a href="https://www.instagram.com/niklashaim/" target="_blank" rel="noreferrer">
                                <img class="img-fluid w-100" src="./Instagram.png"  alt="Responsive image"></img>
                            </a>
                        </div>
                        <div class="col-md-1 col-3 mx-auto d-flex">
                            <a href="https://www.youtube.com/@NiklasHaim" target="_blank" rel="noreferrer">
                                <img class="img-fluid w-100" src="./youtube.png"  alt="Responsive image"></img>
                            </a>
                        </div>
                    </div>



                </div>
            </div>

            
        </div>
    )
}