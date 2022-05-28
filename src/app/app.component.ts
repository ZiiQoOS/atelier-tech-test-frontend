import { Component } from '@angular/core';
import { IPlayer } from './features/players/models/player-model';
import { IStats } from './features/players/models/Stats-model';
import { Observable } from 'rxjs';
import { StatisticsService } from 'src/app/features/players/services/statistics-service/statistics-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public players$: Observable<{ players: IPlayer[]}> = new Observable();

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.players$ = this.statisticsService.fetchPlayers();
  }
}
