import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from 'environments/environment';  
import { DataResponse } from '../interfaces/graficos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  url = environment.apiurl;

  constructor(private http: HttpClient) { }


  repGeneral(data: any) {  
    let params = new HttpParams();
    params = params.append('IdSede', data.idsede);
    params = params.append('IdTurno', data.idturno); 
    return this.http.get<DataResponse>(`${this.url}/api/reportes/rep-general`, { params: params });
  }


  repTurnos(data:any){ 
    let params = new HttpParams();
    params = params.append('IdTurno', data.idturno); 
    return this.http.get<DataResponse>(`${this.url}/api/reportes/rep-turno`, { params: params }); 
  }

  
  repHorasTrabajo(data: any) { 
    let params = new HttpParams();
    params = params.append('IdSede', data.idsede);
    params = params.append('TipoHora', data.tipohora);
    return this.http.get<DataResponse>(`${this.url}/api/reportes/rep-horas-trabajo`, { params: params });  
  }

  importarAsistencias(data: any) {  
    return this.http.post<any>(`${this.url}/api/asistencia/save`, data);  
  }

}
