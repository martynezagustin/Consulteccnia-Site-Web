import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfitsService {
  public profits: Profit[] = []
  constructor() {}
  createProfit(name:string,description:string,icon:string){
    const profit = new Profit(name,description,icon)
    this.profits.push(profit)
  }
  getProfits():Profit[]{
    return this.profits
  }
}

export class Profit{
  constructor(public name:string,public description:string,public icon:string){}
}
