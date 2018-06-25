import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'web';
  usuario={
    nombre:'Danny',
    apellido:'Alvarez'
  };

  arregloNumeros=[5, 4, 3, 2, 1];
  mostrarTitulo=true;

  imagenURL="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
  imagenWidth="100";

  html=' <h1>hola <h1>'
   ;

  restarWidth(){
    this.imagenWidth -= 10;
  }

}
