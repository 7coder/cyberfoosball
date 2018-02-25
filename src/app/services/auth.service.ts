import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private response: object = {
    status : 200,
    message : 'Welcome'
  };

  constructor() { }

  start( authObject: object ): Observable<Object>{
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next( this.validate( authObject ) );
      }, 200)
    });
  }

  validate( authObject: object ){

    if ( !authObject ){

      return {
        status : 503,
        message : 'Something goes wrong'
      }

    } else {

      if ( authObject[ 'username' ] !== '123' &&  authObject[ 'password' ] !== '123' ){
        
        return {
          status : 401,
          message : 'Incorrect Username/Password'
        }
      }

    }

    return this.response;
  }

}
