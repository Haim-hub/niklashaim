import React from "react";
import MyTimeline from "./MyTimeline";


export default function CV(){
    return(
        <div id="CV">

            <div class="container-fluid bg-light">
                <div class="row justify-content-center">
                    <div class="col-sm p-0  d-flex">
                        <div class="col-md-8 col-9 mx-auto align-self-center py-3">
                            < MyTimeline />
                        </div>
                    </div>
                </div>
            </div>

             {/* I Have Worked With */}
            <div class="container-fluid ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-9 mx-auto d-block py-5">
                            <h2 class="text-center">  Experience </h2>
                            <h5 class="text-center"> I have worked with these </h5>
                        </div>
                    </div>

                    <div class="row justify-content-md-center pb-4">
                        <div class="col-md-4 col-12 py-3 py-md-0">
                            <div class="card h-100">
                                <img class="card-img-top" src="./OOP.png" alt="Card image cap"></img>
                                <div class="card-body">
                                    <h4 class="text-center pt-3"> Object Oriented Programming</h4>
                                    <ul class="pt-1 list-unstyled text-center">
                                        <li>
                                            Java                                        
                                        </li>
                                        <li>
                                            C++
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-12 py-3 py-md-0">
                            <div class="card h-100" >
                                <img class="card-img-top" src="./web.png" alt="Card image cap"></img>
                                <div class="card-body">
                                    <h4 class="text-center pt-3"> Website Development</h4>
                                    <ul class="pt-1 list-unstyled text-center">
                                        <li>
                                            Laravel 
                                        </li>
                                        <li>
                                            React 
                                        </li>
                                        <li>
                                            Vue.js 
                                        </li>
                                        <li>
                                            Bootstrap 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-12 py-3 py-md-0">
                            <div class="card h-100">
                                <img class="card-img-top" src="./other.png" alt="Card image cap"></img>
                                <div class="card-body">
                                    <h4 class="text-center pt-3"> Other </h4>
                                    <ul class="pt-1 list-unstyled text-center">
                                        <li>
                                            Python 
                                        </li>
                                        <li>
                                            C#
                                        </li>
                                        <li>
                                            PostgreSQL
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row pb-5 mt-0">
                        <div class="col-12">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h4 class="text-center pt-1"> Tools</h4>
                                    <ul class="pt-1 list-unstyled text-center">
                                        <li class="pb-1">
                                            IDE: VS CODE / IntelliJ
                                        </li>
                                        <li class="pb-1">
                                            Project Management Software: Jira / Gitlab
                                        </li >
                                        <li class="pb-1">
                                            Containerization: Docker
                                        </li>
                                        <li>
                                            Version Control: Gitlab / Github
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Language */}
            <div class="container-fluid bg-light w-100 py-5">
                <div class="row">
                    <div class="col-md-8 col-9 mx-auto d-block pb-5">
                        <h2 class="text-center">  Language Proficiency </h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-2 col-3">
                        <h6> Dansish </h6>
                        <p> Native </p>
                    </div>
                    <div class="col-md-4 col-5 d-flex">
                        <div class="progress w-100">
                            <div class="progress-bar" role="progressbar" style={{width: 100 + '%'}} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-2 col-3">
                        <h6> Engelsk </h6>
                        <p> Fluent </p>
                    </div>
                    <div class="col-md-4 col-5 d-flex pr-5">
                        <div class="progress w-100">
                            <div class="progress-bar" role="progressbar" style={{width: 90  + '%'}} aria-valuenow="90" aria-valuemin="90" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-2 col-3">
                        <h6> German </h6>
                        <p> Elementary </p>
                    </div>
                    <div class="col-md-4 col-5 d-flex">
                        <div class="progress w-100">
                            <div class="progress-bar" role="progressbar" style={{width: 10  + '%'}} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            



            
        </div>
    )
}