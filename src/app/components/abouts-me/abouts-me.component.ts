import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/members/member.service';

@Component({
  selector: 'abouts-me',
  templateUrl: './abouts-me.component.html',
  styleUrls: ['./abouts-me.component.css']
})
export class AboutsMeComponent implements OnInit {
  members: MemberService[] = []
  constructor(private memberService: MemberService) {
  }
  ngOnInit() {
    this.members = this.memberService.getMembers()
    if (this.members.length === 0) {
      this.memberService.setMembers("Raiquen", "Herrera", "Consultor en GROWTH HACKING", "Raiquen Herrera es un aficionado a las ciencias del marketing digital y las nuevas tendencias. Es especialista en Growth Hacking, Appointment Setter, ADS de Meta y Marketing Digital. Su afición y trabajo demuestran el desarrollo de Consulteccnia.", "../../../assets/imgs/about-me/raiquen-herrera.jpeg", [{
        nameCertificado: "Certificación en Display de Google Ads.",
        anchorCertificado: "https://skillshop.credential.net/691595c6-314f-4658-bbfe-bdc6920e9b2b"
      },
      {
        nameCertificado: "Google Analytics Individual Qualification: Google",
        anchorCertificado: "https://skillshop.exceedlms.com/student/award/TVcRqA1C6Tt8Mncxp98iX9fD"
      }
      ])
      this.memberService.setMembers("Agustín", "Martínez Medina", "Consultor en Mercadotecnia General. Desarrollador Web Front-End", "Agustín Martínez Medina es desarrollador front-end. Aficionado a la evolución de la IA, las nuevas librerías, y las nuevas innovaciones empresariales. Posee conocimientos en muchas areas de gestión empresarial.", "../../../assets/imgs/about-me/agustin.JPG", [
        {
          nameCertificado: "Máster en Marketing Digital y Analítica Web",
          anchorCertificado: "https://certificados.neetwork.com/es/verify/91147389636432"
        },
        {
          nameCertificado: "JavaScript",
          anchorCertificado: "https://www.coderhouse.com/certificados/64994738dd46ce0002825995"
        },
        {
          nameCertificado: "Desarrollo Web",
          anchorCertificado: "https://www.coderhouse.com/certificados/6424a42251f7260019294bc7"
        },
        {
          nameCertificado: "Curso Gratis de Programación Básica",
          anchorCertificado: "https://platzi.com/p/martynezagustin/curso/3208-programacion-basica/diploma/detalle/"
        },
        {
          nameCertificado: "Programador Javascript",
          anchorCertificado: "https://app.edutin.com/verify/7287660"
        },
        {
          nameCertificado: "Programador de aplicaciones en Java",
          anchorCertificado: "https://app.edutin.com/verify/7406135"
        },
        {
          nameCertificado: "Estrategias Online de Marketing",
          anchorCertificado: "https://usuarios.aulafacil.com/validar-certificado/20200507484-c8ddb6"
        }
      ])
    } else {
      console.log("Listooo");

    }
  }

}
