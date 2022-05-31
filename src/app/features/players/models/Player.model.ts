import { ICountry } from './Country.model';

export interface IPlayer {
  id: number,
  firstName: string,
  lastName: string,
  fullName?: string,
  picture: string,
  points: number,
  rank: number,
  age: number,
  weight: number,
  height: number,
  birthDate: number,
  careerTitles: Array<any>,
  country: ICountry
}

