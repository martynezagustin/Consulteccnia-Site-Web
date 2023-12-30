import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderRRSSService {
  public RRSS: HeaderRRSS[] = []
  constructor() {
  }
  setRRSS(name:string, anchor:string, img:string){
    const rrss = new HeaderRRSS(name, anchor, img)
    this.RRSS.push(rrss)
    return rrss
  }
  getRRSS(){
    return this.RRSS
  }
}

export class HeaderRRSS{
  constructor(public name:string, public anchor:string, public img:string){
  }
}
