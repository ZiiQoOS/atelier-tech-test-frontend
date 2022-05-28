import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { PlayerInfoComponent } from './features/players/components/player-info/player-info.component';
import { PlayersListComponent } from './features/players/components/players-list/players-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
