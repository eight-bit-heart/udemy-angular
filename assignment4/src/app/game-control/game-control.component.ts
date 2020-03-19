import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameRunning: boolean = false;
  currentNumber: number = 0;

  gameInterval;
  @Output() numberEmitted = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.gameRunning = true;
    this.gameInterval = setInterval(()=>{
      this.executeGameLoop();
    }, 1000);
  }

  stopGame(){
    this.gameRunning = false;
    clearInterval(this.gameInterval);
  }

  executeGameLoop(){
    console.log("Number " + this.currentNumber + " emitted.");
    this.numberEmitted.emit(this.currentNumber);
    this.currentNumber++;
  }

}
