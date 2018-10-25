import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatTabsModule, MatTableModule, MatCheckboxModule, MAT_DATE_LOCALE } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { ProfessorEditComponent } from './professor/professor-edit/professor-edit.component';
import { AulaCreateComponent } from './aula/aula-create/aula-create.component';
import { AulaListComponent } from './aula/aula-list/aula-list.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'aula/registrar', component: AulaCreateComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfessorListComponent,
    ProfessorEditComponent,
    AulaCreateComponent,
    AulaListComponent
  ],
  imports: [
    RouterModule.forRoot(routes), BrowserModule,
    LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule,
    MatButtonModule, MatCardModule, MatSelectModule,
    MatFormFieldModule, MatTabsModule, MatTableModule, MatCheckboxModule,
    MatInputModule, FormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
