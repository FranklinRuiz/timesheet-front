import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralPage } from 'app/shared/interface-paginator';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  url = environment.apiurl;
  constructor(private http: HttpClient) { }
  
  listAsistencia(pagina: number, size: number) {
    let params = new HttpParams();
    params = params.append('page', pagina);
    params = params.append('size', size);
    params = params.append('sort', 'idAsistencia,desc');
    return this.http.get<GeneralPage>(`${this.url}/api/asistencia/list`, { params: params });
  }
}
