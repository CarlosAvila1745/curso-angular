import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { OtroComponent } from './otro/otro.component';

const routes: Routes = [
  { path: '', redirectTo: 'padre', pathMatch: 'full' },
  { path: 'padre', component: PadreComponent },
  { path: 'otro', component: OtroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
