import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { GameService } from './services/game.service';
import { MineComponent } from './components/mine/mine.component';
import { GameComponent } from './components/game/game.component';

const appRoutes: Routes = [
  { path: '', component: GameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MineComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
