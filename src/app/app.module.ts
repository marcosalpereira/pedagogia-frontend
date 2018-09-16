import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChamadaComponent } from './chamada/chamada.component';
import { AcompanhamentoAulaComponent } from './acompanhamento-aula/acompanhamento-aula.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chamada', component: ChamadaComponent },
  { path: 'acompanhamento-aula', component: AcompanhamentoAulaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ChamadaComponent,
    AcompanhamentoAulaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
