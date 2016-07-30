import tileInFront from './tileInFront'

// moves the robot forward if it can
export default function (robot, board) {
  // an empty tile is in front
  if (tileInFront(robot, board) === 0) {
    switch (robot.direction) {
      case 0:
        // 0 is backwards along Y axis
        robot.positionY--
        break
      case 90:
        // 90 is forwards along X axis
        robot.positionX++
        break
      case 180:
        // 180 is forwards along Y axis
        robot.positionY++
        break
      case 270:
        // 270 is backwards along X axis
        robot.positionX--
        break
    }
    robot.isOnBox = false
  }
}
