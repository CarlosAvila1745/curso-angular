import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

// Validación personalizada parametrizable
export function longitudMinima(min: number): ValidatorFn {
  return (control: AbstractControl) => {
    const valor = control.value;
    if (valor && valor.length < min) {
      return { longitudMinima: { requiredLength: min, actualLength: valor.length } };
    }
    return null;
  };
}

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html'
})
export class PadreComponent {
  miFormulario: FormGroup;
  datoRecibido: string = '';
  listadoElementos: string[] = [];

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, longitudMinima(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  recibirDato(valor: { campo1: string; campo2: string }) {
    this.datoRecibido = `Campo1: ${valor.campo1}, Campo2: ${valor.campo2}`;
  }

  agregarElemento() {
    if (this.miFormulario.valid) {
      this.listadoElementos.push(this.miFormulario.get('nombre')?.value);
      this.miFormulario.reset();
    }
  }
}
