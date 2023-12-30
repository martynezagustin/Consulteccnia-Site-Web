import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesConsulteccniaService {
  public services: Service[] = []
  constructor() { }
  createService(name: string, description: string, img:string) {
    const service = new Service(name, description, img)
    this.services.push(service)
    return service
  }
  getServices() {
    return this.services
  }
}

export class Service {
  constructor(public name: string, public description: string, public img:string) { }
}
