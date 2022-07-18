nose_x = 0;
nose_y = 0;

left_wrist = 0;
right_wrist = 0;

size = 0;

function preload(){
}

function setup(){
    canvas = createCanvas(450,400);
    canvas.position(700,180);
    video = createCapture(VIDEO);
    video.size(450,400);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

        right_wrist = results[0].pose.rightWrist.x;
        left_wrist = results[0].pose.leftWrist.x;

        size = floor(left_wrist - right_wrist);
    }
}

function draw(){
    background(70);
    square(nose_x,nose_y, size);
    fill("orange");

    document.getElementById("width_and_height").innerHTML = "Width And Height Of Square Will Be: " + size + "px";
}