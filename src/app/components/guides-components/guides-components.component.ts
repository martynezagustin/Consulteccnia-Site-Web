import { Component, OnInit } from '@angular/core';
import { Guide, GuidesService } from 'src/app/services/guides/guides.service';

@Component({
  selector: 'app-guides-components',
  templateUrl: './guides-components.component.html',
  styleUrls: ['./guides-components.component.css']
})
export class GuidesComponentsComponent {
    public guides: Guide [] = []
    constructor(private guidesService: GuidesService){
    }
    ngOnInit(){
      this.guides = this.guidesService.getGuide()
      this.guidesService.setGuide("DESCUBRE COMO DIGITALIZAR TU EMPRESA SUSTENTABLE", "¿Deseas innovar tu empresa sustentable con las nuevas tecnologías? Esta guía te cerciora con todo lo que necesitas saber.", "GRATIS", "https://drive.google.com/file/d/1OJv9o1RvAxGvgWHyt_tEVg2Q-9bht3vj/view?usp=drive_link", "../../assets/imgs/guides/guia-para-digitalizar-tu-empresa-sustentable.jpg")
    }
}
