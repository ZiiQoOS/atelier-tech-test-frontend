import { CustomHttpClientService } from 'src/app/services/custom-http-client-service/custom-http-client.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlayer } from '../../models/player-model';
import { IStats } from '../../models/Stats-model';
import { Observable } from 'rxjs';

const API_URL = '';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private httpCustomClient: CustomHttpClientService) { }
  fetchPlayers(): Observable<{ players: IPlayer[], statistics: IStats[] }> {
    return this.httpCustomClient.get(`${API_URL}`);
  }

  getPlayer(id: string): Observable<IPlayer> {
    return this.httpCustomClient.get(`${API_URL}/${id}`);
  }

}
