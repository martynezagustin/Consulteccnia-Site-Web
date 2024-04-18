import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})
export class CarbonFootprintComponent {
  constructor(private router: Router){}
  ngOnInit(){
    console.log(this.router.url)
  }
}
