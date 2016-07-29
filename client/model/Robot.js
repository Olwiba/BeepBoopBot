export default class Robot {

  constructor () {
    this.direction = 0
    this.isOnBox = false
    this.positionX = 0
    this.positionY = 0
  }

  moveForward () {
    let normalisedDirection = this.direction
    if (this.direction < 0) {
      normalisedDirection = 360 - normalisedDirection
    }
    normalisedDirection = normalisedDirection / 4
    switch (normalisedDirection) {
      case 0:
        // 0 is forwards along Y axis
        this.positionY++
        break
      case 90:
        // 90 is backwards along X axis
        this.positionX--
        break
      case 180:
        // 180 is backwards along Y axis
        this.positionY--
        break
      case 270:
        // 270 is forwards along X axis
        this.positionX++
        break
    }
  }

  left () {
    this.direction -= 90
    this.direction = this.direction % 360
  }

  right () {
    this.direction += 90
    this.direction = this.direction % 360
  }
}
