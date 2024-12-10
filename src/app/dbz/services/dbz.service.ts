import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{      // Character-> interfaz creada en interfaces
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power:   8500

  }];


  addCharacter( character: Character ): void{  // evento emitido desde add.component

    const newCharacter: Character= {id: uuid(), ...character}      //le estamos pidiendo que tome todo lo de character

    this.characters.push(character)     // inserta al final de arreglo
  }

  // onNewId(index:number){                // evento emitido desde list.component
  //   this.characters.splice(index,1)     //splice borra
  // }

  deleteCharacterById( id : string ){
    this.characters = this.characters.filter( character => character.id !== id );   // evento emitido desde list.component

  }

}
