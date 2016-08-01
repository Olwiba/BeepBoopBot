# Beep Boop Bot

Beep Boop Bot is an education game aimed at children to teach the basis of programming and logic. The player is presented with a robot (our friend B3) who must navigate through a course of obstacles to reach the exit. The player queues a series of commands, which are executed to control the movment of B3.

## MVP

* Single page Game ✓
* Renders grid/board 5 x 5 ✓
* Board shows boxes and Exit ✓
* Move Forward ✓
* Rotate 90' left ✓
* Rotate 90' right ✓
* Jump (deobsticalize...) ✓
* Wont be able to leave the play board ✓
* ~~Model View Controller~~
* Go + Stop buttons ✓
* Clear button ✓
* Command queue box ✓
* Two sections (Input, Game) ✓
* Mobile First 
* Can only edit commands when not running ✓

## React Components

* App
	* Nav (level chooser)
	* Command pane
		* Command queue
		* Go/Stop button
	* Board
	* About / Instructions

## User stories

* As a user, I can see an 'About' page with a back story and instructions 
* As a user, I can click a '?' and see the about page again ✓
* As a user, I can learn from the crucial levels how to play the game ✓
* As a user, I can select what level I want to play ✓
* As a user, I can add commands to be executed by B3 ✓
* As a user, I can click 'Go' to have B3 execute the commands ✓
* As a user, I can click 'Stop' and B3 will reset position so that I can add more commands ✓
* As a user, I can pass the level, see a pop up and click to the next level ✓
* As a user, I can see B3 fail and the 'Stop' button change to 'Retry' ✓
* As a user, I can only edit commands while B3 is not running ✓
* As a user, I can click commands to remove them from the list ✓
* As a user, I can click clear to clear all the commands ✓

## Data Model

### B3
B3 is represented as an object in the store:
robot = {
	direction: <integer>: 0 = North, 90 = East, 180 = South, 270 = West
	isOnBox: Boolean
	positionX: integer 0 - 4
	positionY: integer 0 - 4
}

### The board
The board is represented as an array of arrays in the store. Each array represents a row of tiles. Each array element represents a tile.
0 = empty square
1 = exit
2 = box on square

eg: board = [
	[0,0,2,0,0]
	[0,0,0,0,0]
	[0,2,0,0,0]
	[0,0,0,0,0]
	[0,0,0,2,1]
]

### Levels
Board setups for the levels are stored in a levels.js, which is imported. The levels are stored in an object where the level number is the key and the board setup is the value.

For example, the board setup for level one can be got by levels[1].

### Actions
The command pane and nav bar have a number of assocaited components that can dispatch actions.
* GO_BUTTON: Starts executed the queued up actions
* STOP_BUTTON: Stops execution of the queued up actions, and returns B3 to the start
* SELECT_LEVEL: Changes to a new level (action.payload = <integer> the level number)
* MOVE_FORWARD: Moves B3 forward one tile if tile in front is empty
* TURN_LEFT: Turns B3 90 degrees anticlockwise
* TURN_RIGHT: Turns B3 90 degrees clockwise
* JUMP_UP: Moves B3 onto the box on the tile in front, if there is one
* ADD_TILE_INFO: Stores references to all the tile elements
* QUEUE_ACTION: Adds an action to the queue (action.payload = <string> e.g. 'TURN_LEFT')
* CLEAR_QUEUE: Clear all actions from the queue
* REMOVE_ACTION: Removes the specified action from the queue (action.payload = <integer> the action's index)
* LEVEL_WON: Toggles the state of the levelWon boolean
* HAS_FINISHED: Sets the state of hasFinished to true, indicating that the queue has finished running the actions

## Design
Credit to Sean Johnson for his awesome design work!
###Colour Palette 
![The colour palette](https://s32.postimg.org/5aq42p8hx/colours.png "Colour Palette")

###Intro Design 
![alt tag](https://s32.postimg.org/7hqkqxyed/Layout_B3_Intro.png "Intro Design")

###Desktop Design
![alt tag](https://s31.postimg.org/dqi2d0l7f/Layout_B3.png "Desktop Design")

###Mobile Design 
![alt tag](https://s32.postimg.org/4dzj6o89h/Layout_B3_Mobile.png "Mobile Design")

## Wireframes

###About Page
![The about page wireframe](https://s31.postimg.org/crq66ae1n/About_Page.png "About Page")

###Home Page
![The home page wireframe](https://s31.postimg.org/dh3g2brdn/Home_Wireframe.png "Home Page")

## Stretch goals
Fun features we would like to add.

## Team learning objectives

### Redux

* Ollie
* Shayan
* Sean

### GreenSock

* Sean

### ThreeJs

* Vai
* Miles
* Shayan
* Sean

### Mobile Friendly

* Miles
* Troy

### React

* Sean
* Vai

### MVC

### Immutable (Stretch)

## Information for the team

Each team member is to install standardJS (npm i standard -g) and standard-format (npm i standard-format -g).
Run standard (linter) with 'standard'. It checks all of the files in your current dir for formatting and linting problems and prints a list of problems. Fix the problems before pushing to github. You can also run 'standard-format -w', which usually automatically fixes most of the errors.

Sublime and Atom packages available. See https://github.com/feross/standard and https://www.npmjs.com/package/standard-format for details. Ask Miles if you have installation problems.

We are using TravisCI to check for errors before merging with master.
