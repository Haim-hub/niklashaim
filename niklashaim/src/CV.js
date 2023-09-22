import React from "react";
import MyTimeline from "./MyTimeline";


export default function CV(){
    return(
        <div>
            <div class="d-flex bg-dark text-white justify-content-center p-5">
                <h1 class="display-1 pt-5"> Curriculum Vitae </h1>
                
            </div>

            <div class="container-fluid bg-light">
                <div class="row justify-content-center">
                    <div class="col-sm p-0  d-flex">
                        <div class="col-md-8 col-9 mx-auto align-self-center py-3">
                            < MyTimeline />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid ">
                <div class="row justify-content-center ">

                    <div class="col-sm p-0  d-flex">
                    </div>
                </div>
            </div>
            
        </div>
    )
}