import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route = ""
  isExperiment = (Math.random() < 0.5)

  constructor() { }

  ngOnInit(): void {

    if (this.isExperiment) {
      this.route = "/test/pretest"
      environment.isExperimentGroup = true;
    } else {
      this.route = "/lesson"
      environment.isExperimentGroup = false;
    }
  }

}
