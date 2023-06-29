import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { QuizMakerComponent } from './app/quiz-maker/quiz-maker.component';
import { QuizMakerComponent } from './quiz-maker/quiz-maker.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizMakerService } from './services/quiz-maker.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    QuizMakerComponent,
    QuizResultComponent
  ],
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
		 FormsModule,
     CommonModule 
       
  ],
  providers: [ QuizMakerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
