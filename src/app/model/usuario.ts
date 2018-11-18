import { BaseModel } from './base-model';
import { Sede } from './sede';

export interface Usuario extends BaseModel {
    email: string
    nome: string;
    sede: Sede;
    perfils: string[];
}
