import { CustomHttpClientService } from 'src/app/services/custom-http-client-service/custom-http-client.service';
import { Injectable } from '@angular/core';
import { IPlayer } from '../../../players/models/Player.model';
import { IStats } from '../../models/Stats.model';
import { Observable } from 'rxjs';

const API_URL = '/statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private httpCustomClient: CustomHttpClientService) { }
  fetchStats(): Observable<{ statistics: IStats[] }> {
    return this.httpCustomClient.get(`${API_URL}`);
  }

}
