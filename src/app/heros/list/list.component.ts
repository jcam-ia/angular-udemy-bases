import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['spider','hulk','xmen', 'thor', "root"];
  public deleteHero?: string;

  removeLasHero():void{
    this.deleteHero = this.heroNames.pop();

  }

}
