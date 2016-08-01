import tileInFront from './tileInFront'

function jump (robot, board) {
  const tile = tileInFront(robot, board)
  if (tile === 2) {
    switch (Math.abs(robot.direction % 360)) {
      case 0:
        // 0 is backwards along Y axis Y-- and X is same
        robot.positionY--
        break
      case 90:
        // 90 is forward along X axis X++ and Y is same
        robot.positionX = robot.positionX + (Math.sign(robot.direction))
        break
      case 180:
        // 180 is forward along Y axis Y++ and x is same
        robot.positionY++
        break
      case 270:
        // 270 is backwards along X axis X-- and Y is same
        robot.positionX = robot.positionX - (Math.sign(robot.direction))
        break
      default:
        // does nothing
        break
    }
    robot.isOnBox = true
  }
  return true
}

module.exports = jump
