export interface PointsData {
  id?: number
  points: string
  title: string
  socialApp: string
  createdAt?: string
}

export interface PointRepo {
  fetchPoints(params?: {
    page?: number
    per?: number
  }): any
}

export interface Repositories {
  pointRepo: PointRepo
}
