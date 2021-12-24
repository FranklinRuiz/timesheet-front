import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { CargoPage, ICargo } from '../interface/cargo.interface';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  url = environment.apiurl;

  constructor(private http: HttpClient) { }


  listCargo(pagina: number, size: number) {
    let params = new HttpParams();
    params = params.append('page', pagina);
    params = params.append('size', size);
    params = params.append('sort', 'idCargo,desc');
    return this.http.get<CargoPage>(`${this.url}/api/cargo/list`, { params: params });
  }

  saveCargo(values: ICargo) {
    return this.http.post(`${this.url}/api/cargo/save`, values);
  }

  updateCargo(values: ICargo) {
    return this.http.post(`${this.url}/api/cargo/update`, values);
  }


  deleteCargo(idCargo: number) {
    return this.http.delete(`${this.url}/api/cargo/delete/${idCargo}`);
  }

}
