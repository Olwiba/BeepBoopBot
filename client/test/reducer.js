var test = require('tape')
var freeze = require('deep-freeze')

var reducer = require('../reducers/reducer').default
var cloneState = require('../reducers/reducer').cloneState
var actions = require('../reducers/action')

test('cloneState clones the state without mutations', (t) => {
  var initialState = reducer(undefined, {})
  freeze(initialState)

  var clonedState = cloneState(initialState)

  t.deepEqual(clonedState, initialState, 'Cloned state is deeply equal to the initial state')
  t.end()
})

test('GO_BUTTON action sets state running to true', function (t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.false(initialState.running)

  var newState = reducer(initialState, {type: actions.GO_BUTTON})

  t.true(newState.running)
  t.end()
})

test('TURN_LEFT action turns B3 to left', function (t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')

  var newState = reducer(initialState, {type: actions.TURN_LEFT})

  t.equal(newState.robot.direction, -90, 'B3 turned left')
  t.end()
})

test('TURN_RIGHT action turns B3 to right', function (t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')

  var newState = reducer(initialState, {type: actions.TURN_RIGHT})

  t.equal(newState.robot.direction, 90, 'B3 turned right')
  t.end()
})

test('MOVE_FORWARD action moves B3 forward (negative in y direction)', function (t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')
  t.equal(initialState.robot.positionY, 4, 'initial y position is 4')

  var newState = reducer(initialState, {type: actions.MOVE_FORWARD})

  t.equal(newState.robot.positionY, 3, 'B3 moved forward to y = 3')
  t.end()
})

test('SELECT_LEVEL updates the state', function (t) {
  var initialState = reducer(undefined, {})
  var beforeLevelChange = reducer(initialState, {type: actions.MOVE_FORWARD})
  freeze(beforeLevelChange)

  var newLevelNum = 4
  var newState = reducer(beforeLevelChange, actions.setLevel(newLevelNum))

  t.notDeepEqual(newState.board, beforeLevelChange.board, 'Board is changed')
  t.notEqual(newState.robot.positionY, beforeLevelChange.robot.positionY, 'Robot positionY is reset')
  t.notEqual(newState.robot.positionX, beforeLevelChange.robot.positonX, 'Robot positonX is reset')
  t.equal(newState.currentLevel, newLevelNum, 'Current level is updated to the new level')
  t.end()
})
