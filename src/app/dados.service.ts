import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntregaTema } from './model/entrega-tema';
import { Tema } from './model/tema';
import { Turma, dayOfWeek } from './model/turma';
import { Materia } from './model/materia';

const SERVER_URL = 'http://localhost:8080/pedagogia/api';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  findEntregas(turma: Turma, tema: Tema): Observable<EntregaTema[]> {
    const idTurma = `${turma.id}`;
    const idTema = `${tema.id}`;
    const params = { idTurma, idTema };
    return this.http.get<EntregaTema[]>(`${SERVER_URL}/entregas-tema`, { params });
  }

  findTurmas(data: Date): Observable<Turma[]> {
    const diaSemana = `${dayOfWeek(data)}`;
    const params = { diaSemana };
    return this.http.get<Turma[]>(`${SERVER_URL}/turmas`, { params });
  }

  findMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${SERVER_URL}/turmas`);
  }

  registrarEntregaTema(entregasTema: EntregaTema[]): Observable<number[]> {
    return this.http.post<number[]>(`${SERVER_URL}/entregas-tema`, entregasTema);
  }

}
