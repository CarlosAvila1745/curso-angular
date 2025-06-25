import { createAction, props } from '@ngrx/store';

export interface Elemento {
  id: number;
  nombre: string;
  votosPositivos: number;
  votosNegativos: number;
}

export const agregarElemento = createAction(
  '[Lista] Agregar Elemento',
  props<{ nombre: string }>()
);

export const borrarElemento = createAction(
  '[Lista] Borrar Elemento',
  props<{ id: number }>()
);

export const votarPositivo = createAction(
  '[Lista] Votar Positivo',
  props<{ id: number }>()
);

export const votarNegativo = createAction(
  '[Lista] Votar Negativo',
  props<{ id: number }>()
);
