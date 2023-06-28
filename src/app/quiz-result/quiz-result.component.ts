import { Component ,OnInit} from '@angular/core';
import { QuizMakerService } from '../services/quiz-maker.service';
import { Router } from '@angular/router';
import { QuizDetails } from '../models/quizDetails';
@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit{
  quizDetails:QuizDetails[]=[];
  resultStatement:string='';
  constructor(private quizService:QuizMakerService,private router: Router){}

  ngOnInit(): void {
   this.quizDetails= this.quizService.getQuizData();
   console.log(this.quizDetails);
   this.resultStatement="You scored "+this.quizDetails[0].currect+" out of 5";


   
  }
  createQuiz():void{
    this.router.navigate(['/']);
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
  isCorrect(answer:string,currectAns:string):boolean{

if(answer===currectAns)
return true;
return false
  }
}
