import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiErrorHandlerService } from './api-error-handler.service';
import { EntregaTema } from './model/entrega-tema';
import { Tema } from './model/tema';
import { Turma, DAYOFWEEK, Nivel } from './model/turma';
import { Materia } from './model/materia';
import { Sede } from './model/sede';
import { Aula } from './model/aula';
import { Professor } from './model/professor';
import { Aluno } from './model/aluno';
import { environment } from 'src/environments/environment';

const SERVER_URL = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  constructor(
    private http: HttpClient,
    private errorHandler: ApiErrorHandlerService) { }

  findLastTemaEntregue(turma: Turma, materia: Materia): Observable<Tema> {
    const idTurma = `${turma.id}`;
    const idMateria = `${materia.id}`;
    const params = { idTurma, idMateria };
    return this.http
      .get<Tema>(`${SERVER_URL}/entregas-tema/last`, { params })
      .pipe(
        catchError(this.errorHandler.handle([404]))
      );
  }

  findEntregasTema(turma: Turma, tema: Tema): Observable<EntregaTema[]> {
    const idTurma = `${turma.id}`;
    const idTema = `${tema.id}`;
    const params = { idTurma, idTema };
    return this.http
      .get<EntregaTema[]>(`${SERVER_URL}/entregas-tema`, { params })
      .pipe(
        catchError(this.errorHandler.handle())
      );
  }

  findMaterias(turma: Turma): Observable<Materia[]> {
    return this.http
      .get<Materia>(`${SERVER_URL}/turmas/${turma.id}/materias`)
      .pipe(
        catchError(this.errorHandler.handle())
      );
  }

  findProfessores(turma: Turma): Observable<Professor[]> {
    return this.http
      .get<Professor[]>(`${SERVER_URL}/turmas/${turma.id}/professores`)
      .pipe(
        catchError(this.errorHandler.handle())
      );
  }

  findAlunos(turma: Turma): Observable<Aluno[]> {
    return this.http
      .get<Aluno[]>(`${SERVER_URL}/turmas/${turma.id}/alunos`)
      .pipe(
        catchError(this.errorHandler.handle())
      );
  }

  findSedes(): Observable<Sede[]> {
    return this.http
      .get<Sede[]>(`${SERVER_URL}/sedes`)
      .pipe(catchError(this.errorHandler.handle()));
  }

  findTurmas(diaSemana: DAYOFWEEK, sede: Sede): Observable<Turma[]> {
    const params = {};
    if (sede) { params['idSede'] = sede.id; }
    if (diaSemana) { params['diaSemana'] = diaSemana; }

    return this.http
      .get<Turma[]>(`${SERVER_URL}/turmas`, { params })
      .pipe(catchError(this.errorHandler.handle()));
  }

  findTurma(id: number): Observable<Turma> {
    return this.http
    .get<Turma>(`${SERVER_URL}/turmas/${id}`)
    .pipe(
      catchError(this.errorHandler.handle())
    );
  }

  saveTurma(turma: Turma): Observable<void> {
    return this.http.put<Turma>(`${SERVER_URL}/turmas/${turma.id}`, turma)
      .pipe(
        catchError(this.errorHandler.handle())
    );
  }

  registrarEntregaTema(entregasTema: EntregaTema[]): Observable<EntregaTema[]> {
    return this.http
      .post<EntregaTema[]>(`${SERVER_URL}/entregas-tema`, entregasTema)
      .pipe(catchError(this.errorHandler.handle()));
  }

  findAula(turma: Turma, materia: Materia, pdata: Date): Observable<Aula> {
    const idTurma = `${turma.id}`;
    const idMateria = `${materia.id}`;
    const dt = new Date(pdata.getTime() - (pdata.getTimezoneOffset() * 60000));
    const data = `${dt.toISOString()}`;
    const params = { idTurma, idMateria, data };
    return this.http
      .get<Turma[]>(`${SERVER_URL}/aulas`, { params })
      .pipe(catchError(this.errorHandler.handle([404])));

  }

  registrarAula(aula: Aula): Observable<Aula> {
    aula.materia.temas = [];
    return this.http
      .post<Aula>(`${SERVER_URL}/aulas`, aula)
      .pipe(catchError(this.errorHandler.handle()));
  }

  public getFotoAluno(aluno: Aluno): Observable<Blob> {
    return this.http
      .get(`${SERVER_URL}/alunos/${aluno.matricula}/foto`, {
        responseType: "blob"
      });
  }
}
