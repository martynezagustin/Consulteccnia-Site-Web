import { Injectable } from '@angular/core';
import { Certificado } from 'src/app/interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public members: any[] = []
  constructor() { }
  setMembers(name: string, lastname: string, title: string, description: string, img: string, certifications: Array<Certificado>, profileLinkedin: string) {
    const member = new Member(name, lastname, title, description, img, certifications, profileLinkedin)
    this.members.push(member)
    return member
  }
  getMembers() {
    return this.members
  }
}

export class Member {
  constructor(public name: string, public lastname: string, public title: string, public description: string, public img: string, public certifications: Array<Certificado>, public profileLinkedin: string) { }
}
