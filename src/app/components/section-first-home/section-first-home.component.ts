import { Component } from '@angular/core';

@Component({
  selector: 'section-first-home',
  templateUrl: './section-first-home.component.html',
  styleUrls: ['./section-first-home.component.css']
})
export class SectionFirstHomeComponent {
  public paragraph: string = ''
  constructor(){
    this.paragraph = "Transforma, Impacta, Avanza: Digitaliza tu Triple Impacto Sosteniblemente" 
  }
}
