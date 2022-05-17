import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralPage } from 'app/shared/interface-paginator';
import { environment } from 'environments/environment';
import { ITipoTrabajo } from '../interfaces/tipo-trabajo';

@Injectable({
  providedIn: 'root'
})
export class TipoTrabajoService {

  url = environment.apiurl;

  constructor(
    private http : HttpClient
  ) { }


  

  listTipoTrabajo(pagina: number, size: number, nombre: string) {
    let params = new HttpParams();
    params = params.append('page', pagina);
    params = params.append('size', size);
    params = params.append('nombre', nombre);
    params = params.append('sort', 'idTipoTrabajo,desc');
    return this.http.get<GeneralPage>(`${this.url}/api/tipo-trabajo/list`, { params: params });
  }

  saveTipoTrabajo(values: ITipoTrabajo) {
    return this.http.post(`${this.url}/api/tipo-trabajo/save`, values);
  }


  updateTipoTrabajo(values: ITipoTrabajo) {
    return this.http.put(`${this.url}/api/tipo-trabajo/update`, values);
  }
  
  deleteTipoTrabajo(idTipoTrabajo: number) {
    return this.http.delete(`${this.url}/api/tipo-trabajo/delete/${idTipoTrabajo}`);
  }

}
