import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralPage } from 'app/shared/interface-paginator';
import { environment } from 'environments/environment'; 
import { ISede } from '../interface/sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  url = environment.apiurl;

  constructor(private http: HttpClient) { }


  listSede(pagina: number, size: number, nombre: string) {
    let params = new HttpParams();
    params = params.append('page', pagina);
    params = params.append('size', size);
    params = params.append('nombre', nombre);
    params = params.append('sort', 'idSede,desc');
    return this.http.get<GeneralPage>(`${this.url}/api/sede/list`, { params: params });
  }

  saveSede(values: ISede) {
    return this.http.post(`${this.url}/api/sede/save`, values);
  }

  updateSede(values: ISede) {
    return this.http.put(`${this.url}/api/sede/update`, values);
  }


  deleteSede(idSede: number) {
    return this.http.delete(`${this.url}/api/sede/delete/${idSede}`);
  }

}
