var test = require('tape')
var freeze = require('deep-freeze')

var reducer = require('../reducers/reducer').default

test('GO_BUTTON action sets state running to true', function(t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.false(initialState.running)
  var newState = reducer(initialState, {type: 'GO_BUTTON'}) 
  t.true(newState.running)
  t.end()
})

test('ADD_LEFT action adds action to command queue', function(t) {
  var initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')
  var newState = reducer(initialState, {type: 'ADD_LEFT'}) 
  t.equal(newState.commandQueue.length, 1, 'newState queue length is one')
  t.equal(newState.commandQueue[0], 'TURN_LEFT' , 'queue has turn left action added')
  t.end()
})
