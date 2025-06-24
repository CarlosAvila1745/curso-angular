import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class TarjetaComponent {
  @HostBinding('class')
  clases = 'card p-3 mb-3 shadow';

  titulo = 'Componente con HostBinding';
  descripcion = 'Este es un ejemplo de uso de @HostBinding en Angular';
}
