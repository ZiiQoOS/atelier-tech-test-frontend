export interface IPlayer {
  id: string,
  firstName: string,
  lastName: string,
  fullName?: string,
  picture: string,
  points: number,
  rank: number,
  age: number,
  weight: number,
  height: number,
  birthYear: number,
  careerTitles: Array<any>,
  country: {
    code: string,
    name: string,
    picture?: string;
  }
}

