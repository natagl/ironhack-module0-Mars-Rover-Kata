// Rover Object Goes Here
// ======================

// ======================
let rover = {
  direction: "N"
 }
 
function turnLeft(rover){
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
  console.log("moveForward was called")
}

