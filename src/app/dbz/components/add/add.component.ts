import { Component, EventEmitter, Output, } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();  // evento emitido a componente padre main.page

  public character: Character = {

      name: '',
      power: 0

  };

  emitCharacter():void{
  console.log(this.character)

  if (this.character.name.length === 0) return;      // Nombre es diferente de 0

    this.onNewCharacter.emit({...this.character})

    this.character.name = '';
    this.character.power = 0;

  }



}
