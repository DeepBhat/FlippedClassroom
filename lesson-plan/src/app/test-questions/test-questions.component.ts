import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsService } from "../questions.service";
import { ResultsComponent } from "../results/results.component";

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {
  questions = []
  questionsType: "preLesson" | "postLesson"

  questionsForm = new FormGroup({})
  indexToId = {}

  formSubmitted = false;
  score = 0
  givenAnswers: any[];
  correctQuestions = []

  constructor(public questionsService: QuestionsService, private router: Router) { }

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

    // create a mapping with question ids and order of questions
    this.questions.forEach((question, index) => {
      this.indexToId[index] = question.id
    })

    // add controls to the group corresponding to their ids
    this.questions.forEach((question, index) => {
      const questionControl = new FormControl('', Validators.required)
      this.questionsForm.addControl("question" + (index + 1), questionControl)
    })  

    // shuffle all the choices for each question too (except T/F questions)
    this.questions.forEach(question => {
      if (question.choices.length > 2)
        question.choices = this.shuffleArray(question.choices)
    })

    // reset the score every time the page is created
    this.score = 0
    this.formSubmitted = false;
  }

  submitTest() {  
    console.log(this.questionsForm)  
    this.givenAnswers = this.questionsService.setGivenAnswers(this.questionsForm.value)
    this.score = this.questionsService.getScore(this.questionsType)
    this.correctQuestions = this.questionsService.correctQuestions
    this.formSubmitted = true;
  }

  shuffleArray(array: Array<Object>) {
    var currentIndex = array.length
    var temporaryValue: object
    var randomIndex: number
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    
    return array;
  }

}
