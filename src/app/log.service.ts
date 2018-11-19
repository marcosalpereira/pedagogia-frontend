import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  debug(message?: any, ...optionalParams: any[]) {
    if (!environment.production) {
      if (optionalParams && optionalParams.length) {
        console.log(message, optionalParams);
      } else {
        console.log(message);
      }
    }
  }
}
