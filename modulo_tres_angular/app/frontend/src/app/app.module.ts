import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducer';
import { AppRoutingModule } from './app-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { TaskService } from './services/task.service';
import { DexieService } from './services/dexie.service';
import { Logger, ConsoleLogger } from './services/logger';
import { A, B } from './services/classes-a-b';
import { API_URL } from './tokens';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ tasks: appReducer }),
    FormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    TaskService,
    DexieService,
    { provide: API_URL, useValue: 'http://localhost:3000/api' },
    { provide: Logger, useClass: ConsoleLogger },
    B,
    { provide: A, useExisting: B }
  ],
  bootstrap: [TaskListComponent]
})
export class AppModule { }
