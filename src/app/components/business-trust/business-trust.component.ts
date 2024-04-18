import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/interfaces/empresas';
import { BusinessService } from 'src/app/services/business/business.service';

@Component({
  selector: 'business-trust',
  templateUrl: './business-trust.component.html',
  styleUrls: ['./business-trust.component.css']
})
export class BusinessTrustComponent {
  public listBusiness: Array<Empresas> = []
  constructor(private business: BusinessService){
  }
  setBusiness(name:string, img:string, siteWeb:string){
    const businessToAdd = {name, img, siteWeb}
    this.business.setBusiness(businessToAdd)
  }
  ngOnInit(){
    this.setBusiness("Philio Sin Gracia", "../../../assets/imgs/philio-sin-gracia.png", "https://philiosingracia.empretienda.com.ar/")
    this.listBusiness = this.business.getBusiness()
  }
  getBusiness(){
    this.listBusiness = this.business.getBusiness()
  }
}
