import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Estado, Elemento } from '../store/actions';
import { votarPositivo, votarNegativo, agregarElemento, borrarElemento } from '../store/actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  elementos$: Observable<Elemento[]>;

  constructor(private store: Store<{ lista: Estado }>) {
    this.elementos$ = this.store.select(state => state.lista.elementos);
  }

  votarPositivo(id: number) {
    this.store.dispatch(votarPositivo({ id }));
  }

  votarNegativo(id: number) {
    this.store.dispatch(votarNegativo({ id }));
  }

  agregar(nombre: string) {
    if(nombre.trim() === '') return;
    this.store.dispatch(agregarElemento({ nombre }));
  }

  borrar(id: number) {
    this.store.dispatch(borrarElemento({ id }));
  }
}
