import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from 'src/app/services/email/email.service';
@Component({
  selector: 'form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  constructor( private fb: FormBuilder, private emailService: EmailService) { }
  get message(){
    return this.formularioContacto.get("message")
  }
  get name(){
    return this.formularioContacto.get("name")
  }
  get lastname(){
    return this.formularioContacto.get("lastname")
  }
  formularioContacto = this.fb.group(
    {
      name: ["", [Validators.required, Validators.minLength(3)]],
      lastname: ["", [Validators.required, Validators.minLength(3)]],
      message: ["", [Validators.required, Validators.minLength(15)]]
    })
  onSubmit() {
    //si es valido
    if(this.formularioContacto.valid){
      //el template que se manda por mail
      const formData = {
        to_name: "Consulteccnia",
        name: this.name?.value,
        lastname: this.lastname?.value,
        message: this.message?.value
      }
      this.emailService.sendMail(formData)
      .then(() => {
        alert("Mail enviado")
      })
      .catch((err) => {
        console.log(err);
        
      })
    } else {
      alert("Hay datos inválidos.")
    }
  }
}
