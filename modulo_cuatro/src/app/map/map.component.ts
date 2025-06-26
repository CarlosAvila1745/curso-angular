import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent {
  showPopup = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}
