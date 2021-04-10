import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  // fiveMinutesPassed has been made an environment variable
  // so that developers wont have to wait 5 minutes everytime
  fiveMinutesPassed = environment.fiveMinutesPassed;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.fiveMinutesPassed = true, 300000)
  }

}
