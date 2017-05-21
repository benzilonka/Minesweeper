import { Component, EventEmitter, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
	rows: number;
    columns: number;
	mines: number;
	superman: boolean;	
    
    constructor(public game: GameService) {
		this.rows = 10;
		this.columns = 10;
		this.mines = 9;
		this.superman = false;
        this.game = game;
		this.game.restart(this.rows, this.columns, this.mines);
    }

    mineClicked(event, i: number, j: number): void {
		var shiffed = event.shiftKey;
        this.game.reveal(i, j, shiffed);
    }

    startGame(): void {
		if(this.mines > this.rows * this.columns){
			this.mines = this.rows * this.columns;
		}
        this.game.restart(this.rows, this.columns, this.mines);
    }
	
	setSuperman(): void {
		this.superman = !this.superman;
	}
	
	isFlagAlert(): boolean {
		return this.game.flagAlert;
	}
}
