import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MessageService } from './util/message.service';
import { throwError } from 'rxjs';

class Erro {
  constructor(public tipo: string, public mensagem: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ApiErrorHandlerService {

  constructor(private message: MessageService) { }

  handle(noMsgsFor: number[] = []) {
    return (requestError: any): Observable<any> => {

      if (noMsgsFor.find(e => e === requestError.status)) {
        if (!environment.production) {
          console.log(`Ignored: ${requestError.status}`);
        }
      } else {
        const erros = this.recuperarErros(requestError);
        erros.forEach(e => {
          this.message.show(e.tipo + ' ' + e.mensagem, undefined, 0);
        });
      }

      return throwError(requestError);

    };
  }

  private recuperarErros(requestError: any): Erro[] {

    switch (requestError.status) {
      case 401: return this.unauthorized(requestError);
      case 403: return this.forbidden(requestError);
      case 409: return this.conflict(requestError);
      default: return this.other(requestError);
    }

  }


  private other(requestError: any): Erro[] {

    const errors = [];
    try {
      const error = requestError.error;
      for (const prop in error) {
        if (error.hasOwnProperty(prop) && error[prop] && error[prop].forEach) {
          error[prop].forEach(item => {
            if (item.message) {
              errors.push(new Erro('Erro de Validação', item.message));
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
      errors.push(new Erro('Ocorreu um erro inesperado.',
          'Por favor, tente novamente mais tarde. Se o erro persistir, contate o suporte do sistema.'));
    }

    return errors;
  }

  private unauthorized(requestError: any): Erro[] {
    const errors = [new Erro('Não Autorizado',
      'Você precisa estar logado para executar essa transação.')];
    return errors;
  }

  private forbidden(requestError: any): Erro[] {
    return [new Erro('Proibido', 'Você não tem permissão para executar essa transação.')];
  }

  private conflict(requestError: any): Erro[] {
    return [new Erro('Conflito', 'Esse recurso já foi atualizado por outra transação.')];
  }

}
