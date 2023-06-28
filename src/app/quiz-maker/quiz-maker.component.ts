import { Component ,OnInit} from '@angular/core';
import { QuizMakerService } from '../services/quiz-maker.service';
import { Category } from '../models/category';
import { Quiz } from '../models/quiz';
import { QuizDetails } from '../models/quizDetails';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css'],
})
export class QuizMakerComponent implements OnInit {

  categories:Category[]=[];
  difficulties:string[]=['Easy','medium','hard'];
  quizDetails:QuizDetails[]=[];
  noQuestions:string='';
 questions:string[]=[];
  //status:boolean=false
  constructor(private quizService:QuizMakerService,private router: Router){}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories():void{
    this.quizService.getQuizCategories().subscribe(
        res => {
          const obj = JSON.parse(JSON.stringify(res));
            this.categories =  obj.trivia_categories;
        }
    );
}
createQuiz(inputParam:Quiz){

  this.quizService.createQuiz(inputParam)
      .subscribe(data => {
       let obj=JSON.parse(JSON.stringify(data));
       if(obj.results.length>0){
        this.quizDetails=obj.results;
        this.noQuestions='';
        console.log(this.quizDetails)
        for(let i=0;i<this.quizDetails.length;i++){
this.quizDetails[i].answers=this.quizDetails[i].incorrect_answers;
this.quizDetails[i].answers.splice((this.quizDetails[i].answers.length+1) * Math.random() | 0, 0, this.quizDetails[i].correct_answer)
this.questions.push(this.quizDetails[i].question);

        }
        console.log(this.quizDetails)
       }
       else{
        this.quizDetails=[];
        this.noQuestions='No questions available for provided category and difficulty level';
       }
       
      })  ;

}
clickEvent():void{
 // this.status=true;
}
toggle :boolean= false;

selectedButtonIndex: number=-1;
selectedRowIndex:number=-1;

selectedAnswers: number[] = [];

selectAnswer(questionIndex: number, answerIndex: number) {
  this.selectedAnswers[questionIndex] = answerIndex;
}

isSelected(questionIndex: number, answerIndex: number): boolean {
  return this.selectedAnswers[questionIndex] === answerIndex;
}

sanitizeText(text:string): string {
  const parser = new DOMParser();
  let sanitizedString='';
  if(text!=undefined && text!=null){
    let decodedString = parser.parseFromString(text, "text/html").documentElement.textContent;
    if(decodedString!=null)
     sanitizedString = decodedString.replace(/&#?[a-z0-9]+;/gi, "");
  }
  
  return sanitizedString;
}


submitQuiz(quizDetails:QuizDetails[]):void{
  let currect=0;
  let wrong=0;
for(let i=0;i<quizDetails.length;i++){
  let ansIndex=this.selectedAnswers[i];
  quizDetails[i].selected_answer=quizDetails[i].answers[ansIndex];
  if(quizDetails[i].answers[ansIndex]==quizDetails[i].correct_answer){
    currect++;
  }
  else
  {
    wrong++;
  }
          }
          console.log(currect+" ********* "+ wrong)
          quizDetails[0].currect=currect;
          quizDetails[0].wrong=wrong;
this.quizService.setQuizData(quizDetails);
   this.router.navigate(['/quiz-result']);
}


}
