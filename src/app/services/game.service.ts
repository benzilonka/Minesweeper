import {Mine} from './mine';

export class GameService {
    public board: Mine[][];
    public columns: number;
    public rows: number;
    private minesCount: number;
    private revealedCount: number;
    public lost: boolean;
    public won: boolean;
	public flagsCount: number;
	public flagAlert: boolean;

    constructor() {
    }

    public restart(columns: number, rows: number, mines: number): void {
        this.columns = columns;
        this.rows = rows;
        this.board = [];
        this.minesCount = mines;		
        this.revealedCount = 0;
		this.flagsCount = 0;
		this.flagAlert = false;
        this.lost = false;
        this.won = false;
        this.generateMineBoxes();
        this.generateMines();
        this.generateThreats();
    }

    private generateMineBoxes(): void {
        for (let i = 0; i < this.columns; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.rows; j++)
                this.board[i][j] = new Mine(i, j, this.columns);
        }
    }

    private generateMines(): void {
		let minesCount = this.minesCount;
        while(minesCount > 0) {
            const rand1 = Math.floor(Math.random() * this.columns);
            const rand2 = Math.floor(Math.random() * this.rows);
            if (!this.board[rand1][rand2].isMine()) {
                this.board[rand1][rand2].setMine(true);
                minesCount--;
            }
        }
    }

    private generateThreats(): void {
        for (let i = 0; i < this.columns; i++) {
            for (let j = 0; j < this.rows; j++) {
                let threat = 0;
                if (i != 0)
                    if(this.board[i - 1][j].isMine())
                        threat++;
                if (i != this.columns - 1)
                    if(this.board[i + 1][j].isMine())
                        threat++;
                if (j != 0) 
                    if(this.board[i][j - 1].isMine())
                        threat++;
                if (j != this.rows - 1) 
                    if(this.board[i][j + 1].isMine())
                        threat++;
                if (j != this.rows - 1)
                    if(i != this.columns - 1)
                        if(this.board[i + 1][j + 1].isMine())
                            threat++;
                if (j != 0)
                    if(i != 0)
                        if(this.board[i - 1][j - 1].isMine())
                            threat++;
                if (j != this.rows - 1)
                    if(i != 0)
                        if(this.board[i - 1][j + 1].isMine())
                            threat++;
                if (j != 0)
                    if(i != this.columns - 1)
                        if(this.board[i + 1][j - 1].isMine())
                            threat++;
                this.board[i][j].setThreat(threat);
            }
        }
    }

    private expand(i: number, j: number): void {
        if (!this.board[i][j].isRevealed()) {
            this.board[i][j].setRevealed(true);
            this.revealedCount++;
            if(this.board[i][j].getthreat() == 0){
                if (i + 1 < this.columns)
                    this.expand(i + 1, j);
                if (j + 1 < this.rows)
                    this.expand(i, j + 1);
                if (i - 1 >= 0)
                    this.expand(i - 1, j);
                if (j - 1 >= 0)
                    this.expand(i, j - 1);
            }
        }
    }

    public reveal(i: number, j: number, shiffed: boolean): void {
		this.flagAlert = false;
        if (!this.lost && !this.won) {
			if(this.checkIfAllFlagged()){
				this.won = true;				
				return;
			}
			if(shiffed){
				if(this.flagsCount >= this.minesCount && !this.board[i][j].isFlagged()){
					this.flagAlert = true;
					return;
				}
				if(this.board[i][j].isFlagged())
					this.flagsCount--;
				else 
					this.flagsCount++;
				this.board[i][j].toggleFlagged();
				this.checkIfAllFlagged();
				return;
			}
			if(this.board[i][j].isFlagged()){
				return;
			}
            if (this.board[i][j].isMine()) {
                this.revealAllMines();
                this.lost = true;
                return;
            }
            this.expand(i, j);
            if (this.revealedCount === this.columns * this.rows - this.minesCount) {
                this.won = true;
            }
			this.checkIfAllFlagged();
        }
    }
	
	private revealAllMines(): void {
		 for (let i = 0; i < this.columns; i++)
            for (let j = 0; j < this.rows; j++)
				this.board[i][j].setRevealed(true);
	}
	
	private checkIfAllFlagged(): void {
		if(this.won || this.lost)
			return;
		let c = 0;
		for (let i = 0; i < this.columns; i++)
            for (let j = 0; j < this.rows; j++)
				if(this.board[i][j].isMine() && this.board[i][j].isFlagged())
					c++;
		 if(c == this.minesCount)
			 this.won = true;
	}

}
