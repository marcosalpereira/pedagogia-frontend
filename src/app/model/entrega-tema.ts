import { Aluno } from "./aluno";
import { Tema } from "./tema";
import { Turma } from "./turma";
import { BaseModel } from "./base-model";

export interface EntregaTema extends BaseModel {
    turma: Turma;
    tema: Tema;
    aluno: Aluno;
    entregue: boolean;
    data?: Date;
}
