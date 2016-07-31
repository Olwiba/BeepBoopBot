# Beep Boop Bot

Beep Boop Bot is an education game aimed at children to teach the basis of programming and logic. The player is presented with a robot (our friend B3) who must navigate through a course of obstacles to reach the exit. The player queues a series of commands, which are executed to control the movment of B3.

## MVP

* Single page Game ✓
* Renders grid/board 5 x 5 ✓
* Board shows obstacle, BBB and Exit (lock, magnified etc ...)
* Move Forward ✓
* Rotate 90' left ✓
* Rotate 90' right ✓
* Deobsticalize (whatever we decide the obstacle is...) ✓
* Wont be able to leave the play board ✓
* ~~Model View Controller~~
* Go + Stop buttons ✓
* Clear button 
* Command queue box
* Two sections (Input, Game) ✓
* Mobile First
* Can only edit commands when not running

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
* As a user, I can click a '?' and see the about page again
* As a user, I can learn from the crucial levels how to play the game
* As a user, I can select what level I want to play
* As a user, I can add commands to be executed by BBB
* As a user, I can click 'Go' to have BBB execute the commands
* As a user, I can click 'Stop' and BBB will reset position so that I can edit my commands
* As a user, I can pass the level, see a pop up and click to the next level
* As a user, I can see BBB fail and the 'Stop' button change to 'Try again'
* As a user, I can only edit commands while BBB is not running
* As a user, I can click commands to remove them from the list
* As a user, I can click clear to clear all the commands

## Data Model

### B3
B3 is represented as an object in the store:
robot = {
	direction: intger: 0 = North, 90 = East, 180 = South, 270 = West
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

All 10 boards are stored in a data.json object, which are required in. Level one = levels.one etc.

### Actions
The command pane and nav bar have a number of assocaited components that can dispatch actions.
Go: GO_BUTTON
Stop: STOP_BUTTON
Clear: CLEAR_QUEUE
Add forward command: ADD_FORWARD
Add rotate left command: ADD_LEFT
Add rotate right command: ADD_RIGHT
Add jump command: ADD_JUMP
Select level: SELECT_LEVEL (action.level = 'one' - 'ten')

## Design
Credit to Sean Johnson for his awesome design work!
###Colour Pellet 
![alt tag](https://s32.postimg.org/5aq42p8hx/colours.png "Colour Pellet")

###Intro Design 
![alt tag](https://s32.postimg.org/7hqkqxyed/Layout_B3_Intro.png "Intro Design")

###Desktop Design
![alt tag](https://s31.postimg.org/dqi2d0l7f/Layout_B3.png "Desktop Design")

###Mobile Design 
![alt tag](https://s32.postimg.org/4dzj6o89h/Layout_B3_Mobile.png "Mobile Design")

## Wireframes

###About Page
![alt tag](https://s31.postimg.org/crq66ae1n/About_Page.png "About Page")

###Home Page
![alt tag](https://s31.postimg.org/dh3g2brdn/Home_Wireframe.png "Home Page")

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
