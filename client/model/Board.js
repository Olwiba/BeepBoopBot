export default class Board {
  constructor (levelString) {
    switch (levelString) {
      default:
      case 'one':
        break
      case 'two':
        break
    }

    this.data = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0]
    ]
  }

  getBoard () {
    return this.data
  }

  /* Add functions to:
   * Check if a tile has a box in front,
   * given a positionX, positionY and direction angle
   *
   * Check if a tile has nothing in front of it,
   * given a positionX, positionY and direction angle
   *
   * Use above two functions to check if robot can move forwards,
   * given a Robot
   */

}
