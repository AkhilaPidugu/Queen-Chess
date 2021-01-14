// Checkpoint 1 | Creating the queen object
var queen={direction:"S",postion:{i:0,j:0}}


positionLog = 
		  [["a8","b8","c8","d8","e8","f8","g8","h8"],
 		   ["a7","b7","c7","d7","e7","f7","g7","h7"],
           ["a6","b6","c6","d6","e6","f6","g6","h6"],
           ["a5","b5","c5","d5","e5","f5","g5","h5"],
           ["a4","b4","c4","d4","e4","f4","g4","h4"],
           ["a3","b3","c3","d3","e3","f3","g3","h3"],
           ["a2","b2","c2","d2","e2","f2","g2","h2"],
           ["a1","b1","c1","d1","e1","f1","g1","h1"]];

// Checkpoint 2 | Turning the queen
function changeDirection(direction){
    queen.direction=direction;
}

// Checkpoint 3 | Moving the queen
function moveForward (){
    let t;
    let t1;
    switch(queen.direction){
        case "N":
            t=queen.postion.i-1;
            if(t>8 || t<0){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
            }
            break;
        case "E":
            t=queen.postion.j+1;
            if(t>8 || t<0){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.j=t;
            }
            break;
        case "W":
            t=queen.postion.j-1;
            if(t>8 || t<0){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.j=t;
            }
            break;
        case "S":
            t=queen.postion.i+1;
            if(t>8 || t<0){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
            }
            break;
        case "NE":
            t=queen.postion.i-1;
            t1=queen.postion.j+1;
            if((t>8||t<0)&&(t1>8 || t1<0)){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
                queen.postion.j=t1;
            }
            break;
        case "NW":
            t=queen.postion.i-1;
            t1=queen.postion.j-1;
            if((t>8||t<0)&&(t1>8 || t1<0)){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
                queen.postion.j=t1;
            }
            break;
        case "SE":
            t=queen.postion.i+steps;
            t1=queen.postion.j+steps;
            if((t>8||t<0)&&(t1>8 || t1<0)){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
                queen.postion.j=t1;
            }
            break
        case "SW":
            t=queen.postion.i+steps;
            t1=queen.postion.j-steps;
            if((t>8||t<0)&&(t1>8 || t1<0)){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
                queen.postion.j=t1;
            }
            break;
        
    }

}

//check4 jumpMoveForward
function jumpMoveForward(steps){
    let t;
    let t1;
    switch(queen.direction){
        case "N":
            t=queen.postion.i-steps;
            if(t>8 || t<0){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
            }
            break;
        case "E":
            t1=queen.postion.j+steps;
            if(t1>8 || t1<0){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.j=t1;
            }
            break;
        case "W":
            t1=queen.postion.j-steps;
            if(t1>8 || t1<0){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.j=t1;
            }
            break;
        case "S":
            t=queen.postion.i+steps;
            if(t>8 || t<0){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
            }
            break;
        case "NE":
            t=queen.postion.i-steps;
            t1=queen.postion.j+steps;
            if((t>8||t<0)&&(t1>8 || t1<0)){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
                queen.postion.j=t1;
            }
            break;
        case "NW":
            t=queen.postion.i-steps;
            t1=queen.postion.j-steps;
            if((t>8||t<0)&&(t1>8 || t1<0)){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
                queen.postion.j=t1;
            }
            break;
        case "SE":
            t=queen.postion.i+steps;
            t1=queen.postion.j+steps;
            if((t>8||t<0)&&(t1>8 || t1<0)){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
                queen.postion.j=t1;
            }
            break
        case "SW":
            t=queen.postion.i+steps;
            t1=queen.postion.j-steps;
            if((t>8||t<0)&&(t1>8 || t1<0)){
                console.log("Not Possible to move");
            }
            else{
                queen.postion.i=t;
                queen.postion.j=t1;
            }
            break;
        
    }

}
//check5 Updating Position
function update(){
    console.log('Position:'+ positionLog[queen.postion.i][queen.postion.j]+"\nDirection:"+queen.direction);
}

//function to run the program
function run(steps,direction){
    changeDirection(direction);
    if(steps==1){
        moveForward ();
    }
    else{
        jumpMoveForward(steps);
    }
    update();
}