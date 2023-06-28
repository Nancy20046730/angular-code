export class QuizDetails{
    category:string;
    type:string;
    difficulty :string;
    question:string;
    correct_answer:string;
    incorrect_answers:string[];
    answers:string[];
    currect:number;
    wrong:number
    selected_answer:string;
    constructor(){
        this.category="";
        this.difficulty="";
        this.type='multiple';
        this.question="";
        this.correct_answer="";
        this.incorrect_answers=[];
        this.answers=[];
        this.currect=0;
        this.wrong=0;
        this.selected_answer=''
    }
}