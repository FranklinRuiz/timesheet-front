import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralPage } from 'app/shared/interface-paginator';
import { environment } from 'environments/environment';
import {  IHorario } from '../interface/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  url = environment.apiurl;

  constructor(private http: HttpClient) { }


  listHorario(pagina: number, size: number, nombre: string) {
    let params = new HttpParams();
    params = params.append('page', pagina);
    params = params.append('size', size);
    params = params.append('nombre', nombre);
    params = params.append('sort', 'idHorario,desc');
    return this.http.get<GeneralPage>(`${this.url}/api/horario/list`, { params: params });
  }

  saveHorario(values: IHorario) {
    return this.http.post(`${this.url}/api/horario/save`, values);
  }

  updateHorario(values: IHorario) {
    return this.http.put(`${this.url}/api/horario/update`, values);
  }


  deleteHorario(idHorario: number) {
    return this.http.delete(`${this.url}/api/horario/delete/${idHorario}`);
  }

}
