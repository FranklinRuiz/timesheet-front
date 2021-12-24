/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmpresas } from 'app/modules/avance/interface/medicion.interface';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = environment.apiurl;


  constructor(
    private http: HttpClient
  ) {

  }
 
  getEmpresas(){
    return this.http.get<IEmpresas[]>(`${this.url}/api/empresa/listar-empresas`)
  }

}
