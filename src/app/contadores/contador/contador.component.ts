import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})


export class ContadorComponent {

    titulo: string = 'Contador APP';
  numero: number = 0;
  base: number = 10;

  textoDeInput: string = '';


  acumular(accion:string, base:number = this.base)
  {
    switch(accion)
    {
          case '-':
          {
            this.numero -= base;
            break;
          }

          default:
          {
            this.numero += base;
            break;
          }
    }
  }
}