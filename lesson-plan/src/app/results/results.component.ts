import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../questions.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  // inputs
  @Input() questions = []
  @Input() questionsType = ""
  @Input() answers = []
  @Input() formSubmitted = false
  @Input() score = 0
  @Input() mapping = {}
  @Input() correctQuestions = []
  // helpers
  showAnswer = (this.questionsType === "preLesson") ? false : true
  questionToGivenAnswers = {} 

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.showAnswer = (this.questionsType === "preLesson") ? false : true
  }
  

  getChecked(id: number, choice: string) {
    for(var answer of this.answers) {
      if (answer.id === id)
        return answer.answer === choice
    }
  }

  isRight(id: number) {
    return this.correctQuestions.includes(id)
  }

}
