import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  // Declare your variable:
  public quizzes:any;

  // 1a. Inject the data service to load the data:
  // constructor(private dataSrv:DataService) { }

  // 1b. Use your Product Service --> springboot
  constructor(
    private quizSrv:QuizService,
    private router:Router
    ){}

  // 2. Load the data oninit
  ngOnInit(): void {
    
    // For 1a:
    // this.products = this.dataSrv.products;

    // For 1b:
    this.quizzes = this.quizSrv.getQuizzes().subscribe(data=>{
      console.log(data);
      // Put your data into the products array which is used to render the cards in your html
      this.quizzes = data;
    }, errors=>{
      console.log(errors);
    });

    // For both:
    console.log(this.quizzes);
    
  }

  onEdit(quiz:any){
    console.log("Edit triggered for : "+quiz);
    this.router.navigateByUrl('/quizzes/update', {state: quiz})
  }


  onDelete(id:number){
    console.log("Delete triggered for : "+id);
    this.quizSrv.deleteQuiz(id).subscribe(res=>{
      console.log("Quiz has been successfully deleted");
      
    })
  }

}
