import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from 'environments/environment';  
import { DataResponse } from '../interfaces/graficos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  url = environment.apiurl;

  constructor(private http: HttpClient) { }


  IndPersonas() { 
    return this.http.get<DataResponse>(`${this.url}/api/indicador/datos-personas`);
  }

  
  IndPersonasPorArea(){ 
    return this.http.get<DataResponse>(`${this.url}/api/indicador/datos-personas-por-area`);
  }

  
  IndHorasPorSedes() { 
    return this.http.get<DataResponse>(`${this.url}/api/indicador/datos-horas-por-sede`);
  }

   

}
