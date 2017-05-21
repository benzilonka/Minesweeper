export class Mine {
    private i: number;
    private j: number;
    private threat: number;
    private mine: boolean;
    private flagged: boolean;
	private revealed: boolean;
	private size: string;

    constructor(i: number, j: number, totalColumns: number) {
        this.i = i;
        this.j = j;
		this.size = ((window.screen.width / totalColumns) - 10) + "px";
        this.threat = 0;
        this.mine = false;
        this.flagged = false;
		this.revealed = false;		
    }

    setMine(mine: boolean): void {
        this.mine = mine;
    }

    isMine(): boolean {
        return this.mine;
    }

    setThreat(threat: number): void {
        this.threat = threat;
    }
	
	getthreat(): number {
        return this.threat;
    }

    setRevealed(revealed: boolean): void {
        this.revealed = revealed;
    }
	
	toggleFlagged(): void {
		this.flagged = !this.flagged;
	}

    isRevealed(): boolean {
        return this.revealed;
    }
	
	isFlagged(): boolean {
		return this.flagged;
	}
}