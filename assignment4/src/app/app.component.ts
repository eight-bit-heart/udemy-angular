import { Component } from '@angular/core';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numberElements = [];

  handleNumberEmitted(value: number){
    if(value % 2 === 0){
      this.numberElements.push({
        type: 'even',
        value: value
      });
    }else{
      this.numberElements.push({
        type: 'odd',
        value: value
      });
    }
  }
}
