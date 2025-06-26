import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-animado',
  template: `
    <div [@changeState]="state" (click)="toggleState()" style="width:150px; height:150px; margin:10px; text-align:center; line-height:150px; color:white; cursor:pointer;">
      Estado: {{ state }}
    </div>
  `,
  animations: [
    trigger('changeState', [
      state('active', style({ backgroundColor: 'green', transform: 'scale(1.2)' })),
      state('inactive', style({ backgroundColor: 'red', transform: 'scale(1)' })),
      transition('inactive <=> active', animate('300ms ease-in'))
    ])
  ]
})
export class AnimadoComponent {
  state = 'inactive';

  toggleState() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }
}
