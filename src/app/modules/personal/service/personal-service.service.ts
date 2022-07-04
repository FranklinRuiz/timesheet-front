import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralPage } from 'app/shared/interface-paginator';
import { environment } from 'environments/environment';
import { Personal } from '../interface/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  url = environment.apiurl;

  constructor(private http: HttpClient) { }

  listPersonal(pagina: number, size: number, nombre: string) {
    let params = new HttpParams();
    params = params.append('page', pagina);
    params = params.append('size', size);
    params = params.append('nombre', nombre);
    params = params.append('sort', 'idEmpleado,desc');
    return this.http.get<GeneralPage>(`${this.url}/api/personal/list`, { params: params });
  }

  savePersonal(values: Personal) {
    return this.http.post(`${this.url}/api/personal/save`, values);
  }

  updatePersonal(values: Personal) {
    return this.http.put(`${this.url}/api/personal/update`, values);
  }

  deletePersonal(idPersonal: number) {
    return this.http.delete(`${this.url}/api/personal/delete/${idPersonal}`);
  }

  listTipoDocumento() {
    return this.http.get(`${this.url}/api/personal/list-tipo-documento`);
  }

  listTipoGenero() {
    return this.http.get(`${this.url}/api/personal/list-tipo-genero`);
  }

  listHorario() {
    return this.http.get(`${this.url}/api/horario/list-all`);
  }

  listCargo() {
    return this.http.get(`${this.url}/api/cargo/list-all`);
  }

  listArea() {
    return this.http.get(`${this.url}/api/area/list-all`);
  }
}
