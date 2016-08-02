var test = require('tape')
var freeze = require('deep-freeze')
var reducer = require('../reducers/reducer').default

test('GO_BUTTON action sets state running to true', function (t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.false(initialState.running)
  var newState = reducer(initialState, {type: 'GO_BUTTON'})
  t.true(newState.running)
  t.end()
})

test('TURN_LEFT action turns B3 to left', function (t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')
  var newState = reducer(initialState, {type: 'TURN_LEFT'})
  t.equal(newState.robot.direction, -90, 'B3 turned left')
  t.end()
})

test('TURN_RIGHT action turns B3 to right', function (t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')
  var newState = reducer(initialState, {type: 'TURN_RIGHT'})
  t.equal(newState.robot.direction, 90, 'B3 turned right')
  t.end()
})

test('MOVE_FORWARD action moves B3 forward (negative in y direction)', function (t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')
  t.equal(initialState.robot.positionY, 4, 'initial y position is 4')
  var newState = reducer(initialState, {type: 'MOVE_FORWARD'})
  t.equal(newState.robot.positionY, 3, 'B3 moved forward to y = 3')
  t.end()
})

// To test all other reducer actions
