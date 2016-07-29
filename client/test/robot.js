import Robot from '../robot.js'
import test from 'tape'

test('Robot object', (t) => {
  const robot = new Robot()

  t.ok(robot, 'Robot created is truthy')
})
