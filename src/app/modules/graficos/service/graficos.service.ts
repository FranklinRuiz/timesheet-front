import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from 'environments/environment';  
import { DataResponse } from '../interfaces/graficos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  url = environment.apiurl;

  constructor(private http: HttpClient) { }


  IndPersonas(data: any) { 
    let params = new HttpParams();
    params = params.append('FInicio', data.f1); 
    params = params.append('FFin', data.f2); 
    return this.http.get<DataResponse>(`${this.url}/api/indicador/datos-personas`, { params });  
  }

  
  IndPersonasPorArea(data: any){ 
    let params = new HttpParams();
    params = params.append('FInicio', data.f1); 
    params = params.append('FFin', data.f2); 
    return this.http.get<DataResponse>(`${this.url}/api/indicador/datos-personas-por-area`, { params });  
  }

  
  IndHorasPorSedes(data: any) { 
    let params = new HttpParams();
    params = params.append('FInicio', data.f1); 
    params = params.append('FFin', data.f2); 
    return this.http.get<DataResponse>(`${this.url}/api/indicador/datos-horas-por-sede`, { params });  
  }

   

}
