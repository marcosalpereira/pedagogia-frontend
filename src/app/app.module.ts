import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatDatepickerModule, MatNativeDateModule,
  MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule,
  MatTabsModule, MatTableModule, MatCheckboxModule, MAT_DATE_LOCALE, MatSnackBarModule, MatChipsModule
} from '@angular/material';

import {MatGridListModule} from '@angular/material/grid-list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { ProfessorEditComponent } from './professor/professor-edit/professor-edit.component';
import { AulaCreateComponent } from './aula/aula-create/aula-create.component';
import { AulaListComponent } from './aula/aula-list/aula-list.component';
import { FormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { EntregaMaterialComponent } from './entrega-material/entrega-material.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

import { ChartModule } from 'angular-highcharts';
import { GraficosComponent } from './graficos/graficos.component';
import { AuthGuard } from './auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { AppendTokenInterceptor } from './auth/append-token.interceptor';
import { HandleNotLoggedInInterceptor } from './auth/handle-not-logged-in.interceptor';
import { SolicitarAcessoComponent } from './auth/solicitar-acesso/solicitar-acesso.component';
import { ConfirmarAcessoComponent } from './auth/confirmar-acesso/confirmar-acesso.component';
import { UsuarioComponent } from './auth/usuario/usuario.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaEditComponent } from './turma/turma-edit/turma-edit.component';
import { DiaSemanaPipe } from './pipes/dia-semana.pipe';
import { AlunoDetailComponent } from './turma/aluno-detail/aluno-detail.component';
import { SortByAlunoPipe } from './aula/pipes/sort-by-aluno.pipe';
import { SortByNomePipe } from './shared/pipes/sort-by-nome.pipe';
import { SortByNumeroPipe } from './shared/pipes/sort-by-numero.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'aula/registrar', component: AulaCreateComponent, canActivate: [AuthGuard] },
  { path: 'material/entregar', component: EntregaMaterialComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'signon', component: SolicitarAcessoComponent},
  { path: 'signon-confirm', component: ConfirmarAcessoComponent},
  { path: 'usuarios', component: UsuarioComponent},
  { path: 'turmas', component: TurmaListComponent},
  { path: 'turmas/:id', component: TurmaEditComponent},
  { path: 'graficos', component: GraficosComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfessorListComponent,
    ProfessorEditComponent,
    AulaCreateComponent,
    AulaListComponent,
    EntregaMaterialComponent,
    HomeComponent,
    LoginComponent,
    GraficosComponent,
    SolicitarAcessoComponent,
    ConfirmarAcessoComponent,
    UsuarioComponent,
    TurmaListComponent,
    TurmaEditComponent,
    DiaSemanaPipe,
    AlunoDetailComponent,
    SortByAlunoPipe,
    SortByNomePipe,
    SortByNumeroPipe
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}), BrowserModule,
    LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule,
    MatButtonModule, MatCardModule, MatSelectModule,
    MatFormFieldModule, MatTabsModule, MatTableModule, MatCheckboxModule,
    MatInputModule, FormsModule, MatExpansionModule, MatSnackBarModule,
    ChartModule, HttpClientModule, MatGridListModule, MatChipsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppendTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleNotLoggedInInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
