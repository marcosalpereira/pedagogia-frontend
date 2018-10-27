import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
          MatIconModule, MatListModule, MatDatepickerModule, MatNativeDateModule,
          MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule,
          MatTabsModule, MatTableModule, MatCheckboxModule, MAT_DATE_LOCALE, MatSnackBarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { ProfessorEditComponent } from './professor/professor-edit/professor-edit.component';
import { AulaCreateComponent } from './aula/aula-create/aula-create.component';
import { AulaListComponent } from './aula/aula-list/aula-list.component';
import { FormsModule } from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion';
import { EntregaMaterialComponent } from './entrega-material/entrega-material.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'aula/registrar', component: AulaCreateComponent
  },
  {
    path: 'material/entregar', component: EntregaMaterialComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    ProfessorListComponent,
    ProfessorEditComponent,
    AulaCreateComponent,
    AulaListComponent,
    EntregaMaterialComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes), BrowserModule,
    LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule,
    MatButtonModule, MatCardModule, MatSelectModule,
    MatFormFieldModule, MatTabsModule, MatTableModule, MatCheckboxModule,
    MatInputModule, FormsModule, MatExpansionModule, MatSnackBarModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
