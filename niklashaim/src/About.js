import React from "react";

import PhotoAlbum from "react-photo-album";

// Yes you need all the sizes...
const photos = [
    { src: "./1.jpg", width: 3000, height: 4000 },
    { src: "./2.jpg", width: 4000, height: 3000 },
    { src: "./3.jpg", width: 3024, height: 4032 },
    { src: "./4.jpg", width: 2176 , height: 4608 },
    { src: "./5.jpg", width: 3680, height: 6528 },
    { src: "./6.jpg", width: 1080, height: 1286 },
    { src: "./7.jpg", width: 3000, height: 4000 },
    { src: "./8.jpg", width: 3024, height: 4032 },
    { src: "./9.jpg", width: 942, height: 572 },
    { src: "./10.jpg", width: 720, height: 960 },
    { src: "./11.jpeg", width: 1004, height: 669 },
    { src: "./12.jpg", width: 960, height: 640 },
    { src: "./13.png", width: 1946, height: 1266 },
    { src: "./14.jpg", width: 1080, height: 811 },
];

export default function About(){
    return(
        <div id="About">

            <div class="container-fluid ">
                <div class="row justify-content-center bg-light">
                    <div class="col-md-6 col-12 p-0">
                        <img class="img-fluid" src="./me4.png"  alt="Responsive image"></img>
                    </div>
                    <div class="col-md-6 col-12 p-0 d-flex">
                        <div class="col-md-8 col-9 mx-auto align-self-center py-3">
                            <h1> Who Am I? </h1>
                            <p> 
                                As you might have noticed, my name is <code class="highlighter-rouge">Niklas Haim</code>,
                                and I am 22 years old. I come from the 32th biggest City in Denmarl (Slagelse). <br></br>
                                I am currently living in Odense because I study Software Engineering at SDU.
                            </p>
                            <p>
                                I have always been very extroverted, and I love talking to new people. 
                                When I am not at school or working, I spend a lot of time in the communities surounding my hobbies.
                                And squezeing itself in as much as possible, I also spend many hours with my big family.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="container-fluid bg-white">
                <div class="container mb-3">
                    <div class="row">
                        <div class="col-md-8 col-9 mx-auto d-block py-5">
                            <h1 class="text-center">  Hobbies </h1>
                            <h5 class="text-center"> I love spending time doing </h5>
                        </div>
                    </div>

                    <div class="row justify-content-md-center pb-5">
                        <div class="col-xl-4 col-lg-8 col-12 py-3">
                            <div class="card h-100">
                                <div class="card-body p-0">
                                    <h4 class="text-center p-5 bg-light"> Climbing &#129495; </h4>
                                        <p class="d-block w-75 mx-auto my-5">
                                            In late 2021 I went to a bouldering gym for the first time.
                                            And I have been addicted ever since.  <br></br>
                                            I am very active in the my local gym (<a href="https://www.odenseboulder.dk/">OBK</a>).
                                            I do work there as a route setter and as a alternate in the Board of Directors. <br></br>
                                            For my bouldering is the perfect sport. I have to strong and be able to do problem-solving.
                                            But the best part might be the community around round the sport. <br></br>
                                            Though I mostly climb indoors, I try to get out as much as possible. 
                                            Our favorite place to go climbing outdoors, is in Kjügekull Sweden
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-8 col-12 py-3">
                            <div class="card h-100" >
                                <div class="card-body p-0">
                                    <h4 class="text-center p-5 bg-light"> Music &#127932; </h4>
                                        <p class="d-block w-75 mx-auto my-5">
                                            I have been playing music since I was 6 years old, 
                                            and it has always had a big spot in my life. 
                                            My main instrument is the saxophone, which I started playing when I was 9 years old. <br></br>
                                            When I was 13, I started in the marching band <a href="https://www.instagram.com/slagelsegarden/">Slagelse Garden</a>.
                                            The marching band has taking me many placeses, and I have learned many valueable lessons along the way.
                                            My friends there are like a second family. <br></br>
                                            Other than the marching band, I also play some piano. I mostly play it to be able to have people sing to,
                                            but also in order to visualize theory better. 
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-8 col-12 py-3">
                            <div class="card h-100">
                                <div class="card-body p-0">
                                    <h4 class="text-center p-5 bg-light"> Cooking &#127859; </h4>
                                        <p class="d-block w-75 mx-auto my-5">
                                            Cooking has always played a big role in my family,
                                            And the apple doesn't fall far from the tree.
                                            I find the whole process of creating delicious food truly amazing. <br></br> 
                                            While in highschool, I worked at a cheese store (<a href="https://www.osteborsen.dk/">Ostebørsen</a>), in the front store.
                                            Here I worked with several people who were trained cooks, and this really sparked my joy for cooking. 
                                            Many times have I crawled down a rabbithole of leaning about a food-related topic, and the cheese store was no exeption.
                                            I would borrow home books and ask the cooks a million question, in order to learn as much as possible.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Album */}
            <PhotoAlbum layout="columns" photos={photos} />;
            
        </div>
    )
}