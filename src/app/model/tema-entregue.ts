import { Aluno } from "./aluno";
import { Tema } from "./tema";
import { Turma } from "./turma";

export interface TemaEntregue {
    turma: Turma;
    tema: Tema;
    entregas: Entrega[];
}

export interface Entrega {
    entregue: boolean;
    aluno: Aluno;
    data?: Date;
}
