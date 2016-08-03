const test = require('tape')
const freeze = require('deep-freeze')

const reducer = require('../reducers/reducer').default
const cloneState = require('../reducers/reducer').cloneState
const actions = require('../reducers/action')

test('cloneState clones the state without mutations', (t) => {
  const initialState = reducer(undefined, {})
  freeze(initialState)

  const clonedState = cloneState(initialState)

  t.deepEqual(clonedState, initialState, 'Cloned state is deeply equal to the initial state')
  t.notEqual(clonedState, initialState, 'Cloned state is not the same object as the inital state')
  t.end()
})

test('CLEAR_BUTTON action clears the queue', (t) => {
  const initialState = reducer(undefined, {type: actions.QUEUE_ACTION, payload: 'an action'})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 1, 'Command queue contains one action')

  const newState = reducer(initialState, {type: actions.CLEAR_BUTTON})

  t.equal(newState.commandQueue.length, 0, 'Command queue contains 0 actions after clearing')
  t.end()
})

test('GO_BUTTON action sets state running to true', function (t) {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  t.false(initialState.running)

  const newState = reducer(initialState, {type: actions.GO_BUTTON})

  t.true(newState.running)
  t.end()
})

test('STOP_BUTTON stops the robot moving and resets it', (t) => {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  // add commands and move the robot
  t.end()
})

test('TURN_LEFT action turns B3 to left', function (t) {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')

  const newState = reducer(initialState, {type: actions.TURN_LEFT})

  t.equal(newState.robot.direction, -90, 'B3 turned left')
  t.end()
})

test('TURN_RIGHT action turns B3 to right', function (t) {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')

  const newState = reducer(initialState, {type: actions.TURN_RIGHT})

  t.equal(newState.robot.direction, 90, 'B3 turned right')
  t.end()
})

test('MOVE_FORWARD action moves B3 forward (negative in y direction)', function (t) {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')
  t.equal(initialState.robot.positionY, 4, 'initial y position is 4')

  const newState = reducer(initialState, {type: actions.MOVE_FORWARD})

  t.equal(newState.robot.positionY, 3, 'B3 moved forward to y = 3')
  t.end()
})

test('SELECT_LEVEL updates the state', function (t) {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  const beforeLevelChange = reducer(initialState, {type: actions.MOVE_FORWARD})
  freeze(beforeLevelChange)

  const newLevelNum = 4
  const newState = reducer(beforeLevelChange, actions.setLevel(newLevelNum))

  t.notDeepEqual(newState.board, beforeLevelChange.board, 'Board is changed')
  t.notEqual(newState.robot.positionY, beforeLevelChange.robot.positionY, 'Robot positionY is reset')
  t.notEqual(newState.robot.positionX, beforeLevelChange.robot.positonX, 'Robot positonX is reset')
  t.equal(newState.currentLevel, newLevelNum, 'Current level is updated to the new level')
  t.end()
})
