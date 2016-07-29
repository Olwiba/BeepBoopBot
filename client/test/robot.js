import Robot from '../model/Robot.js'
import test from 'tape'

test('Creating a new robot', (t) => {
  const robot = new Robot()

  t.ok(robot, 'Robot created is truthy')

  t.equal(robot.positionX, 0, 'Robot starts at X position of 0')
  t.equal(robot.positionY, 0, 'Robot starts at Y position of 0')

  t.false(robot.isOnBox, 'Robot is not on a box')

  t.equal(robot.direction, 0, 'Robot starts looking straight ahead')
  t.end()
})

test('Robot movement', (t) => {
  let robot = new Robot()
  const startY = robot.positionY
  const startX = robot.positionX

  robot.moveForward()

  t.equal(robot.positionY, startY, 'Robot can move forward')

  robot = new Robot()
  robot.right()

  t.true(robot.direction === 90, 'Robot can turn right')

  robot = new Robot()
  robot.left()

  t.true(robot.direction === -90 || robot.direction === 270, 'Robot can turn left')

  robot.moveForward()

  t.equal(robot.positionX, startX + 1, 'Robot moves in correct direction after turning left')
  t.end()
})
