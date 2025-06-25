import { createReducer, on } from '@ngrx/store';
import { agregarElemento, borrarElemento, votarPositivo, votarNegativo, Elemento } from './actions';

export interface Estado {
  elementos: Elemento[];
}

export const estadoInicial: Estado = {
  elementos: []
};

export const listaReducer = createReducer(
  estadoInicial,
  on(agregarElemento, (state, { nombre }) => {
    const nuevoElemento: Elemento = {
      id: new Date().getTime(),
      nombre,
      votosPositivos: 0,
      votosNegativos: 0
    };
    return { ...state, elementos: [...state.elementos, nuevoElemento] };
  }),
  on(borrarElemento, (state, { id }) => ({
    ...state,
    elementos: state.elementos.filter(e => e.id !== id)
  })),
  on(votarPositivo, (state, { id }) => ({
    ...state,
    elementos: state.elementos.map(e =>
      e.id === id ? { ...e, votosPositivos: e.votosPositivos + 1 } : e
    )
  })),
  on(votarNegativo, (state, { id }) => ({
    ...state,
    elementos: state.elementos.map(e =>
      e.id === id ? { ...e, votosNegativos: e.votosNegativos + 1 } : e
    )
  }))
);
