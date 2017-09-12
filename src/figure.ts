export interface Point {
  x: number,
  y: number
}

class Figure {
  constructor(public points: Point[]) {}

  protected getDistanceFrom2Points(point1: Point, point2: Point): number {
    const firstPow = Math.pow((point1.x - point2.x), 2)
    const secondPow = Math.pow((point1.y - point2.y), 2)
    return Math.abs(Math.round(Math.sqrt(firstPow + secondPow)))
  }
}

export default Figure