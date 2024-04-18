import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuidesService {
  public guides: Guide [] = []
  constructor(){
  }
  setGuide(name:string, description:string, cost:string, link:string, img: string){
    const guide = {
      name: name,
      description: description,
      cost: cost,
      link: link,
      img: img
    }
    this.guides.push(guide)
    return guide
  }
  getGuide(){
    return this.guides
  }
}

export class Guide {
  constructor(public name:string,public description:string,public cost:string, public link:string, public img: string){
  }
}