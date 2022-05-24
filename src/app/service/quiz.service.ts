import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
// 1. Create http client dependency
constructor(private httpClient: HttpClient) { }

// 2. Define webservice URI
private url:string = "http://localhost:8080/quiz";

// Get all products
public getQuizzes(){
  return this.httpClient.get(this.url);
}

// Get one product
// public getProduct(id:number){
//   this.httpClient.get(this.url);
// }

// Add product
public addQuiz(quiz:any){
  return this.httpClient.post(this.url,quiz);
}

// Update product
public updateQuiz(quiz:any){
  return this.httpClient.put(`${this.url}/${quiz.id}`,quiz);
}

// Delete product
public deleteQuiz(id:number){
  return this.httpClient.delete(`${this.url}/${id}`);
}
}
