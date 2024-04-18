import { Injectable } from '@angular/core';
import { Empresas } from 'src/app/interfaces/empresas';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  public listEmpresas: Array<Empresas> = []
  constructor() { }
  setBusiness(empresa: Empresas) {
    this.listEmpresas.push(empresa)
  }
  getBusiness(): Empresas[] {
    return this.listEmpresas
  }
}
