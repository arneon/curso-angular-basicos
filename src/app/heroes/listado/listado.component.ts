import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Superman', 'Thor', 'Hulk'];
  heroesBorrados: string[] = [];
  
  borrarHeroe()
  {
    if(this.heroes.length > 0)
    {
      this.heroesBorrados.push(this.heroes[0]);
      this.heroes.shift();
    }
    
  }

}
