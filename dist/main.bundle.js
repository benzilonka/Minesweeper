webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app',
        template: __webpack_require__(164)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_game_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_mine_mine_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_game_game_component__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'Minesweeper/dist', component: __WEBPACK_IMPORTED_MODULE_9__components_game_game_component__["a" /* GameComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_mine_mine_component__["a" /* MineComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_game_game_component__["a" /* GameComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_game_service__["a" /* GameService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = (function () {
    function GameComponent(game) {
        this.game = game;
        this.rows = 10;
        this.columns = 10;
        this.mines = 9;
        this.superman = false;
        this.game = game;
        this.game.restart(this.rows, this.columns, this.mines);
    }
    GameComponent.prototype.mineClicked = function (event, i, j) {
        var shiffed = event.shiftKey;
        this.game.reveal(i, j, shiffed);
    };
    GameComponent.prototype.startGame = function () {
        if (this.mines > this.rows * this.columns) {
            this.mines = this.rows * this.columns;
        }
        this.game.restart(this.rows, this.columns, this.mines);
    };
    GameComponent.prototype.setSuperman = function () {
        this.superman = !this.superman;
    };
    GameComponent.prototype.isFlagAlert = function () {
        return this.game.flagAlert;
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'game',
        template: __webpack_require__(165),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]) === "function" && _a || Object])
], GameComponent);

var _a;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MineComponent = (function () {
    function MineComponent() {
        this.threat = 0;
        this.mine = false;
        this.revealed = false;
        this.flagged = false;
        this.size = '50px';
    }
    return MineComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], MineComponent.prototype, "threat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], MineComponent.prototype, "mine", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], MineComponent.prototype, "revealed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], MineComponent.prototype, "flagged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], MineComponent.prototype, "size", void 0);
MineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'mine',
        template: __webpack_require__(166),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [])
], MineComponent);

//# sourceMappingURL=mine.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mine; });
var Mine = (function () {
    function Mine(i, j, totalColumns) {
        this.i = i;
        this.j = j;
        this.size = ((window.screen.width / totalColumns) - 10) + "px";
        this.threat = 0;
        this.mine = false;
        this.flagged = false;
        this.revealed = false;
    }
    Mine.prototype.setMine = function (mine) {
        this.mine = mine;
    };
    Mine.prototype.isMine = function () {
        return this.mine;
    };
    Mine.prototype.setThreat = function (threat) {
        this.threat = threat;
    };
    Mine.prototype.getthreat = function () {
        return this.threat;
    };
    Mine.prototype.setRevealed = function (revealed) {
        this.revealed = revealed;
    };
    Mine.prototype.toggleFlagged = function () {
        this.flagged = !this.flagged;
    };
    Mine.prototype.isRevealed = function () {
        return this.revealed;
    };
    Mine.prototype.isFlagged = function () {
        return this.flagged;
    };
    return Mine;
}());

//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "button {\n    border: none;\n\tborder-radius: 4px;\n\tbackground-color: #5cb85c;\n\tcolor: #fff;\n\twidth: 70px;\n\theight: 30px;\n\tcursor: pointer;\n}\n.game-over-wrapper {\n    z-index: 999;\n    font-size: 40px;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n}\n.you-win {\n    color: #c872ff;\n\tmargin: 0;\n}\n.you-lose {\n    color: #d37d5b;\n\tmargin: 0;\n}\n.game-wrapper {\n    background-color: transparent;\n    text-align: center;\n\twidth: auto;\n    padding: 20px;\n}\nform {\n\tmargin: 20px;\n}\ninput {\n\twidth: 50px;\n\tborder-radius: 4px;\n    border: solid 1px #aaa;\n    height: 22px;\n    margin: 8px;\n    padding: 4px;\n}\n\n.superman {\n\twidth: 150px;\n\tmargin: 10px;\n\tbackground-color: #af0000;\n}\n.superman-active {\n\tbackground-color: #325ba2;\n\tfont-wight: bold;\n}\n.flag-alert {\n\tcolor: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, ".mine {  \n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  max-height: 50px;\n  max-width: 50px;\n  text-align: center;\n  vertical-align: middle;\n  border: none;\n  margin-bottom: 4px;\n  transition: all 0.2s ease 0s;\n  background-color: #0853bf;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px 0px;\n}\n.mine div {\n\tdisplay: -ms-inline-grid;\n\tdisplay: inline-grid;\n\theight: 100%;\n}\n.mine div p {\n\tfont-weight: bold;\n\tmargin: auto;\n}\n.mine-flag {\n\tbackground-color: #fff;\n\tbackground-image: url(" + __webpack_require__(219) + ");\n\tbackground-size: 50%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n.mine-red {\n  background-image: url(" + __webpack_require__(220) + ");\n\tbackground-size: 50%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n.mine-default {\n  color: #575eab;\n  background-color: #fff;\n}\n.mine-brown {\n  color: #795548;\n}\n.mine-white {\n  color: #fff;\n}\n.mine-cyan {\n  color: #278992;\n}\n.mine-pink {\n  color: #ff14e1;\n}\n.mine-yellow {\n  color: #91a200;\n}\n.mine-orange {\n  color: #ff9914;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div class=\"game-wrapper\"> \n\t<h1>Minesweeper</h1>\n\t<div *ngIf=\"game.lost\" class=\"game-over-wrapper animated tada\">\n\t\t<h1 class=\"you-lose\">You Loss!</h1>\n\t\t<button (click)=\"startGame()\">Restart</button>\n\t</div>\n\t<div *ngIf=\"game.won\" class=\"game-over-wrapper animated tada\">\n\t\t<h1 class=\"you-win\">You Win!</h1>\n\t\t<button (click)=\"startGame()\">Restart</button>\n\t</div>\n\t\n\t<form *ngIf=\"!game.lost && !game.won\">\n\t\t<label>Columns:</label><input placeholder=\"Cols\" min=\"1\" [(ngModel)]=\"columns\" name=\"columns\" type=\"number\">\n\t\t<label>Rows:</label><input placeholder=\"Rows\" min=\"1\" [(ngModel)]=\"rows\" name=\"rows\" type=\"number\">\n\t\t<label>Mines:</label><input placeholder=\"Mines\" min=\"1\" [(ngModel)]=\"mines\" name=\"mines\" type=\"number\">\n\t\t&nbsp;&nbsp;\n\t\t<button (click)=\"startGame()\" class=\"animated\">Restart</button>\n\t\t<br>\n\t\t<p [ngClass]=\"{'flag-alert': isFlagAlert()}\">Remaining flags: {{game.minesCount - game.flagsCount}}</p>\n\t</form>\n\t\n\t<ng-container *ngFor=\"let row of game.board\">\n        <ng-container *ngFor=\"let mine of row\">\n            <mine [mine]=\"mine.mine\" [size]=\"mine.size\" [revealed]=\"mine.revealed || superman || game.won || game.lost\" [threat]=\"mine.threat\" [flagged]=\"mine.flagged\" (click)=\"mineClicked($event, mine.i, mine.j)\"></mine>\n        </ng-container>\n\t\t<br>\n    </ng-container>\n\t\n\t<button (click)=\"setSuperman()\" [ngClass]=\"{'superman': true, 'superman-active': superman}\">Superman Mode {{superman ? 'ON' : 'OFF'}}</button>\n</div>"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<a [ngClass]=\"{'mine': true, 'mine-red': revealed && mine, 'mine-default': revealed, 'mine-flag': flagged, \n\t\t\t\t'mine-white': revealed && !mine && threat == 0, \n\t\t\t\t'mine-cyan': revealed && !mine && threat == 1, \n\t\t\t\t'mine-pink': revealed && !mine && threat == 2, \n\t\t\t\t'mine-yellow': revealed && !mine && threat == 3, \n\t\t\t\t'mine-orange': revealed && !mine && threat >= 4}\"\n\t\t\t\t[style.width]=\"size\" [style.height]=\"size\">\n\t<div><p *ngIf=\"(revealed && !flagged && threat > 0 && !mine)\">{{threat}}</p></div>\n</a>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Minesweeper/dist/mine.108dbed7810e4c10c24e.png";

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mine__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });

var GameService = (function () {
    function GameService() {
    }
    GameService.prototype.restart = function (columns, rows, mines) {
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
    };
    GameService.prototype.generateMineBoxes = function () {
        for (var i = 0; i < this.columns; i++) {
            this.board[i] = [];
            for (var j = 0; j < this.rows; j++)
                this.board[i][j] = new __WEBPACK_IMPORTED_MODULE_0__mine__["a" /* Mine */](i, j, this.columns);
        }
    };
    GameService.prototype.generateMines = function () {
        var minesCount = this.minesCount;
        while (minesCount > 0) {
            var rand1 = Math.floor(Math.random() * this.columns);
            var rand2 = Math.floor(Math.random() * this.rows);
            if (!this.board[rand1][rand2].isMine()) {
                this.board[rand1][rand2].setMine(true);
                minesCount--;
            }
        }
    };
    GameService.prototype.generateThreats = function () {
        for (var i = 0; i < this.columns; i++) {
            for (var j = 0; j < this.rows; j++) {
                var threat = 0;
                if (i != 0)
                    if (this.board[i - 1][j].isMine())
                        threat++;
                if (i != this.columns - 1)
                    if (this.board[i + 1][j].isMine())
                        threat++;
                if (j != 0)
                    if (this.board[i][j - 1].isMine())
                        threat++;
                if (j != this.rows - 1)
                    if (this.board[i][j + 1].isMine())
                        threat++;
                if (j != this.rows - 1)
                    if (i != this.columns - 1)
                        if (this.board[i + 1][j + 1].isMine())
                            threat++;
                if (j != 0)
                    if (i != 0)
                        if (this.board[i - 1][j - 1].isMine())
                            threat++;
                if (j != this.rows - 1)
                    if (i != 0)
                        if (this.board[i - 1][j + 1].isMine())
                            threat++;
                if (j != 0)
                    if (i != this.columns - 1)
                        if (this.board[i + 1][j - 1].isMine())
                            threat++;
                this.board[i][j].setThreat(threat);
            }
        }
    };
    GameService.prototype.expand = function (i, j) {
        if (!this.board[i][j].isRevealed()) {
            this.board[i][j].setRevealed(true);
            this.revealedCount++;
            if (this.board[i][j].getthreat() == 0) {
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
    };
    GameService.prototype.reveal = function (i, j, shiffed) {
        this.flagAlert = false;
        if (!this.lost && !this.won) {
            if (this.checkIfAllFlagged()) {
                this.won = true;
                return;
            }
            if (shiffed) {
                if (this.flagsCount >= this.minesCount && !this.board[i][j].isFlagged()) {
                    this.flagAlert = true;
                    return;
                }
                if (this.board[i][j].isFlagged())
                    this.flagsCount--;
                else
                    this.flagsCount++;
                this.board[i][j].toggleFlagged();
                this.checkIfAllFlagged();
                return;
            }
            if (this.board[i][j].isFlagged()) {
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
    };
    GameService.prototype.revealAllMines = function () {
        for (var i = 0; i < this.columns; i++)
            for (var j = 0; j < this.rows; j++)
                this.board[i][j].setRevealed(true);
    };
    GameService.prototype.checkIfAllFlagged = function () {
        if (this.won || this.lost)
            return;
        var c = 0;
        for (var i = 0; i < this.columns; i++)
            for (var j = 0; j < this.rows; j++)
                if (this.board[i][j].isMine() && this.board[i][j].isFlagged())
                    c++;
        if (c == this.minesCount)
            this.won = true;
    };
    return GameService;
}());

//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(105);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.bundle.js.map
