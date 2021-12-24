/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ILabor, LaboresPage } from '../interface/labor.interface';

@Injectable({
  providedIn: 'root'
})
export class LaborService {

  url = environment.apiurl;


  constructor(
    private http: HttpClient
  ) {

  }

  getTablaLabor(idLabor: number) {
    return this.http.get<any>(`${this.url}/api/labor/buscar-labor/${idLabor}`);
  }

  getBlock() {
    return this.http.get<any>(`${this.url}/api/block/lista-block`);
  }

  getTipoLabor() {
    return this.http.get<any>(`${this.url}/api/tipo-labor/lista-tipo-labor`);
  }

  getFase() {
    return this.http.get<any>(`${this.url}/api/fase/lista-fase`);
  }

  getSeccion() {
    return this.http.get<any>(`${this.url}/api/seccion/lista-seccion`);
  }

  getPuntoCardinal() {
    return this.http.get<any>(`${this.url}/api/punto-cardinal/lista-punto`);
  }

  /* Listar con paginado - guardar Labores */

  getLaborPaginado(pagina: number, size: number) {
    let params = new HttpParams();
    params = params.append('page', pagina);
    params = params.append('size', size);
    params = params.append('sort', 'idLabor,desc');
    return this.http.get<LaboresPage>(`${this.url}/api/labor/listar-labores`, { params: params });
  }

  getLaborPaginadoLike(pagina: number, size: number, nombre: string) {
    let params = new HttpParams();
    params = params.append('page', pagina);
    params = params.append('size', size);
    params = params.append('sort', 'idLabor,desc');
    return this.http.get<LaboresPage>(`${this.url}/api/labor/listar-labores-like/${nombre}`, { params: params });
  }

  createLabor(values: ILabor) {
    return this.http.post(`${this.url}/api/labor/guardar-labor`, values);
  }

  deleteLabor(idLabor: number) {
    return this.http.delete(`${this.url}/api/labor/delete-laborr/${idLabor}`);
  }

}
