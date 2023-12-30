import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/configs/config';
import emailjs from 'emailjs-com'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    emailjs.init("M83Mijq87nDWdhjiJ")
  }
  sendMail(templateParams:any){
    return emailjs.send(enviroment.emailJSConfig.SERVICE_ID, enviroment.emailJSConfig.TEMPLATE_ID, templateParams)
  }
}
