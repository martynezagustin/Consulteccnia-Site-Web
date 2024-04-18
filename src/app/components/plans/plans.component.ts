import { Component, OnInit } from '@angular/core';
import { Plans, PlansService } from 'src/app/services/plans/plans.service';

@Component({
  selector: 'plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  plans: Plans [] = []
  constructor(private planService: PlansService){}
  setPlan(name:string, destinatary:string, icon:string, profits: Array<String>){
    this.planService.setPlan(name, destinatary, icon, profits)
  }
  ngOnInit(){
    this.plans = this.planService.getPlans()
    //Eco-Starter
    this.setPlan("Eco-Starter", "Para empresas en nacimiento", "fi fi-br-recycle", ["Auditoría de Presencia Digital", "Estrategia de Meta ADS", "Desarrollo Web Sostenible", "Consultoría de Buenas Prácticas", "Asesoría de UX", "Investigación de Competencia"])
    //Green Growth
    this.setPlan("Green Growth", "Para empresas en crecimiento", "fi fi-sr-car-bolt", ["Auditoría completa digital", "Estrategias Avanzadas de Meta ADS", "Desarrollo Web Avanzado", "SEO", "Asesoría en IA", "Growth Marketing"])
    //Sustainable Excellence
    this.setPlan("Sustainable Excellence", "Para empresas consolidadas", "fi fi-ss-solar-panel", ["Auditoría exhaustiva completa digital", "Estrategias Avanzadas de Meta ADS", "Desarrollo Web Premium", "SEO Avanzado", "Asesoría en IA avanzado", "Growth Marketing Avanzado"])
  }
}
