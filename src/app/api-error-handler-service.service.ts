import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MessageService } from './util/message.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiErrorHandlerService {

  constructor(private message: MessageService) { }

  handle() {
    return (requestError: any): Observable<any> => {

      if (!environment.production) {
        console.error('requestError', requestError);
      }

      const erros = this.recuperarErros(requestError);
      erros.forEach(erro => {
        this.message.show(erro, undefined, 5000);
      });

      return throwError(requestError);

    };
  }

  private recuperarErros(requestError: any): string[] {

    switch (requestError.status) {
      case 401: return this.unauthorized(requestError);
      case 403: return this.forbidden(requestError);
      case 409: return this.conflict(requestError);
      default: return this.other(requestError);
    }

  }


  private other(requestError: any): string[] {

    const errors = [];
    try {
      const error = requestError.error;
      for (const prop in error) {
        if (error.hasOwnProperty(prop) && error[prop] && error[prop].forEach) {
          error[prop].forEach(item => {
            if (item.message) {
              errors.push('Erro de Validação' + item.message);
            }
          });
        }
      }
    } catch (e) {
      if (!environment.production) {
        console.error('Translating Errors:', e);
      }
    }

    if (errors.length === 0) {
      errors.push('Ocorreu um erro inesperado.' +
        'Por favor, tente novamente mais tarde. Se o erro persistir, contate o suporte do sistema.');
    }

    return errors;
  }

  private unauthorized(requestError: any): string[] {
    const errors = ['Não Autorizado' +
      'Você precisa estar logado para executar essa transação.'];
    return errors;
  }

  private forbidden(requestError: any): string[] {
    return ['Proibido' + 'Você não tem permissão para executar essa transação.'];
  }

  private conflict(requestError: any): string[] {
    return ['Conflito' + 'Esse recurso já foi atualizado por outra transação.'];
  }

}
