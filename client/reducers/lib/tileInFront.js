export default function (robot, board) {
  const clonedRobot = {...robot}
  switch (Math.abs(robot.direction % 360)) {
    case 0:
      // 0 is backwards along Y axis
      clonedRobot.positionY--
      break
    case 90:
      // 90 is forwards along X axis
      clonedRobot.positionX = robot.positionX + (Math.sign(robot.direction))
      break
    case 180:
      // 180 is forwards along Y axis
      clonedRobot.positionY++
      break
    case 270:
      // 270 is backwards along X axis
      clonedRobot.positionX = robot.positionX - (Math.sign(robot.direction))
      break
  }
  // If tile in front is off the board return null
  if (board[clonedRobot.positionY] === undefined || board[clonedRobot.positionY][clonedRobot.positionX] === undefined) {
    return null
  }

  return board[clonedRobot.positionY][clonedRobot.positionX]
}
