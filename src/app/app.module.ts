import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { PlayerDetailsDialog } from './features/players/components/dialogs/player-details.dialog/player-details.dialog';
import { PlayerInfoComponent } from './features/players/components/player-info/player-info.component';
import { PlayersListComponent } from './features/players/components/players-list/players-list.component';
import { SearchPipe } from './features/players/pipes/search-pipe/search.pipe';
import { StatisticsCardComponent } from './features/statistics/components/statistics-card/statistics-card/statistics-card.component';
import { MatFormFieldModule, } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerInfoComponent,
    SearchPipe,
    StatisticsCardComponent,
    PlayerDetailsDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
