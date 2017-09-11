import Figure, {Point} from './figure'

const point1: Point = {
  x: 12,
  y: 5
}
const point2: Point = {
  x: 5,
  y: 4
}
const point3: Point = {
  x: 17,
  y: 4
}

let square = new Figure([point1, point2, point3])
square.perimeter()