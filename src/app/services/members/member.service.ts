import { Injectable } from '@angular/core';
import { Certificado } from 'src/app/interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public members: any[] = []
  constructor() { }
  setMembers(name: String, lastname: String, title: String, description: String, img:string, certifications: Array<Certificado>) {
    const member = {
      name: name,
      lastname: lastname,
      title: title,
      description: description,
      img:img,
      certifications: certifications
    }
    this.members.push(member)
    return member
  }
  getMembers() {
    return this.members
  }
}
