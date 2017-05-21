import {Component, Input} from '@angular/core';

@Component({
    selector: 'mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.css']
})
export class MineComponent {
    @Input() threat = 0;
    @Input() mine = false;
    @Input() revealed = false;
	@Input() flagged = false;
	@Input() size = '50px';
	
    constructor() {
    }
}
