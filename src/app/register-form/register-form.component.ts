import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ?
    null : {
      passwordnotmatch: true
    };
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: '',
        confirmPassword: ''
      }, {validator: comparePassword})
    });
  }
    onSubmit() {
    console.log(this.registerForm);
    }
}
