import tileInFront from './tileInFront'

// moves the robot forward if it can
export default function (robot, board) {
  const nextTileCode = tileInFront(robot, board)
  if (robot.isAlive === true && (nextTileCode === 0 || nextTileCode === 1)) {
    switch (Math.abs(robot.direction % 360)) {
      case 0:
        // 0 is backwards along Y axis
        robot.positionY--
        break
      case 90:
        // 90 is forwards along X axis
        robot.positionX = robot.positionX + (Math.sign(robot.direction))
        break
      case 180:
        // 180 is forwards along Y axis
        robot.positionY++
        break
      case 270:
        // 270 is backwards along X axis
        robot.positionX = robot.positionX - (Math.sign(robot.direction))
        break
    }
    robot.isOnBox = false
  } else if (nextTileCode === 3) {
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
    robot.isAlive = false
  }
}
