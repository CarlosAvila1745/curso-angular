import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.html',
  styleUrls: ['./listado.css']
})
export class ListadoComponent {
  // Lista de elementos
  elementos: string[] = ['Elemento 1', 'Elemento 2'];

  // Función para agregar un nuevo elemento
  agregarElemento(nuevoElemento: string) {
    if(nuevoElemento.trim() !== ''){
      this.elementos.push(nuevoElemento);
    }
  }
}
