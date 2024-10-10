import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})


export class HeroComponent {

  public name: string = 'root';
  public age: number = 13;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  get HeroDescription():string{
    return`${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'juan'
  }

  changeAge():void{
    this.age =20;
  }

  Reset():void{
    this.name='root';
    this.age= 13;

  }

}
