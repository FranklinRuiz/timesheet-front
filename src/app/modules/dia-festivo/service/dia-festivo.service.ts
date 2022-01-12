import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { DiaFestivoPage, IDiaFestivo } from '../interface/dia-festivo';

@Injectable({
  providedIn: 'root'
})
export class DiaFestivoService {
  url = environment.apiurl;
  constructor(private http: HttpClient) { }
  
  listDiaFestivo(pagina: number, size: number) {
    let params = new HttpParams();
    params = params.append('page', pagina);
    params = params.append('size', size);
    params = params.append('sort', 'idDiaFestivo,desc');
    return this.http.get<DiaFestivoPage>(`${this.url}/api/dia-festivo/list`, { params: params });
  }

  saveDiaFestivo(values: IDiaFestivo) {
    return this.http.post(`${this.url}/api/dia-festivo/save`, values);
  }

  updateDiaFestivo(values: IDiaFestivo) {
    return this.http.post(`${this.url}/api/dia-festivo/update`, values);
  }

  deleteDiaFestivo(idDiaFestivo: number) {
    return this.http.delete(`${this.url}/api/dia-festivo/delete/${idDiaFestivo}`);
  }
}
