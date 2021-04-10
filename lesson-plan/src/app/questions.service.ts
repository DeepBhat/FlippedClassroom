import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private preLessonQuestions = [
    {
      id: 1,
      question: "What linked different city-states together?",
      choices: [
        "Culture",
        "Government",
        "Language",
        "Social institutions"
      ]
    },
    {
      id: 2,
      question: "Is this statement true or false: People who didn't speak Greek were considered immoral and unsophisticated by the Greeks.",
      choices: [
        "True",
        "False"
      ]
    },
    {
      id: 3,
      question: "In the 490s BCE, who invaded Athens?",
      choices: [
        "Cyrus the Great",
        "Darius",
        "Xerxes",
        "Bardiya"
      ]
    },
    {
      id: 4,
      question: "To avenge his father and conquer the Greeks, which king invaded Persia in 480 BC?",
      choices: [
        "Darius the Great",
        "Xerxes I",
        "Cyrus the Great",
        "Cambyses II"
      ]
    },
    {
      id: 5,
      question: "What was the purpose of “Immortals”, a special unit in the army of Xerxes?",
      choices: [
        "Protect their King",
        "Fight till their death",
        "Flank the enemy",
        "Help during retreat"
      ]
    },
    {
      id: 6,
      question: "Where did King Leonidas take his last stand?",
      choices: [
        "Thermopylae",
        "Marathon",
        "Themistocles",
        "Troy"
      ]
    },
    {
      id: 7,
      question: "What year was the Persian empire at its peak?",
      choices: [
        "500 BC",
        "1500 AD",
        "250 BC",
        "500 AD"
      ]
    },
    {
      id: 8,
      question: "Where would Ionia be located on the world map today?",
      choices: [
        "Iran",
        "Turkey",
        "Egypt",
        "Iraq"
      ]
    },
    {
      id: 9,
      question: "True or false: Greek empire was bigger than the Persian empire, which is why they were able to resist their invasions repeatedly.",
      choices: [
        "True",
        "False"
      ]
    },
    {
      id: 10,
      question: "Where was Xerxes’s first defeat?",
      choices: [
        "A channel",
        "Themistocles",
        "An island",
        "Thermopylae"
      ]
    },
  ]

  private preLessonAnswers = [
    { id: 1, answer: "Language"},
    { id: 2, answer: "True"},
    { id: 3, answer: "Darius"},
    { id: 4, answer: "Xerxes I"},
    { id: 5, answer: "Fight till their death"},
    { id: 6, answer: "Thermopylae"},
    { id: 7, answer: "500 BC"},
    { id: 8, answer: "Turkey"},
    { id: 9, answer: "False"},
    { id: 10, answer: "A channel"},
  ]

  private postLessonQuestions = [
    {
      id: 1,
      question: "True or False: Residents of city-states identified more with their city-state than as being Greek",
      choices: [
        "True",
        "False"
      ]
    },
    {
      id: 2,
      question: "Why did Greeks think the Persians were barbarians?",
      choices: [
        "The Persians lived in a different city-state",
        "The Persians were technologically lagging",
        "The Persians were uneducated",
        "The Persians spoke a different language"
      ]
    },
    {
      id: 3,
      question: "In which battle led to Darius’ defeat during his invasion of Athens?",
      choices: [
        "Battle of Marathon",
        "Battle of Thermopylae",
        "Battle of Troy",
        "Battle of Iwo Jima"
      ]
    },
    {
      id: 4,
      question: "How many soldiers were in the invading Persian army in 480 BC?",
      choices: [
        "150,000",
        "100,000",
        "250,000",
        "350,000"
      ]
    },
    {
      id: 5,
      question: "What was the strength of “Immortals”, a special unit of cavalry under Xerxes?",
      choices: [
        "250,000",
        "100,000",
        "10,000",
        "25,000"
      ]
    },
    {
      id: 6,
      question: "How many soldiers did King Leonidas take to fight the Persians?",
      choices: [
        "100",
        "300",
        "1000",
        "3000"
      ]
    },
    {
      id: 7,
      question: "How big was the persian empire? ",
      choices: [
        "From Egypt to west coast of India",
        "From Turkey to Western China",
        "Covering most of Europe",
        "From UK to Iran"
      ]
    },
    {
      id: 8,
      question: "Which emperor of Persia took over a Greek colony in Ionia?",
      choices: [
        "Cambyses II",
        "Darius II",
        "Xerxes I",
        "Cyrus the Great"
      ]
    },
    {
      id: 9,
      question: "How did the Greeks manage to defeat invading Persian armies?",
      choices: [
        "Using a larger army",
        "Using better technology",
        "Using trickery and deceit",
        "Using the help of other nations"
      ]
    },
    {
      id: 10,
      question: "What purpose did King Leonidas’s army serve?",
      choices: [
        "Defeated the Persian army which forced a retreat",
        "Resisted the Persian army which united the Greeks",
        "Weakened the Persian army which made them vulnerable",
        "Distracted the Persian army which allowed for a flank"
      ]
    }
  ]

  private postLessonAnswers = [
    { id: 1, answer: "True"},
    { id: 2, answer: "The Persians spoke a different language"},
    { id: 3, answer: "Battle of Marathon"},
    { id: 4, answer: "250,000"},
    { id: 5, answer: "10,000"},
    { id: 6, answer: "300"},
    { id: 7, answer: "From Egypt to west coast of India"},
    { id: 8, answer: "Cyrus the Great"},
    { id: 9, answer: "Using trickery and deceit"},
    { id: 10, answer: "Resisted the Persian army which united the Greeks"},
  ]
  public questions = []
  public answers = []
  public givenAnswers = []
  public correctQuestions = []

  constructor() { }

  private shuffleArray(array: Array<Object>) {
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

  setQuestions(questionType: "preLesson" | "postLesson"): Array<Object> {
    if (questionType === "preLesson")
      this.questions = this.preLessonQuestions
    else if (questionType === "postLesson")
      this.questions = this.postLessonQuestions
    else 
      console.error("Wrong question type sent")

    return this.questions
  }

  setAnswers(questionType: "preLesson" | "postLesson"): Array<{id: number, answer: string}> {
    if (questionType === "preLesson")
      this.answers = this.preLessonAnswers
    else if (questionType === "postLesson")
      this.answers = this.postLessonAnswers
    else 
      console.error("Wrong question type sent")
    
    return this.answers
  }

  setGivenAnswers(givenAnswers: object) {
    this.givenAnswers = []
    for (let i = 1; i <= 10; i++) {
      this.givenAnswers.push({
        id: i,
        answer: givenAnswers["question" + i]
      })
    }

    return this.givenAnswers
  }

  getQuestions(): Array<Object> | null {
    if (this.questions.length > 0)
      return this.shuffleArray(this.questions)
    else 
      console.error("Set the question type first!")
    return null
  }

  getAnswers(questionType: "preLesson" | "postLesson"): Array<Object> {
    if (questionType === "preLesson")
      return this.preLessonAnswers
    else if (questionType === "postLesson")
      return this.postLessonAnswers
    else 
      console.error("Wrong question type sent")
  }

  getScore(questionType: "preLesson" | "postLesson", givenAnswers: Array<{id: number, answer: string}> = this.givenAnswers): number {
    this.setQuestions(questionType)
    this.setAnswers(questionType)

    var score = 0
    this.correctQuestions = []
    // match correct and given answers
    givenAnswers.forEach(givenAnswer => {
      for (var correctAnswer of this.answers) {
        if (correctAnswer.id === givenAnswer.id) {
          if (correctAnswer.answer === givenAnswer.answer)  {
            score += 1
            this.correctQuestions.push(givenAnswer.id)
          }
          break
        }
      }
    })

    return score
  }
}
