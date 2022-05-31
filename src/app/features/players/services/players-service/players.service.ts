import { CustomHttpClientService } from 'src/app/services/custom-http-client-service/custom-http-client.service';
import { Injectable } from '@angular/core';
import { IPlayer } from '../../models/Player.model';
import { Observable } from 'rxjs';

const API_URL = '/players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpCustomClient: CustomHttpClientService) { }
  getPlayers(): Observable<{ players: IPlayer[] }> {
    return this.httpCustomClient.get(`${API_URL}`);
  }

  getPlayerById(id: number): Observable<IPlayer> {
    return this.httpCustomClient.get(`${API_URL}/${id}`);
  }
}
