import { BaseModel } from './base-model';
import { Sede } from './sede';

export interface Usuario extends BaseModel {
    email: string;
    nome: string;
    sede: Sede;
    perfils?: Perfil[];
    senha: string;
    enabled?: boolean;
}

export interface Perfil extends BaseModel {
  nome: string;
}
