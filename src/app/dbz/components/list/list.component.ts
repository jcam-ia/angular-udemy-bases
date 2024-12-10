import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input()
public characterList: Character[] = [{
  name: 'Trunk',
  power: 10
}]


@Output()

// deleteCharacterById: EventEmitter<string> = new EventEmitter()

// deleteById(id: string):void{
//   this.deleteCharacterById.emit()
// }



onDelete: EventEmitter<string>  = new EventEmitter()     // emision de evento al componente padre main-page

  onDeleteCharacter(id: string ):void{
    if (!id) return;
    console.log(id)
    this.onDelete.emit(id);
  }


}




