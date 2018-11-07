import { BaseModel } from "./base-model";
import { Tema } from "./tema";

export interface Capitulo extends BaseModel {
    tema: Tema;
    numero: number;
    nome: string;
}
