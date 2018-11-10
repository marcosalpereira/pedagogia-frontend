import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntregaTema } from './model/entrega-tema';
import { Tema } from './model/tema';
import { Turma, dayOfWeek, DAYOFWEEK } from './model/turma';
import { Materia } from './model/materia';
import { catchError } from 'rxjs/operators';
import { ApiErrorHandlerService } from './api-error-handler-service.service';
import { Sede } from './model/sede';

const SERVER_URL = 'http://localhost:8080/pedagogia/api';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient,
    private errorHandler: ApiErrorHandlerService) { }

  findEntregas(turma: Turma, tema: Tema): Observable<EntregaTema[]> {
    const idTurma = `${turma.id}`;
    const idTema = `${tema.id}`;
    const params = { idTurma, idTema };
    return this.http
      .get<EntregaTema[]>(`${SERVER_URL}/entregas-tema`, { params })
      .pipe(catchError(this.errorHandler.handle()));
  }

  findTurmas(diaSemana: DAYOFWEEK, sede: Sede): Observable<Turma[]> {
    const idSede = `${sede.id}`;
    const params = { diaSemana, idSede };
    return this.http
      .get<Turma[]>(`${SERVER_URL}/turmas`, { params })
      .pipe(catchError(this.errorHandler.handle()));
  }

  findMaterias(): Observable<Materia[]> {
    return this.http
      .get<Materia[]>(`${SERVER_URL}/materias`)
      .pipe(catchError(this.errorHandler.handle()));
  }

  registrarEntregaTema(entregasTema: EntregaTema[]): Observable<number[]> {
    return this.http
      .post<number[]>(`${SERVER_URL}/entregas-tema`, entregasTema)
      .pipe(catchError(this.errorHandler.handle()));
  }

}
