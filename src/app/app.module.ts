import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { ProfessorEditComponent } from './professor/professor-edit/professor-edit.component';
import { PresencaComponent } from './presenca/presenca.component';

const routes: Routes = [
  {
    path: 'presenca', component: PresencaComponent
  }, 
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfessorListComponent,
    ProfessorEditComponent,
    PresencaComponent
  ],
  imports: [
    RouterModule.forRoot(routes), BrowserModule, 
    LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, 
    MatIconModule, MatListModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
