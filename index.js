// Rover Object Goes Here
const rover = {direction:'N', x:0, y:0, travelLog:[{x:0,y:0}]};
// ======================




// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction === 'N') {
    rover.direction = 'W';
  } 
  else if(rover.direction === 'W') {
    rover.direction = 'S';
  }
  else if(rover.direction === 'S') {
    rover.direction = 'E';
  }
  else {
    rover.direction = 'N';
  }
 // console.log(`rover is facing ${rover.direction}.`);
}

function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction === 'N') {
    rover.direction = 'E';
  } 
  else if(rover.direction === 'E') {
    rover.direction = 'S';
  }
  else if(rover.direction === 'S') {
    rover.direction = 'W';
  }
  else {
    rover.direction = 'N';
  }
 // console.log(`rover is facing ${rover.direction}.`);
}

function moveForward(rover){
  console.log("moveForward was called");
  let err = "Youuuuu can't place rover outside of grid!";
    if(rover.direction === 'N') {
      if(rover.x !== 0) {
      rover.x--;
      } else {
    console.log(err);
       rover.travelLog.splice(rover.travelLog.length-1,1);
  }
    } 
    else if(rover.direction === 'S') {
      if(rover.x !== 9) {
      rover.x++;
      } else {
       console.log(err);     rover.travelLog.splice(rover.travelLog.length-1,1);
      }
    }
    if(rover.direction === 'E') {
       if(rover.y !== 9) {
      rover.y++;
       } else {
         console.log(err);
         rover.travelLog.splice(rover.travelLog.length-1,1);
       }
    }
    else if(rover.direction === 'W') {
      if(rover.y !== 0) {
      rover.y--;
      } else {
    console.log(err);
rover.travelLog.splice(rover.travelLog.length-1,1);
      }
    }
  

  rover.travelLog.push({x:rover.x, y:rover.y});
 // console.log(`Player has position: x=${rover.x}, y=${rover.y}`);
}

function moveBackward(rover){
  console.log("moveForward was called");
  let err = "Youuuuu can't place rover outside of map!";
    if(rover.direction === 'N') {
      if(rover.x !== 9) {
      rover.x++;
      } else {
    console.log(err);
       rover.travelLog.splice(rover.travelLog.length-1,1);
  }
    } 
    else if(rover.direction === 'S') {
      if(rover.x !== 0) {
      rover.x--;
      } else {
       console.log(err);     rover.travelLog.splice(rover.travelLog.length-1,1);
      }
    }
    if(rover.direction === 'E') {
       if(rover.y !== 0) {
      rover.y--;
       } else {
         console.log(err);
       rover.travelLog.splice(rover.travelLog.length-1,1);
       }
    }
    else if(rover.direction === 'W') {
      if(rover.y !== 9) {
      rover.y++;
      } else {
    console.log(err);
rover.travelLog.splice(rover.travelLog.length-1,1);
      }
    }
  

  rover.travelLog.push({x:rover.x, y:rover.y});
 // console.log(`Player has position: x=${rover.x}, y=${rover.y}`);
}


function command(rover, orders){
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "f": // forward
        moveForward(rover);
        break; 
      case "b": //backward
        moveBackward(rover);
        break;
      case "r": // right
        turnRight(rover);
        break; 
      case "l": // left
        turnLeft(rover);
        break;
      default:
        console.log('Please use a valid command - r or l or f or b');
        break;
    }
  }
}


command(rover, "rfffbbfllflfffffbb");
console.log(rover.travelLog);
