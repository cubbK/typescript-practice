import Figure from './Figure'

class Triangle extends Figure {
  public dist1 = this.getDistanceFrom2Points(this.points[0], this.points[1])
  public dist2 = this.getDistanceFrom2Points(this.points[1], this.points[2])
  public dist3 = this.getDistanceFrom2Points(this.points[0], this.points[2])

  public perimeter(): number {
    return this.dist1 + this.dist2 + this.dist3
  }
  public aria(): number {
    const p = (this.dist1 + this.dist2 + this.dist3) / 2
    const firstDif: number = p - this.dist1
    const secondDif: number = p - this.dist2
    const thirdDif: number = p - this.dist3
    const final: number = Math.sqrt(p * firstDif * secondDif * thirdDif)
    return final
  }
}

export default Triangle