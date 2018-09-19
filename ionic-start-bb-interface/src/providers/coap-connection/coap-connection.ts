import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CoapConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoapConnectionProvider {

  static PROTOCOL_STRING = 'HTTP://';
  constructor(public http: HttpClient) {
  }



  pingServer(ip){
  	return this.http.get(CoapConnectionProvider.PROTOCOL_STRING+ip+'/test').toPromise();
  }

}
