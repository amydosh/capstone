import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QuizService } from 'src/app/service/quiz.service';
import { DataService } from 'src/app/service/data.service';



@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    DataService,
    QuizService
  ]
})
export class QuizzesModule { }
