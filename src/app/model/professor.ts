import { BaseModel, Named } from './base-model';

export interface Professor extends BaseModel, Named {
    nome: string;
}
