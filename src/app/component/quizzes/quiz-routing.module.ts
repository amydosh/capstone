import { QuizzesComponent } from './quizzes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes =[
  { path:'quizzes', component:QuizzesComponent},
  { path:'create', component:CreateComponent},
  { path:'update', component:UpdateComponent}
]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
