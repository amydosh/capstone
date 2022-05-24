import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public quizForm : FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private quizSrv : QuizService,
    private router:Router
    ) {
    this.quizForm = this.formBuilder.group({
      id : ['', [Validators.required]],
      questionnum: ['', [Validators.required]],
      questiondesc: ['', Validators.required],
      answer: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  public onSubmit(quizForm:any) {
    if(quizForm.valid){
      console.log(this.quizForm.value);

      // Write logic to create a product:
      this.quizSrv.addQuiz(this.quizForm.value).subscribe((res: any)=>{
        // console.log(res);
        this.router.navigateByUrl("/quiz");
        console.log("Question was successfully created");
        
      });


    } else{
      console.log("Invalid Form !");
      this.validate(quizForm);
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
    let field = this.quizForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.quizForm.controls;
  }

  get id() {
    return this.form['id'];
  }

  get questionnum() {
    return this.form['questionnum'];
  }

  get questiondesc() {
    return this.form['questiondesc'];
  }

  get answer() {
    return this.form['answer'];
  }
}