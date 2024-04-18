import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  public plans: Plans[] = []
  constructor(){}
  setPlan(name: string, destinatary:string, icon: string, profits: Array<String>) {
    const plan = new Plans(name, destinatary, icon, profits)
    this.plans.push(plan)
  }
  getPlans() {
    return this.plans
  }
}

export class Plans {
  constructor(public name: string, public destinatary:string, public icon: string, public profits: Array<String>) { }
}
