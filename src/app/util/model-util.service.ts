import { Injectable } from '@angular/core';
import { BaseModel } from '../model/base-model';

@Injectable({
  providedIn: 'root'
})
export class ModelUtilService {

  constructor() { }

  public compareFn(c1: BaseModel, c2: BaseModel): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
