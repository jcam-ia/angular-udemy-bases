import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor ( private dbzService: DbzService ) {}    // inyeccion de servicios

    get characters(): Character[]{
      return [...this.dbzService.characters];
    }

    onDeleteCharacter(id: string):void{                 //Metodo eliminar personaje
      this.dbzService.deleteCharacterById (id);
    }

    onNewCharacter (character : Character) {           //Metodo Agregar personaje
       this.dbzService.addCharacter ( character)
    }

}
