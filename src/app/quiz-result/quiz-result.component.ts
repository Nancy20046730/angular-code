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

    const storedData = localStorage.getItem('quizData');
    if (storedData) {
      this.quizDetails = JSON.parse(storedData);
      this.resultStatement="You scored "+this.quizDetails[0].currect+" out of 5";
    } else {
      this.quizDetails=this.quizService.getQuizData();
      this.resultStatement="You scored "+this.quizDetails[0].currect+" out of 5"; // Fetch the data if not found in local storage
    }

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
}
