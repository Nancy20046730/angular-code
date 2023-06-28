import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Quiz } from '../models/quiz';
import { QuizDetails } from '../models/quizDetails';
@Injectable({
  providedIn: 'root'
})
export class QuizMakerService {
  private quizData: QuizDetails[]=[];
  constructor(private httpClient: HttpClient) { }

  getQuizCategories() : Observable<string[]> {
    return this.httpClient.get<string[]>(`https://opentdb.com/api_category.php`);
}
createQuiz(inputParam:Quiz):Observable<QuizDetails[]>{
  const obj= JSON.parse(JSON.stringify(inputParam))
 
  let url=`https://opentdb.com/api.php?amount=5&category=`+obj.categorySelect+`&difficulty=`+obj.difficultySelect+`&type=multiple`;
return this.httpClient.get<QuizDetails[]>(url);
}

setQuizData(quizDetails:QuizDetails[]):void{
  this.quizData =  quizDetails;
}

getQuizData() {
  return this.quizData;
}
}
