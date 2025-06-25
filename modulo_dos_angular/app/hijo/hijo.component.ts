import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  template: `
    <form (ngSubmit)="enviarDatos()" [formGroup]="formularioHijo">
      <input type="text" formControlName="campo1" placeholder="Campo 1" />
      <input type="text" formControlName="campo2" placeholder="Campo 2" />
      <button type="submit" [disabled]="formularioHijo.invalid">Enviar</button>
    </form>
  `
})
export class HijoComponent {
  @Output() datosEnviados = new EventEmitter<{ campo1: string; campo2: string }>();

  formularioHijo = this.fb.group({
    campo1: [''],
    campo2: ['']
  });

  constructor(private fb: FormBuilder) {}

  enviarDatos() {
    if (this.formularioHijo.valid) {
      this.datosEnviados.emit(this.formularioHijo.value);
    }
  }
}
