import { Component, OnInit } from '@angular/core';
import { Profit, ProfitsService } from 'src/app/services/profits/profits.service';

@Component({
  selector: 'container-profits',
  templateUrl: './container-profits.component.html',
  styleUrls: ['./container-profits.component.css']
})
export class ContainerProfitsComponent {
  public profits: Profit[] = []
  constructor(private profitService: ProfitsService) { }
  ngOnInit() {
    this.profits = this.profitService.getProfits()
    const profit = this.profitService.createProfit("MÉTRICA", "Realizamos mediciones analíticas de las estrategias y acciones planteadas.", "fi fi-ss-chart-pie-alt")
    const profit2 = this.profitService.createProfit("PERSONALIZACIÓN", "Trabajamos en forma personalizada con nuestros clientes adaptándonos a sus necesidades.", "fi fi-rr-magic-wand")
    const profit3 = this.profitService.createProfit("ESCALABILIDAD", "Nuestros modelos de asesoría buscan la escalabilidad y el apunte a nuevas tendencias.", "fi fi-sr-chart-histogram")
    const profit4 = this.profitService.createProfit("EMPATÍA", "Es un compromiso para nosotros ponernos en el lugar de la otra persona en sus aspectos empresariales y lo que rodea en torno a su integridad espiritual.", "fi fi-rr-smile")
    const profit5 = this.profitService.createProfit("SOSTENIBILIDAD", "Los modelos sostenibles son la primicia de los nuevos modelos del siglo 21. Con un enfoque de sostenibilidad basado en nuevas competencias.", "fi fi-ss-leaf")
    const profit6 = this.profitService.createProfit("TECNOLOGIZACIÓN", "Es ideal pasar de los átomos a los bits, de los papeles a los informes digitales, de las carpetas a la nube, y de los establecimientos físicos a los establecimientos digitales.", "fi fi-sr-wifi-alt")
  }
}
