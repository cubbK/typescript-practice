import { Point } from './Figure'
import Triangle from './Triangle'

const point1: Point = {
  x: 5,
  y: 1
}
const point2: Point = {
  x: 10,
  y: 1
}
const point3: Point = {
  x: 7,
  y: 10
}

let myTriangle = new Triangle([point1, point2, point3])
console.log('Triangle aria: ' + myTriangle.aria())
console.log('Triangle perimeter:', + myTriangle.perimeter())