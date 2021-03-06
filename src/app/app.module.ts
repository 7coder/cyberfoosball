import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { CreateGameComponent } from './components/create-game/create-game.component';

//Services
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { TeamComponent } from './components/team/team.component';
import { DataTransmitterService } from './services/data-transmitter.service';

const routes: Routes = [
  { path : '', component : IndexPageComponent },
  { path : 'lobby', component : LobbyComponent },
  { path : 'createGame', component : CreateGameComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LobbyComponent,
    IndexPageComponent,
    PlayerCardComponent,
    CreateGameComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    AuthService,
    ApiService,
    DataTransmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
