var test = require('tape')

var action = require('../reducers/action');
var reducer = require('../reducers/reducer').default;
var cloneState = require('../reducers/reducer').cloneState;

const initialState = cloneState(reducer(undefined, {}))
initialState.running = true
initialState.commandQueue.push('TURN_LEFT')

test('command dispatches queued action when running and has a command queued', function(t) {
  const thunk = action.runCommands()
  thunk(
    function(action) {
      t.deepEqual(action, {type:'TURN_LEFT'}) 
      initialState.running = false
      t.end()
    },
    function() {
      return initialState 
    }
  )
})
