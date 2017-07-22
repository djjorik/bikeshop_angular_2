import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

 myForm: FormGroup;
 emailCtrl: any;
  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.required, Validators.minLength(3), Validators.maxLength(24)],
      surname: ['', Validators.required, Validators.required, Validators.minLength(3), Validators.maxLength(24)],
      message: ['', Validators.required, Validators.required, Validators.minLength(15), Validators.maxLength(1000)],
      email: ['', Validators.email]
    });
   this.emailCtrl = this.myForm.get('email')
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
