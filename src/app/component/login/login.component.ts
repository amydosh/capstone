import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required , Validators.minLength(6), Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      rememberme:['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm:any) {
    if(loginForm.valid){
      console.log(this.loginForm.value);
    } else{
      console.log("Invalid Form !");
      this.validate(loginForm);
    }
  }

  public validate(form:any){
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      } else{
        this.validate(control);
      }
    });
  }

  hasError(fieldName:string) {
    let field = this.loginForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.loginForm.controls;
  }

  get email() {
    return this.form['email'];
  }

  get password() {
    return this.form['password'];
  }

  get rememberme() {
    return this.form['rememberme'];
  }
}