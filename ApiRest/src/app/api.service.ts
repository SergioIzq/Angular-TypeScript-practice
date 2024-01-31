import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Frase } from './frase';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private frase:Frase={id:"", quote:""}
  private ChiquitoURL = "https://chiquitadas.es/api/quotes/avoleorrr";

  constructor(private http: HttpClient) { }

  public getFrase() {
    return this.http.get<Frase>(this.ChiquitoURL);
  }
}
  