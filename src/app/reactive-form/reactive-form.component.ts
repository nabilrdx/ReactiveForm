import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomError } from './customError.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
form = new FormGroup({
  name: new FormControl('', [
    Validators.required, 
    Validators.minLength(6),
    CustomError.shouldHaveSpecialChar,
    CustomError.cannotContainSpace,
  ],
  CustomError.serverUniqueName
  ),
  phone:new FormControl('',
  [
    Validators.required,
    CustomError.isValidNumber,
    CustomError.cannotContainSpace
  ]
  ),
  mail:new FormControl('',
  [
    CustomError.cannotContainSpace,
    Validators.required,
    CustomError.isValidEmail
  ]
  ),
  password:new FormControl('',[
    Validators.required,
    CustomError.cannotContainSpace,
    CustomError.isValidPassword
  ])
})

log(){
  console.log(this.form.value)
}

}
