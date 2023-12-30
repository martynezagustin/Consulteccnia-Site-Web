import { Component, OnInit } from '@angular/core';
import { Service, ServicesConsulteccniaService } from 'src/app/services/servicesConsulteccnia/services-consulteccnia.service';

@Component({
  selector: 'services-consulteccnia',
  templateUrl: './services-consulteccnia.component.html',
  styleUrls: ['./services-consulteccnia.component.css']
})
export class ServicesConsulteccniaComponent {
  public services: Service[] = []
  constructor(private servicesConsulteccnia: ServicesConsulteccniaService){}
  ngOnInit(){
    this.services = this.servicesConsulteccnia.getServices()
    this.servicesConsulteccnia.createService("SEO", "Estamos actualizados en las tendencias que conciernen al SEO en todas sus implicancias de alcanzar las métricas de un sitio web bien posicionados.", "../../../assets/imgs/services/seo.png")
    this.servicesConsulteccnia.createService("DESARROLLO WEB", "Diseñamos app webs para empresas, basados en la experiencia de usuario y sus buenas prácticas. Es fundamental su presencia.", "../../../assets/imgs/services/maquetacion-web.png")
    this.servicesConsulteccnia.createService("GROWTH HACKING", "El growth hacking es sinónimo de 'hackear' el crecimiento, y es necesario para las nuevas empresas que innovan en la adquisicion de clientes.", "../../../assets/imgs/services/growth-hacking.png")
    this.servicesConsulteccnia.createService("AUDITORÍAS", "Realizamos análisis de las estrategias de marketing, digitales y tecnológicas tomadas en las empresas, y las sometemos a auditoría.", "../../../assets/imgs/services/asesorias.png")
  }
}
