import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { HeaderRRSS, HeaderRRSSService } from 'src/app/services/headerRRSS/header-rrss.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  routes: Route[] = [];
  rrss: HeaderRRSS[] = []
  public date: string = ''
  constructor(private headerService: HeaderService, private headerRRSS: HeaderRRSSService) {
  }
  ngOnInit(): void {
    this.injectRRSS()
    this.setDate()
    this.rrss = this.headerRRSS.getRRSS()
    this.routes = this.headerService.getRoutes()
  }
  injectRRSS() {
    this.headerRRSS.setRRSS("Instagram", "https://www.instagram.com/consulteccnia.seo", "../../../assets/imgs/header/ig-logotype.png")
    this.headerRRSS.setRRSS("Facebook", "https://www.facebook.com/consulteccnia", "../../../assets/imgs/header/fb-logotype.png")
    this.headerRRSS.setRRSS("TikTok", "https://www.tiktok.com/@consulteccnia", "../../../assets/imgs/header/tiktok-logotype.png")
  }
  setDate(){
    setInterval(()=>{
      const actualDate = new Date()
      const daysWeeks = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
      const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
      const actualMonthString = months[actualDate.getMonth()]
      const actualDayString = daysWeeks[actualDate.getDay()]
      this.date = `Es ${actualDayString}, ${actualDate.getDate()} de ${actualMonthString}.`
    },1000)
  }
}
