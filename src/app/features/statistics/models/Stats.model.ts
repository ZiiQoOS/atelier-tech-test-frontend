import { ICountry } from '../../players/models/Country.model';

export interface IStats {
  topRatioCountry: ICountry,
  meanPlayersBMI: number,
  medianHeightPlayers: number;
}