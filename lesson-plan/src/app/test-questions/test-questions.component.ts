import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsService } from "../questions.service";

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {
  questions = []
  questionsType: "preLesson" | "postLesson"

  questionsForm = new FormGroup({})

  score = null

  constructor(private questionsService: QuestionsService, private router: Router) { }

  ngOnInit(): void {
    // determine pre or post lessson
    if (this.router.url.includes("pre")) {
      this.questionsType = "preLesson"
      this.questions = this.questionsService.setQuestions("preLesson")
      
    } else {
      this.questionsType = "postLesson"
      this.questions = this.questionsService.setQuestions("postLesson")
    }
    //shuffle all the questions
    this.questions = this.shuffleArray(this.questions)

    // add controls to the group corresponding to their ids
    this.questions.forEach(question => {
      const questionControl = new FormControl('', Validators.required)
      this.questionsForm.addControl("question" + question.id, questionControl)
    })  

    // shuffle all the choices for each question too (except T/F questions)
    this.questions.forEach(question => {
      if (question.choices.length > 2)
        question.choices = this.shuffleArray(question.choices)
    })

    // reset the score every time the page is created
    this.score = null
  }

  submitTest() {    
    console.log(this.questionsForm.value);
    this.questionsService.setGivenAnswers(this.questionsForm.value)
    console.log(this.questionsForm.value)
    this.score = this.questionsService.getScore(this.questionsType)

  }

  checkAnswer(question, givenAnswer) {
    if (!this.score) return;


  }

  shuffleArray(array: Array<Object>) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

}
