// Rover Object Goes Here
// ======================

// ======================
let rover = {
  direction: "N",
  x : 0,
  y : 0
 }

function turnLeft(rover){
 // console.log("initial rover direction");
  switch (rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log(`Rover is facing now to ${rover.direction}`);
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
  console.log(`Rover is facing now to ${rover.direction}`);
}
function moveForward(rover){

  switch(rover.direction){
    case "N":
      //rover.y = rover.y -1;
      rover.y--;
      break;
    case "W":
      rover.x--;
      break;
    case "S":
      rover.y++;
      break;
    case "E":
      rover.x++;
      break;
    case "STOP":
      console.log("You are at the edge, cannot go outside boundary");
      break;
  }

  if(rover.x < 0 || rover.y < 0 || rover.x > 9 || rover.y > 9 ){
    if (rover.x < 0) {
      rover.x++;
    } else if (rover.y < 0) {
      rover.y++;
    } else if (rover.y > 9) {
      rover.y--;
    } else if (rover.x > 9) {
      rover.x--;
    }     
  } else {
      console.log("moveForward was called");
      console.log("Rover position is: (x=" + rover.x + ", y=" + rover.y + ").");
      }
  }

  function command(comvalue){
    for(i=0; i<comvalue.length; i++){
      switch(comvalue[i]){
        case"r":
          turnRight(rover);
          break;
        case"l":
          turnLeft(rover);
          break;
        case"f":
          moveForward(rover);
          break;
        default:
            console.log("Invalid Command!");
            break;
      }
    }
  }


