export class QuizResult{
   
    question:string;
    correct_answer:string;
    incorrect_answers:string[];
    answers:string[];
    constructor(){
       
        this.question="";
        this.correct_answer="";
        this.incorrect_answers=[];
        this.answers=[];
    }
}