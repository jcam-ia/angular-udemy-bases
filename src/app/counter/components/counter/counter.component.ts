import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

<h3>Counter: {{counter}}</h3>

<button (click)="increasBy(+1)">+1</button>
<button (click)="restBy()">Reinicion</button> <!--  ()para mandarlo a llamar -->
<button (click)="increasBy(-1)">-1</button>
  `
})

export class CounterComponent implements OnInit {

  public counter: number = 10;

  increasBy(value: number):void{      // creacion de metodo.
    this.counter += value ;

  }

  restBy(){
    this.counter = 10 ;

  }

  ngOnInit() { }
}
