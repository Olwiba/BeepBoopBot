import tileInFront from 'movementCheck'

function jump (robot, board){
  const tile = tileInFront(robot, board)
  if(tile === 2){
    swicth(robot.direction)
      case 0:
        // 0 is backwards along Y axis Y-- and X is same
        robot.positionY--
        break
      case 90:
        // 90 is forward along X axis X-- and Y is same
        robot.positionX--
        break
      case 180:
        // 180 is forward along Y axis Y++ and x is same
        robot.positionY++
        break
      case 270:
        // 270 is backwards along X axis X++ and Y is same
        robot.positionX++
        break
      default:
        //does nothing
        break

    robot.isOnBox = true
  }
}

module.exports = jump