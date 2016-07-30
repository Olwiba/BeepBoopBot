export default function (robot, board) {
  const clonedRobot = {...robot}
  switch (clonedRobot.direction) {
    case 0:
      // 0 is backwards along Y axis
      clonedRobot.positionY--
      break
    case 90:
      // 90 is forwards along X axis
      clonedRobot.positionX++
      break
    case 180:
      // 180 is forwards along Y axis
      clonedRobot.positionY++
      break
    case 270:
      // 270 is backwards along X axis
      clonedRobot.positionX--
      break
  }
  if (board[clonedRobot.positionY] === undefined || board[clonedRobot.positionY][clonedRobot.positionX] === undefined) {
    return null
  }

  return board[clonedRobot.positionY][clonedRobot.positionX]
}
